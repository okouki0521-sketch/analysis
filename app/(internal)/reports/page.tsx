export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">レポート</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2">
          ✨ 週次レポートを生成
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">週間成長レポート</h2>
            <p className="text-slate-500">2026年10月16日 - 10月23日</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm border border-slate-300 rounded-md hover:bg-slate-50">Copy MD</button>
            <button className="px-3 py-1.5 text-sm border border-slate-300 rounded-md hover:bg-slate-50">Export PDF</button>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <h3>今週の成果</h3>
          <ul>
            <li>フォロワー増加: +124 (目標達成率 110%)</li>
            <li>総リーチ: 45.2K (+12%)</li>
            <li>サイトクリック: 892 (+5%)</li>
            <li>購入数: 34 (+2)</li>
          </ul>

          <h3>伸びた要因</h3>
          <p>
            「東京の隠れ家カフェ」というフックを使ったリールの保存率が高く（4.5%）、アルゴリズムに評価されてリーチが伸びました。
            また、キャプションでAI旅行プラン作成への導線を明確にしたことで、サイトクリックも前週比で増加しています。
          </p>

          <h3>改善すべき課題</h3>
          <p>
            カルーセル投稿の最後まで見られる割合が低く、滞在時間が短いです。2枚目への誘導を強化する必要があります。
          </p>

          <h3>次週の具体的なアクション</h3>
          <ol>
            <li>伸びたリールの構成（場所紹介＋価格＋予約方法）を横展開し、京都版を作成する。</li>
            <li>プロフィールのハイライトを整理し、「AIプラン作成方法」と「思い出動画事例」の2つに絞る。</li>
            <li>無料トライアルへの誘導をストーリーズで毎日実施する（FOMOを活用）。</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
