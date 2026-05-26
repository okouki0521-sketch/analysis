export default function SettingsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">設定</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">プロジェクト詳細</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">サービス名</label>
              <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue="Sakura Memories & AI Travel" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Instagramユーザー名</label>
              <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue="@sakura.memories" />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">ファネルURL設定 (分析用)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">サイト / LP URL</label>
              <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue="https://sakura-memories.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">無料トライアル申込URL</label>
              <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue="https://sakura-memories.com/trial" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">決済ページURL</label>
              <input type="text" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue="https://sakura-memories.com/checkout" />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">目標KPI</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">目標フォロワー数</label>
              <input type="number" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue={10000} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">月間目標購入数</label>
              <input type="number" className="w-full border border-slate-300 rounded-md px-3 py-2" defaultValue={100} />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">設定を保存</button>
        </div>
      </div>
    </div>
  );
}
