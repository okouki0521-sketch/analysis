import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  
  if (!code) {
    return NextResponse.redirect(new URL('/connect-instagram?error=NoCode', request.url))
  }

  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // 1. Exchange code for short-lived token
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const redirectUri = `${baseUrl}/api/instagram/callback`;
    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_APP_SECRET}&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}`
    
    const tokenResponse = await fetch(tokenUrl)
    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      return NextResponse.redirect(new URL('/connect-instagram?error=TokenExchangeFailed', request.url))
    }

    // 2. Exchange short-lived token for long-lived token
    const longLivedUrl = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_APP_SECRET}&fb_exchange_token=${tokenData.access_token}`
    
    const longLivedRes = await fetch(longLivedUrl)
    const longLivedData = await longLivedRes.json()
    const finalToken = longLivedData.access_token || tokenData.access_token

    // 3. Get Facebook Pages linked to the user
    const pagesUrl = `https://graph.facebook.com/v19.0/me/accounts?access_token=${finalToken}`
    const pagesRes = await fetch(pagesUrl)
    const pagesData = await pagesRes.json()

    if (!pagesData.data || pagesData.data.length === 0) {
      return NextResponse.redirect(new URL('/connect-instagram?error=NoFacebookPagesFound', request.url))
    }

    // 4. Find the Instagram Business Account linked to the pages
    let igAccountId = null
    let igUsername = null
    let igProfilePicture = null

    for (const page of pagesData.data) {
      const igUrl = `https://graph.facebook.com/v19.0/${page.id}?fields=instagram_business_account&access_token=${finalToken}`
      const igRes = await fetch(igUrl)
      const igData = await igRes.json()

      if (igData.instagram_business_account) {
        igAccountId = igData.instagram_business_account.id
        
        // Fetch IG details
        const detailsUrl = `https://graph.facebook.com/v19.0/${igAccountId}?fields=username,profile_picture_url,followers_count,media_count&access_token=${finalToken}`
        const detailsRes = await fetch(detailsUrl)
        const detailsData = await detailsRes.json()
        
        igUsername = detailsData.username
        igProfilePicture = detailsData.profile_picture_url
        break
      }
    }

    if (!igAccountId) {
      return NextResponse.redirect(new URL('/connect-instagram?error=NoInstagramAccountLinked', request.url))
    }

    // 5. Save to Supabase
    const { error: dbError } = await supabase
      .from('instagram_accounts')
      .upsert({
        instagram_user_id: igAccountId,
        username: igUsername || 'unknown',
        profile_picture_url: igProfilePicture,
        access_token_encrypted: finalToken,
        user_id: user.id, // Links to Supabase Auth User
        updated_at: new Date().toISOString()
      }, { onConflict: 'instagram_user_id' })

    if (dbError) {
      return NextResponse.redirect(new URL('/connect-instagram?error=DatabaseError', request.url))
    }

    // Redirect to dashboard with success flag
    return NextResponse.redirect(new URL('/dashboard?connected=true', request.url))

  } catch (error: any) {
    return NextResponse.redirect(new URL('/connect-instagram?error=UnexpectedError', request.url))
  }
}
