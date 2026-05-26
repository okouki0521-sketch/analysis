import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Sparkles } from 'lucide-react'

export default function LoginPage() {
  const signIn = async (formData: FormData) => {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }
    return redirect('/dashboard')
  }

  const signUp = async (formData: FormData) => {
    'use server'
    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })
    if (error) {
      return redirect('/login?message=Could not create user')
    }
    return redirect('/dashboard') // In dev, skip email confirmation for now
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mt-20 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white mb-6 shadow-xl shadow-purple-500/30">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">BN Analytics Pro</h1>
        <p className="text-slate-500 font-medium mt-2">ログインしてダッシュボードにアクセス</p>
      </div>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-foreground bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <label className="text-sm font-semibold text-slate-700" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 mb-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-sm font-semibold text-slate-700" htmlFor="password">
          パスワード
        </label>
        <input
          className="rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 mb-6 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button
          formAction={signIn}
          className="bg-slate-900 text-white rounded-xl px-4 py-3 font-semibold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-md shadow-slate-900/20"
        >
          ログイン
        </button>
        <button
          formAction={signUp}
          className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 font-semibold hover:bg-slate-50 transition-all active:scale-[0.98]"
        >
          新規登録
        </button>
      </form>
    </div>
  )
}
