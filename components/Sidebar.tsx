import Link from "next/link";
import { 
  LayoutDashboard, 
  Instagram, 
  Grid, 
  Sparkles, 
  CalendarDays, 
  Users, 
  LineChart, 
  FileText, 
  Settings 
} from "lucide-react";

export function Sidebar() {
  const routes = [
    { name: "ダッシュボード", path: "/dashboard", icon: LayoutDashboard },
    { name: "Instagram連携", path: "/connect-instagram", icon: Instagram },
    { name: "投稿一覧", path: "/posts", icon: Grid },
    { name: "AIアドバイス", path: "/ai-advice", icon: Sparkles },
    { name: "投稿カレンダー", path: "/calendar", icon: CalendarDays },
    { name: "競合分析", path: "/competitors", icon: Users },
    { name: "ファネル分析", path: "/funnel", icon: LineChart },
    { name: "レポート", path: "/reports", icon: FileText },
    { name: "設定", path: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col h-full shadow-2xl z-20">
      <div className="h-16 flex items-center px-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
            A
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Analytics Pro</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Menu</div>
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.path}
              href={route.path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800/80 hover:text-white transition-all duration-200 group"
            >
              <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span className="font-medium text-sm">{route.name}</span>
            </Link>
          );
        })}
      </div>
      
      <div className="p-4 mt-auto border-t border-slate-800/50">
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
            <div className="w-full h-full bg-slate-900 rounded-full border-2 border-slate-900 overflow-hidden">
               <div className="w-full h-full bg-slate-700"></div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">@sakura.memories</p>
            <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              CONNECTED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
