# コアラのまくらえいご - 公開・デプロイ手順

このアプリを世界中の人に遊んでもらうために、無料で使える「Vercel」というサービスを使って公開（デプロイ）します。

## 事前準備

1.  **GitHubアカウント**: まだお持ちでない場合は [GitHub](https://github.com/) でアカウントを作成してください。
2.  **Vercelアカウント**: [Vercel](https://vercel.com/) にアクセスし、GitHubアカウントでログインしてください。
3.  **Gitのインストール**: もしPCにGitが入っていない場合はインストールが必要です（Macなら通常入っています）。

## ステップ1: GitHubにコードをアップロード

まず、手元のコードをGitHubという場所に保存します。

1.  GitHubで新しいリポジトリを作成します（名前例: `koala-english`）。
    - "Public"（公開）を選択します。
    - "Initialize this repository with a README" などのチェックは**外して**ください。
2.  ターミナルで以下のコマンドを順番に実行し、GitHubにコードを送ります。
    > 注意: `<あなたのGitHubユーザー名>`の部分は自分のユーザー名に書き換えてください。

```bash
# プロジェクトのフォルダに移動（もし別の場所にいる場合）
cd /Users/home/.gemini/antigravity/playground/swift-perseverance/koala-english

# Gitの初期化
git init

# 全ファイルをステージング（アップロード準備）
git add .

# コミット作成（保存）
git commit -m "Initial commit"

# GitHubリポジトリを登録（URLは自分のものに変えてください！）
git remote add origin https://github.com/<あなたのGitHubユーザー名>/koala-english.git

# GitHubに送信（メインブランチへ）
git branch -M main
git push -u origin main
```

## ステップ2: Vercelで公開する

1.  [Vercelのダッシュボード](https://vercel.com/dashboard)に行きます。
2.  「Add New...」ボタンを押し、「Project」を選択します。
3.  GitHub上の `koala-english` リポジトリが表示されるので、「Import」ボタンを押します。
4.  設定画面が表示されます。
    - **Framework Preset**: `Vite` になっていることを確認してください。
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
    - もしこれらが自動で入っていない場合は手動で設定しますが、通常は自動認識されます。
5.  「Deploy」ボタンを押します。

数分待つと、紙吹雪が舞って「Congratulations!」と表示されます。
そこに表示されるURL（例: `koala-english.vercel.app`）が、あなたのアプリの公開URLです！
このURLを友達やSNSでシェアすれば、誰でも遊ぶことができます。

## BGMファイルについて

BGMを鳴らすために、音楽ファイルを用意する必要があります。
※ GitHubには大きな音楽ファイルは上げにくい場合がありますが、数MB程度なら大丈夫です。

1.  好きな音楽ファイル（MP3形式推奨）を用意し、名前を `bgm.mp3` に変更します。
2.  プロジェクトの `public` フォルダの中に、その `bgm.mp3` を置きます。
3.  再度 GitHub に変更をプッシュします。

```bash
git add public/bgm.mp3
git commit -m "Add BGM file"
git push origin main
```

Vercelは自動的に変更を検知して、新しいバージョンを公開してくれます。

## 更新するときは？

アプリを修正したり、機能を追加したときは、変更をGitHubにプッシュするだけです。
Vercelが自動的に最新版を公開してくれます。

```bash
git add .
git commit -m "機能修正など"
git push origin main
```
