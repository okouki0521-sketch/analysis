"use client";

import { ArrowUpRight, TrendingUp, Users, MousePointerClick, ShoppingBag, Activity, CalendarDays, Sparkles } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const followerData = [
  { name: '5/1', followers: 9800, reach: 2400 },
  { name: '5/5', followers: 9950, reach: 3100 },
  { name: '5/10', followers: 10020, reach: 2800 },
  { name: '5/15', followers: 10100, reach: 4500 },
  { name: '5/20', followers: 10150, reach: 3800 },
  { name: '5/25', followers: 10190, reach: 4100 },
  { name: '5/30', followers: 10234, reach: 5200 },
];

const countryData = [
  { name: "日本", value: 65, fill: "#6366f1" },
  { name: "台湾", value: 12, fill: "#ec4899" },
  { name: "アメリカ", value: 8, fill: "#8b5cf6" },
  { name: "韓国", value: 6, fill: "#14b8a6" },
  { name: "その他", value: 9, fill: "#94a3b8" },
];
export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8 pt-10">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">ダッシュボード</h1>
          <p className="text-slate-500 font-medium">@sakura.memories の最新のパフォーマンス状況です。</p>
        </div>
        <button className="bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2 text-slate-700">
          <CalendarDays className="w-4 h-4 text-slate-400" />
          過去30日間
        </button>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "フォロワー数", value: "10,234", change: "+124", isUp: true, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
          { label: "総リーチ数", value: "45.2K", change: "+12.5%", isUp: true, icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
          { label: "サイトクリック", value: "892", change: "+5.2%", isUp: true, icon: MousePointerClick, color: "text-pink-600", bg: "bg-pink-100" },
          { label: "購入数", value: "34", change: "-2.1%", isUp: false, icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-100" },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100/60 hover:shadow-md transition-all duration-300 group cursor-default">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${kpi.bg} ${kpi.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${kpi.isUp ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                  {kpi.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />}
                  {kpi.change}
                </span>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">{kpi.label}</p>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{kpi.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100/60">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800">フォロワー増加推移</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors">詳細を見る &rarr;</button>
          </div>
          <div className="h-[320px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={followerData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="followers" name="フォロワー数" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 rounded-2xl shadow-xl relative overflow-hidden text-white border border-slate-800">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl"></div>
          
          <h3 className="font-bold text-lg mb-2 relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            AI インサイト
          </h3>
          <p className="text-sm text-slate-300 mb-6 relative z-10 font-medium">最新のデータに基づくAIからのアドバイスです。</p>
          
          <div className="space-y-4 relative z-10 mb-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <p className="text-[11px] text-indigo-300 font-bold mb-1.5 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Good Point
              </p>
              <p className="text-sm font-medium leading-relaxed text-slate-100">先週投稿した「東京夜景スポット5選」の保存率が驚異の18%を記録しています。</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <p className="text-[11px] text-pink-300 font-bold mb-1.5 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span> Action Required
              </p>
              <p className="text-sm font-medium leading-relaxed text-slate-100">プロフィールへのアクセスは多いですが、サイトクリック率が低下しています。自己紹介文の導線を見直しましょう。</p>
            </div>
          </div>
          
          <button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-lg shadow-white/5 relative z-10 active:scale-[0.98]">
            具体的な改善案を聞く
          </button>
        </div>
      </div>

      {/* Demographics Section (Countries) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100/60">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800">視聴者の国別割合 (トップ5)</h3>
            <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">アカウント全体</span>
          </div>
          <div className="h-[250px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#475569', fontWeight: 600 }} width={70} />
                <RechartsTooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`${value}%`, '割合']}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* New Demographics Donut Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100/60">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg text-slate-800">視聴者の年齢・性別</h3>
          </div>
          <div className="h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: '女性 18-24', value: 35, fill: '#ec4899' },
                    { name: '女性 25-34', value: 45, fill: '#f472b6' },
                    { name: '男性 18-24', value: 10, fill: '#3b82f6' },
                    { name: '男性 25-34', value: 10, fill: '#60a5fa' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => [`${value}%`, '割合']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600 mt-2">
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#f472b6]"></span> 女性 25-34 (45%)</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#ec4899]"></span> 女性 18-24 (35%)</div>
            <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#60a5fa]"></span> 男性 25-34 (10%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
