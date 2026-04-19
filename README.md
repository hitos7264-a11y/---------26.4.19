# 記憶媒体の価格動向 2026年4月19日

スマホ特化のモダンUIで、2026年4月19日時点のストレージ・スーパーサイクル（DRAM/NAND/SSD/HDD/Blu-ray/LTO/メモリーカードの歴史的価格大変動）を徹底解剖する、完全静的サイト。

本サイトは、以下の3つのソース資料を基に構築されています。

- **本編**：『2026年・記憶媒体価格大変動の全貌』（全13章）
- **追補版**：『2026年・記憶媒体価格大変動の全貌【追補版】』（全13章の"死角"）
- **訂正レポート**：『本編『2026年・記憶媒体価格大変動の全貌』の訂正』 ← **最優先で反映**

---

## 🌟 プロジェクトの目標

- **スマホ完全特化** のモダンUI（iPhone/Android双方で快適）
- 暗色のガラスモーフィズム＋グラデーション＋Noto Sans JP
- 本編 + 追補版 + 訂正ノートを **26章以上の多ページ構成** で整理
- 訂正レポートの情報を最も信頼できる情報として扱い、本編・追補版の事実誤り（計7件）を全て修正
- 画像は一切使用せず、SVGアイコンと文字主体で軽量化
- 進捗バーを使わず、reveal・アコーディオン・ladder-barといった控えめなモーション

---

## ✅ 完成した機能

### 1. トップページ（`index.html`）
- ヒーロー（タイトル・サマリーチップ・主要4指標カード）
- 3分でつかむ「2026年の本質」アコーディオン
- 価格ショックのvisual ladder（WD SN850X他6点、棒グラフ＋ビフォー/アフター）
- 業界3名の主要引用（Seagate CCO、WD CEO、Phison CEO）
- 本編13章・追補版13章の動的目次（検索フィルタ付き）
- 訂正ノートへの誘導バナー
- ダッシュボード／年表／用語集／訂正ノートへのクイックリンク

### 2. 本編 13章（`chapter-01.html` 〜 `chapter-13.html`）
| 章 | タイトル |
|---|---|
| 01 | DRAM ── 四半期で倍の価格暴騰 |
| 02 | NAND ── チップが1年で8倍 |
| 03 | エンタープライズSSD ── 472%上昇 |
| 04 | HDD ── 回避先すら陥落 |
| 05 | Blu-ray撤退 ── 光学の終焉 |
| 06 | LTO磁気テープの再評価 |
| 07 | カード消滅事件 ── ソニー3/27 |
| 08 | なぜ起きたか ── HBM・AI・抑制 |
| 09 | 日本市場 ── DDR5で20万円 |
| 10 | 2028年、$500未満PC消滅 |
| 11 | IBM 4/1ショック ── 最大816% |
| 12 | 見通し ── 2027年末まで続く |
| 13 | 実践的示唆 ── 買い方の変化 |

### 3. 追補版「13の死角」（`supplement-01.html` 〜 `supplement-13.html`）
| 補章 | タイトル |
|---|---|
| S01 | HBM技術レベルの解剖 |
| S02 | CXMT・YMTC中国勢の猛追 |
| S03 | 米中戦争とMATCH Act |
| S04 | キオクシア復活とNAND再編 |
| S05 | HAMRと44TB HDD時代 |
| S06 | Project Silica・DNAストレージ |
| S07 | AIデータセンター電力危機 |
| S08 | 車載半導体への飛び火 |
| S09 | 円安 ── 隠れた増幅装置 |
| S10 | Chia暗号通貨のHDD投機 |
| S11 | 中古市場と42%データ漏洩 |
| S12 | ゲーム機市場の地雷原 |
| S13 | 環境負荷・電子ゴミ |

### 4. ユーティリティページ
- `chapters.html` — 本編13章 一覧（検索フィルタ対応）
- `supplements.html` — 追補版13章 一覧（検索フィルタ対応）
- `corrections.html` — 訂正ノート（最優先反映、7件の Before/After）
- `dashboard.html` — 価格ダッシュボード（DRAM/NAND/SSD/エンプラSSD/HDD/LTO/IBM/HBMの全指標）
- `timeline.html` — 2024〜2030年の主要イベント時系列
- `glossary.html` — 用語集（29語、検索フィルタ対応）

### 5. 共通UI（全ページ）
- 固定ヘッダ（ブランド＋メニューボタン）
- スライドアウト式 Drawer メニュー（本編・追補・ツール・訂正）
- 固定ボトムナビ（ホーム/本編/追補/データ/訂正の5タブ）
- フッタ（snapshot日付＋方針記載）
- アコーディオン、タブ、価格バー、reveal スクロールアニメ
- Noto Sans JP + JetBrains Mono の2フォント

---

## 🚨 訂正レポートの反映（最優先）

訂正レポートで誤りと指摘された7件を、本サイトでは **必ず正しい情報で** 掲載しています：

| # | 項目 | 修正前 → 修正後 |
|---|---|---|
| 01 | マイクロン撤退範囲 | 日本国内限定 → **グローバル**（世界全体） |
| 02 | フィソンCEO表記 | 潘健成+日本語読み → **Pua Khein-Seng（K.S. Pua）** |
| 03 | キオクシア上場時時価総額 | 約3兆円 → **約8,000億円弱**（$52〜58億） |
| 04 | MATCH Act正式名称 | Maintaining American… → **Multilateral Alignment of Technology Controls on Hardware Act**（H.R.8170・超党派法案） |
| 05 | CXMT IPO規模 | $80〜100億 → **$4.2B**（約42億ドル、上海STAR Market） |
| 06 | Blancco調査年 | 2025年 → **2019年**調査（Ontrack共同、eBay購入159台） |
| 07 | HBM市場規模 | 複数数値が不整合 → **$35B → $54.6B（+58%）** にBofA整合で統一 |

全ページで統一して正しい値を使用。`corrections.html`には詳細なBefore/After表示ページを用意。

---

## 📂 ファイル構成

```
記憶媒体の価格動向 2026年4月19日/
├── index.html                    # トップページ
├── chapters.html                 # 本編一覧
├── supplements.html              # 追補版一覧
├── corrections.html              # 訂正ノート
├── dashboard.html                # 価格ダッシュボード
├── timeline.html                 # 年表
├── glossary.html                 # 用語集
│
├── chapter-01.html 〜 chapter-13.html     # 本編13章
├── supplement-01.html 〜 supplement-13.html # 追補版13章
│
├── css/
│   └── style.css                 # モバイル特化UI（約29KB, 1100+行）
│
├── js/
│   ├── shell.js                  # 共通UI注入（ヘッダ/Drawer/ナビ/フッタ/目次）
│   └── app.js                    # インタラクション（Drawer/アコーディオン/reveal/検索）
│
├── source/                       # オリジナル3ファイル（開発用参照）
│   ├── main.txt
│   ├── supplement.txt
│   └── corrections.txt
│
└── README.md                     # 本ファイル
```

合計：HTML 29ファイル、CSS 1ファイル、JS 2ファイル、source 3ファイル＝ 35ファイル

---

## 🧭 主要な機能的エントリURI（全て相対パス）

| パス | 説明 |
|---|---|
| `index.html` | トップ（ヒーロー＋主要4指標＋目次） |
| `chapters.html` | 本編13章の一覧（検索可） |
| `supplements.html` | 追補13章の一覧（検索可） |
| `chapter-NN.html` | 本編第N章（01〜13）|
| `supplement-NN.html` | 追補第N補章（01〜13）|
| `corrections.html` | 訂正ノート（最重要、7件） |
| `dashboard.html` | 価格データの表形式ダッシュボード |
| `timeline.html` | 2024〜2030年の年表 |
| `glossary.html` | HBM/TSV/HAMR/LTO等 29語の用語集（検索可） |

各章ページには「前章 / 次章」ナビ、Drawerには全ページへのリンクを搭載。

---

## 🎨 使用技術

- **HTML5** — セマンティックタグを適切に使用（`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`）
- **CSS3** — CSS変数、Flexbox、Grid、backdrop-filter、mask-compositeを活用
- **Vanilla JavaScript** — 依存関係ゼロ、IntersectionObserverとDOM APIのみ
- **Google Fonts** — Noto Sans JP（400-900）+ JetBrains Mono（500, 700）
- **SVG icons** — インラインSVGで軽量＆色変更自由

CDNは Google Fonts のみ。フレームワーク・画像・外部ライブラリ一切不使用。

---

## 📱 モバイル最適化の特徴

- `viewport-fit=cover`で iPhoneのセーフエリア対応
- `env(safe-area-inset-bottom)` をボトムナビ下のパディングに適用
- `-webkit-tap-highlight-color: transparent` でタップ時の青ハイライト無効化
- 最大幅 560px（標準）/ 720px（ワイド）のコンテナで、大画面でも中央表示
- `html{font-size}`を 14.5 / 15.5 / 16px と3段階で最適化
- 主要ボタン・リンクは最低44pxのタップ領域を確保
- `prefers-reduced-motion: reduce` でアニメを自動抑制

---

## 🚫 未実装／ご相談対象

- ダークモード/ライトモード切替（現状はダーク固定）
- 多言語対応（現状は日本語のみ）
- 各章の本文をさらに長文化したディープダイブ版
- 価格変動チャート（Chart.js/ECharts）の動的描画 ※今回は表形式で完結
- サービスワーカーによるオフライン対応
- 検索機能を全文検索（Lunr.js等）へ拡張

---

## 🚀 次のステップ提案

1. **全文検索**：Lunr.js or Fuse.js を追加し、用語＋本文を横断検索
2. **お気に入り機能**：localStorage利用で気になった章をブックマーク
3. **読了マーク**：各章の読了状況を記録し、トップ画面に進捗チップで表示（※進捗バーではない）
4. **ダークモード/ライトモード**：`prefers-color-scheme`検出＋手動切替
5. **PWA化**：ホーム画面への追加＆オフライン閲覧対応
6. **価格チャート化**：主要指標の時系列を Chart.js で描画

---

## 🚢 公開・デプロイ

本サイトを公開する場合は、**Publish タブ** からワンクリックで公開できます。Publish タブ上で全ての作業が完結し、公開URLが発行されます。

---

## 📖 参考出典（本文内で明示）

TrendForce / Counterpoint Research / Tom's Hardware / GamersNexus / Forbes（Tom Coughlin）/ VDURA（Flash Volatility Index）/ The Verge / Dropreference / PC Watch / Mynavi / ITmedia / Igor's Lab / sourceability / Bank of America / S&P Global / Gartner（Ranjit Atwal）/ BBC / PCSpecialist / Framework Computer / Petapixel / ComputerBase / How-To Geek / TechRadar / CNBC / Digitimes / Omdia / IT Jungle / PCMag / Bloomberg / Nature / Microsoft Research / Atlas Data Storage / Twist Bioscience / Blancco Technology Group / Ontrack / IEA / 南華早報 / JEDEC 他

---

最終更新：2026.04.19 (snapshot)
