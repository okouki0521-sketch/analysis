import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  
  if (error) {
    return NextResponse.json({ status: "Facebookからの拒否", detail: error })
  }
  if (!code) {
    return NextResponse.json({ status: "コードが見つかりません" })
  }

  try {
    const supabase = createClient()
    
    // 1. Token Exchange
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const redirectUri = `${baseUrl}/api/instagram/callback`;
    const tokenUrl = `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_APP_SECRET}&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}`
    
    const tokenResponse = await fetch(tokenUrl)
    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      return NextResponse.json({ status: "トークン交換エラー", detail: tokenData.error })
    }

    // 2. Long-lived Token
    const longLivedUrl = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.INSTAGRAM_APP_ID}&client_secret=${process.env.INSTAGRAM_APP_SECRET}&fb_exchange_token=${tokenData.access_token}`
    const longLivedRes = await fetch(longLivedUrl)
    const longLivedData = await longLivedRes.json()
    const finalToken = longLivedData.access_token || tokenData.access_token

    // 3. Pages
    const pagesUrl = `https://graph.facebook.com/v19.0/me/accounts?access_token=${finalToken}`
    const pagesRes = await fetch(pagesUrl)
    const pagesData = await pagesRes.json()

    if (!pagesData.data || pagesData.data.length === 0) {
      return NextResponse.json({ status: "Facebookページが見つかりません", detail: pagesData })
    }

    // 4. IG Account
    let igAccountId = null
    let debugInfo = []

    for (const page of pagesData.data) {
      const igUrl = `https://graph.facebook.com/v19.0/${page.id}?fields=instagram_business_account&access_token=${finalToken}`
      const igRes = await fetch(igUrl)
      const igData = await igRes.json()
      debugInfo.push({ pageId: page.id, response: igData })

      if (igData.instagram_business_account) {
        igAccountId = igData.instagram_business_account.id
        break
      }
    }

    if (!igAccountId) {
      return NextResponse.json({ status: "Instagramアカウントが紐付いていません", detail: debugInfo })
    }

    return NextResponse.json({ status: "大成功！！", instagramId: igAccountId })

  } catch (error: any) {
    return NextResponse.json({ status: "予期せぬエラー", detail: error.message })
  }
}
