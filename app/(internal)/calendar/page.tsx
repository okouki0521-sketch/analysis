export default function CalendarPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">投稿カレンダー</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium flex items-center gap-2">
          ✨ 7日間の計画を生成
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">日付</th>
              <th className="p-4 font-semibold text-slate-600">タイプ</th>
              <th className="p-4 font-semibold text-slate-600">テーマ</th>
              <th className="p-4 font-semibold text-slate-600">目的</th>
              <th className="p-4 font-semibold text-slate-600">タイトル / フック</th>
              <th className="p-4 font-semibold text-slate-600">ステータス</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { date: "Oct 24", type: "Reel", theme: "日本旅行プラン", purpose: "サイトクリック", title: "3日で東京を満喫する最強AIプラン", status: "Draft" },
              { date: "Oct 25", type: "Carousel", theme: "思い出動画", purpose: "保存", title: "カップル旅行におすすめの撮影スポット5選", status: "Planned" },
              { date: "Oct 26", type: "Story", theme: "セールス投稿", purpose: "無料トライアル申込", title: "今週末の旅行プラン、まだ決まってない？", status: "Planned" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-4 whitespace-nowrap">{row.date}</td>
                <td className="p-4"><span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs">{row.type}</span></td>
                <td className="p-4">{row.theme}</td>
                <td className="p-4">{row.purpose}</td>
                <td className="p-4 font-medium">{row.title}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${row.status === 'Draft' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
