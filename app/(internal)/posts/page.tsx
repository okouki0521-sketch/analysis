export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">投稿一覧・分析</h1>
      
      <div className="flex gap-4 mb-8">
        <select className="border border-slate-200 rounded-md px-4 py-2">
          <option>すべてのタイプ</option>
          <option>リール</option>
          <option>カルーセル</option>
          <option>画像</option>
        </select>
        <select className="border border-slate-200 rounded-md px-4 py-2">
          <option>過去30日間</option>
          <option>過去7日間</option>
          <option>全期間</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 font-medium text-slate-500">投稿</th>
              <th className="p-4 font-medium text-slate-500">リーチ</th>
              <th className="p-4 font-medium text-slate-500">エンゲージメント</th>
              <th className="p-4 font-medium text-slate-500">保存数</th>
              <th className="p-4 font-medium text-slate-500">サイトクリック</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-slate-50 cursor-pointer">
                <td className="p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-md"></div>
                  <div>
                    <p className="font-medium text-sm">サンプルの投稿タイトル {i}</p>
                    <p className="text-xs text-slate-500">2日前 • リール</p>
                  </div>
                </td>
                <td className="p-4">12.4K</td>
                <td className="p-4">842</td>
                <td className="p-4">120</td>
                <td className="p-4">15</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
