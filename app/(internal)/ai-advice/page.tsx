import { Sparkles, PlayCircle, BookOpen, Video, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AIAdvicePage() {
  return (
    <div className="p-4 md:p-8 pt-10 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2 flex items-center gap-3">
          <div className="bg-indigo-100 p-2.5 rounded-xl text-indigo-600">
            <Sparkles className="w-6 h-6" />
          </div>
          AI コンテンツプロデューサー
        </h1>
        <p className="text-slate-500 font-medium text-lg max-w-2xl">
          過去のインサイトデータから「最も伸びる可能性が高い」次回の投稿企画をAIが立案し、具体的な台本と撮影シチュエーションまで提案します。
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Data Basis & Proposal Intro */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-indigo-700/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              今回の企画の根拠
            </h3>
            <div className="space-y-3 text-sm text-indigo-100 font-medium leading-relaxed relative z-10">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                過去の「裏技系」リールの保存率が平均の2.5倍と非常に高いです。
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                視聴者の65%が日本国内ですが、台湾・韓国からのリーチが急増しています。
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                プロフアクセス率が低下しているため、強烈なCTA（行動喚起）が必要です。
              </p>
            </div>
            <button className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-sm font-bold transition-colors backdrop-blur-sm border border-white/10 flex justify-center items-center gap-2">
              別の切り口で再生成 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: The Script & Situation */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 font-bold text-xs rounded-full mb-4 uppercase tracking-wider">
              AI Proposed Idea
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight">
              【外国人観光客向け】日本人が本当は教えたくない、東京駅の地下迷宮「100円」神ロッカー
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-indigo-500" />
                  撮影シチュエーション
                </h4>
                <ul className="text-sm text-slate-600 space-y-2 font-medium">
                  <li>📍 <strong>場所:</strong> 東京駅 八重洲地下街の人通りが少ない通路</li>
                  <li>📱 <strong>アングル:</strong> スマホを持った自撮り風から始まり、コインロッカーにカメラを向ける主観映像(POV)</li>
                  <li>🎵 <strong>BGM:</strong> トレンドのアップテンポな洋楽（Lo-Fi HipHop系）</li>
                  <li>✨ <strong>工夫:</strong> 画面上に英語と中国語のテロップを併記する</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  キャプション＆ハッシュタグ
                </h4>
                <p className="text-sm text-slate-600 font-medium mb-3 line-clamp-3">
                  東京駅で大きなスーツケースを持ち歩いていませんか？😫 実は駅の端っこに、たった100円で預けられる神ロッカーがあるんです... 詳細はプロフィールのリンク（旅行ガイド）からチェック！
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-semibold">#tokyotrip</span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-semibold">#japantravel</span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md font-semibold">#tokyostation</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-indigo-500" />
                動画台本（15秒ショート）
              </h4>
              <div className="space-y-3">
                {[
                  { time: "0:00 - 0:02", visual: "困った顔でスーツケースを引く映像（テロップ：Stop paying 700 yen for lockers!）", audio: "東京駅でロッカー難民になってない？" },
                  { time: "0:02 - 0:06", visual: "テンポよく歩き、秘密の通路に入る主観映像", audio: "実は改札から徒歩3分の場所に、ガラ空きの100円ロッカーがあるんです。" },
                  { time: "0:06 - 0:12", visual: "実際に100円を入れて荷物を預ける映像", audio: "大きいスーツケースも入るし、何より超穴場だから絶対空いてる！" },
                  { time: "0:12 - 0:15", visual: "画面を指差す映像（テロップ：Link in Bio!）", audio: "具体的な行き方マップは、プロフィールのリンクにまとめました！今すぐ保存して！" },
                ].map((scene, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
                    <div className="w-20 shrink-0">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-md">{scene.time}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 mb-1">🎬 {scene.visual}</p>
                      <p className="text-sm font-medium text-slate-600">🗣️ 「{scene.audio}」</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
