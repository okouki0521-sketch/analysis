# Instagram Marketing Analytics Pro

## 【作ったもの】
Instagram運用を徹底分析し、フォロワー数・リール再生数・プロフィールアクセス・サイトクリック・商品購入数を増やすためのAIアドバイスを出す、自分たち専用のInstagramマーケティング分析サイトのMVPの土台（UIとディレクトリ構造、DB設計）を構築しました。

## 【主な機能】
- **ダッシュボード**: Instagram運用全体を一目で見られるKPI表示
- **Instagram連携**: Meta OAuthを用いた認証とトークン管理（UIモックアップ）
- **投稿分析**: 投稿一覧の表示と、個別投稿のAI分析（UIモックアップ）
- **AIアドバイス**: 運用全体に対するAIからの改善提案
- **投稿カレンダー**: AIが生成する7日間・30日間の投稿計画
- **競合分析**: 競合アカウントを手動登録し比較する機能
- **売上導線分析 (Funnel)**: リーチから購入までの離脱ポイントの特定
- **レポート生成**: 週次・月次レポートの出力

## 【Instagram API連携の現状】
現在は、フロントエンドのUI/UX（モックデータ）および、SupabaseのDB設計（`supabase.sql`）、必要なファイル・ディレクトリ構造の構築まで完了しています。
APIの実際のリクエスト処理（`lib/instagram/...` や `app/api/instagram/...`）のガワと環境変数の設定ファイル（`.env.local`）を用意しており、API制限で開発が止まらないよう、モックベースで画面確認ができる状態にしています。

## 【取得できるデータ】（※API実装後）
- アカウント情報（フォロワー数、フォロー数、投稿数など）
- メディアの基本情報（いいね、コメント、保存、シェアなど）
- メディアインサイト（リーチ、インプレッション、再生数、プロフィールアクセスなど）※権限・投稿タイプによる

## 【取得できない可能性があるデータ】
- `instagram_manage_insights` など、Meta App Review（アプリ審査）を通過していない権限に依存するデータ。
- Storiesなど24時間で消えるコンテンツの過去インサイト。
- サイトクリックからの「購入数」「売上」はInstagram APIでは直接取得できないため、将来的なGoogle AnalyticsやStripe連携を想定し手動入力・補完する設計です。
- Instagram APIの仕様変更により、特定指標（例: `shares`, `profile_visits`）の取得可否が変わる可能性があります。その際はUI上で「取得不可」と明示します。

## 【必要なMeta設定】
1. [Meta for Developers](https://developers.facebook.com/) でアプリを作成（ビジネスタイプ）
2. Instagram Graph APIとFacebook Login for Businessプロダクトを追加
3. アプリの「設定 > ベーシック」で `App ID` と `App Secret` を取得
4. Facebookページを作成し、Instagramのプロアカウント（ビジネス/クリエイター）とリンク
5. テスト用に、開発者のInstagramアカウントをテスターとして登録
6. 本番運用に向けて、必要な権限（`instagram_basic`, `instagram_manage_insights` 等）のApp Reviewを申請

## 【必要な環境変数】
プロジェクトルートの `.env.local` に以下を設定してください。
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
INSTAGRAM_APP_ID=your_instagram_app_id
INSTAGRAM_APP_SECRET=your_instagram_app_secret
OPENAI_API_KEY=your_openai_api_key
```

## 【Supabase設定】
1. Supabaseプロジェクトを作成
2. プロジェクトのSQLエディタを開く
3. `supabase.sql` の内容をコピー＆ペーストして実行し、テーブルを作成
4. APIキー（URLとanon key）を取得し、`.env.local`に設定

## 【起動方法】
※Node.jsがインストールされている環境が必要です。
```bash
cd instagram-analytics
npm install
npm run dev
```
または、提供されているモック用ソースコードをご自身のNext.js環境へコピーして使用してください。

## 【注意点】
- 非公式スクレイピングは行わず、必ずInstagram Graph APIを使用してください。
- トークンの期限切れ（60日間のLong-Lived Token）に備え、期限前にリフレッシュする処理を今後APIルートに実装する必要があります。
- エラーハンドリングとして、API呼び出し失敗時も画面全体がクラッシュせず、エラーメッセージが表示されるフォールバックUI（Error Boundary等）の組み込みを推奨します。

## 【次にやるべきこと】
1. Meta for Developersでのアプリ作成と、Instagramプロアカウントの紐付け。
2. `lib/instagram/auth.ts` などのOAuth 2.0認証フロー（アクセストークンの取得・Supabaseへの保存）のバックエンド実装。
3. OpenAI APIを使った実際のプロンプト呼び出し処理の組み込み（`lib/ai/analyzePost.ts` 等）。
4. 実際のNext.js（Node.js環境）でのビルド・動作確認。
