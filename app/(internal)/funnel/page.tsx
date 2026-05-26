"use client";

import { FunnelChart, Funnel, LabelList, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import { Filter, ArrowRightCircle, Sparkles, TrendingDown } from "lucide-react";

const funnelData = [
  { step: "リーチ (Reach)", value: 100000, fill: "#818cf8" },
  { step: "プロフィール訪問", value: 2500, fill: "#a78bfa" },
  { step: "リンククリック", value: 120, fill: "#f472b6" },
  { step: "LP閲覧", value: 105, fill: "#fb923c" },
  { step: "購入 (Purchase)", value: 3, fill: "#fbbf24" },
];

const customTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100">
        <p className="font-bold text-slate-800">{payload[0].payload.step}</p>
        <p className="text-indigo-600 font-extrabold">{payload[0].value.toLocaleString()} 人</p>
      </div>
    );
  }
  return null;
};

export default function FunnelPage() {
  return (
    <div className="p-4 md:p-8 pt-10 max-w-6xl mx-auto">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
            <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600">
              <Filter className="w-6 h-6" />
            </div>
            ファネル分析
          </h1>
          <p className="text-slate-500 font-medium text-lg">
            Instagramから最終購入までの「どこでユーザーが離脱しているか」を可視化します。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Left: Visual Funnel Chart */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
          <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-indigo-500" />
            ユーザーの離脱フロー
          </h3>
          <div className="h-[400px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <RechartsTooltip content={customTooltip} />
                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >
                  <LabelList 
                    position="center" 
                    fill="#fff" 
                    stroke="none" 
                    dataKey="value" 
                    formatter={(val: number) => val.toLocaleString()}
                    fontWeight="bold"
                    fontSize={18}
                  />
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Step-by-step Conversion Rates */}
        <div className="flex flex-col justify-center space-y-4">
          {[
            { step: "リーチ ➡ プロフ訪問", rate: "2.5%", label: "興味喚起率", status: "good", desc: "動画のフックは良く機能しています。" },
            { step: "プロフ訪問 ➡ リンク", rate: "4.8%", label: "クリック率", status: "bad", desc: "プロフィールのCTAが弱いです。矢印等でリンクを強調しましょう。" },
            { step: "リンク ➡ LP閲覧", rate: "87.5%", label: "遷移成功率", status: "good", desc: "リンク先の表示速度は問題ありません。" },
            { step: "LP閲覧 ➡ 購入", rate: "2.8%", label: "成約率 (CVR)", status: "bad", desc: "LPのファーストビューで離脱しています。オファーを改善してください。" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="mt-1">
                <ArrowRightCircle className={`w-6 h-6 ${item.status === 'good' ? 'text-emerald-500' : 'text-rose-500'}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold text-slate-800">{item.step}</p>
                  <span className={`px-2 py-1 rounded-md text-sm font-bold ${item.status === 'good' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {item.label}: {item.rate}
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 relative z-10">
          <Sparkles className="w-6 h-6 text-yellow-300" /> AI ボトルネック診断
        </h2>
        <div className="space-y-4 text-rose-50 text-lg font-medium relative z-10 leading-relaxed">
          <p><strong className="text-white text-xl">【最大の課題】</strong><br/>プロフィールアクセスからリンククリックへの遷移率（4.8%）が業界平均（約10%）に比べて著しく低く、ここで大量の見込み客を逃しています。</p>
          <div className="bg-black/20 p-5 rounded-2xl border border-white/10 backdrop-blur-md mt-6">
            <p className="font-bold text-white mb-2">🔥 改善アクションプラン</p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>自己紹介文の最後の行を「👇日本旅行プランを10秒で無料作成」と具体的に書く</li>
              <li>「👇」の絵文字を使ってリンクの場所を視覚的に誘導する</li>
              <li>次回の動画の最後で、「プロフィールのリンクから無料で使えるよ！」と音声で直接呼びかける</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
