export default function CompetitorsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">競合分析</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">
          + 競合を追加
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">アカウント</th>
              <th className="p-4 font-semibold text-slate-600">フォロワー</th>
              <th className="p-4 font-semibold text-slate-600">主なテーマ</th>
              <th className="p-4 font-semibold text-slate-600">勝てるポイント (AI分析)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50">
              <td className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-medium">japan_travel_guide</p>
                  <a href="#" className="text-xs text-blue-500 hover:underline">Instagram</a>
                </div>
              </td>
              <td className="p-4">125K</td>
              <td className="p-4">一般的な観光地紹介</td>
              <td className="p-4">
                <span className="text-emerald-600 font-medium">パーソナライズされたAIプラン作成機能で差別化可能。</span>
                <p className="text-xs text-slate-500 mt-1">競合は情報提供のみで、個別の旅行プラン解決策を持っていない。</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
