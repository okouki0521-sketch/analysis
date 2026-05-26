import { ArrowRight } from "lucide-react";
export const dynamic = 'force-dynamic';

export default function ConnectInstagramPage() {
  const appId = process.env.INSTAGRAM_APP_ID;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const redirectUri = `${baseUrl}/api/instagram/callback`;
  // Standard scopes for IG Graph API
    const oauthUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${appId}&display=page&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}&auth_type=rerequest`;

  const oauthUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${appId}&display=page&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;

  return (
    <div className="p-8 max-w-4xl mx-auto pt-10">
      <h1 className="text-3xl font-extrabold mb-6 tracking-tight">Instagram連携</h1>
      
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-3xl mb-8 flex items-center justify-center shadow-xl shadow-pink-500/20">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">ビジネスアカウントを接続</h2>
        <p className="text-slate-500 mb-10 max-w-md text-lg leading-relaxed">
          Instagramプロアカウント（ビジネス/クリエイター）を連携して、インサイトデータの取得やAIによる分析を開始しましょう。
        </p>
        
        <a 
          href={oauthUrl}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 flex items-center gap-2"
        >
          Meta OAuthで連携する <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-slate-200 text-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">i</span>
          必要な権限について
        </h3>
        <ul className="space-y-3 text-sm text-slate-600 font-medium">
          <li>✅ instagram_basic</li>
          <li>✅ instagram_manage_insights</li>
          <li>✅ pages_show_list</li>
          <li>✅ pages_read_engagement</li>
        </ul>
      </div>
    </div>
  );
}
