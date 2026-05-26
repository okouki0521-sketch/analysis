export default function PostDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">投稿詳細分析</h1>
        <button className="text-sm font-medium text-slate-500 hover:text-slate-800">
          &larr; 投稿一覧へ戻る
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
            <div className="aspect-[4/5] bg-slate-100 flex items-center justify-center text-slate-400">
              Media Preview
            </div>
            <div className="p-4">
              <p className="text-sm text-slate-600 line-clamp-3">
                This is the caption of the post. Exploring Tokyo with this amazing AI planned itinerary! 🌸
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold mb-4 text-slate-800">指標 (Metrics)</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-slate-500 text-sm">リーチ</span><span className="font-medium text-sm">12,400</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">再生数</span><span className="font-medium text-sm">15,200</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">いいね</span><span className="font-medium text-sm">842</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">保存数</span><span className="font-medium text-sm">120</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">シェア</span><span className="font-medium text-sm">45</span></div>
              <div className="h-[1px] bg-slate-100 my-2"></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">プロフィールアクセス</span><span className="font-medium text-sm">340</span></div>
              <div className="flex justify-between"><span className="text-slate-500 text-sm">サイトクリック</span><span className="font-medium text-sm">15</span></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-900">
              <span className="text-2xl">🤖</span> AI Deep Dive
            </h2>
            <div className="space-y-4 text-sm text-indigo-900/80 bg-white/60 p-6 rounded-lg backdrop-blur-sm">
              <p><strong>【伸びた理由 / 伸びなかった理由】</strong><br/>冒頭の「東京の隠れ家カフェ」というフックがターゲットに刺さり、保存数が平均より3倍高くなっています。しかし、プロフィールへの誘導がないため、サイトクリックにつながっていません。</p>
              
              <p><strong>【冒頭3秒の改善案】</strong><br/>映像は素晴らしいですが、テキストテロップをもっと大きく、コントラストを高くして視認性を高めてください。</p>
              
              <p><strong>【購入につなげる導線】</strong><br/>キャプションで「このカフェを含む1日プランをAIで無料作成できます（リンクはプロフ）」と明記することで、AI旅行プラン作成サービスへの誘導を強化できます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
