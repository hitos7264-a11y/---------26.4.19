/* =========================================================
   Shell loader: injects header, drawer, bottom-nav, footer
   into every page to keep markup DRY.
   ========================================================= */

(function () {
  'use strict';

  // Chapter definition - single source of truth
  const MAIN_CHAPTERS = [
    { n: 1, t: 'DRAM ― 四半期で倍の価格暴騰', f: 'chapter-01.html' },
    { n: 2, t: 'NAND ― チップが1年で8倍', f: 'chapter-02.html' },
    { n: 3, t: 'エンタープライズSSD ― 472％上昇', f: 'chapter-03.html' },
    { n: 4, t: 'HDD ― 回避先すら陥落', f: 'chapter-04.html' },
    { n: 5, t: 'Blu-ray撤退 ― 光学の終焉', f: 'chapter-05.html' },
    { n: 6, t: 'LTO磁気テープの再評価', f: 'chapter-06.html' },
    { n: 7, t: 'カード消滅事件 ― ソニー3/27', f: 'chapter-07.html' },
    { n: 8, t: 'なぜ起きたか ― HBM・AI・抑制', f: 'chapter-08.html' },
    { n: 9, t: '日本市場 ― DDR5で20万円', f: 'chapter-09.html' },
    { n: 10, t: '2028年、500ドルPCが消える', f: 'chapter-10.html' },
    { n: 11, t: 'IBM 4/1ショック ― 最大816％', f: 'chapter-11.html' },
    { n: 12, t: '見通し ― 2027年末まで続く', f: 'chapter-12.html' },
    { n: 13, t: '実践的示唆 ― 買い方の変化', f: 'chapter-13.html' }
  ];

  const SUP_CHAPTERS = [
    { n: 1, t: 'HBM技術レベルの解剖', f: 'supplement-01.html' },
    { n: 2, t: 'CXMT・YMTC中国勢の猛追', f: 'supplement-02.html' },
    { n: 3, t: '米中半導体戦争とMATCH Act', f: 'supplement-03.html' },
    { n: 4, t: 'キオクシア復活とNAND再編', f: 'supplement-04.html' },
    { n: 5, t: 'HAMRと44TB HDD時代', f: 'supplement-05.html' },
    { n: 6, t: 'Project Silica・DNAストレージ', f: 'supplement-06.html' },
    { n: 7, t: 'AIデータセンター電力危機', f: 'supplement-07.html' },
    { n: 8, t: '車載半導体への飛び火', f: 'supplement-08.html' },
    { n: 9, t: '円安 ― 隠れた増幅装置', f: 'supplement-09.html' },
    { n: 10, t: 'Chia暗号通貨のHDD投機', f: 'supplement-10.html' },
    { n: 11, t: '中古市場と42％データ漏洩', f: 'supplement-11.html' },
    { n: 12, t: 'ゲーム機市場の地雷原', f: 'supplement-12.html' },
    { n: 13, t: '環境負荷・電子ゴミ', f: 'supplement-13.html' }
  ];

  window.SITE_DATA = { MAIN_CHAPTERS, SUP_CHAPTERS };

  /* ---------- Build Header ---------- */
  const headerMount = document.querySelector('[data-shell-header]');
  if (headerMount) {
    headerMount.innerHTML = `
      <header class="app-header">
        <div class="app-header-inner">
          <a href="index.html" class="brand">
            <div class="brand-mark">記</div>
            <div style="min-width:0;">
              <div class="brand-title">記憶媒体の価格動向</div>
              <div class="brand-sub">2026.04.19 — STORAGE SUPERCYCLE</div>
            </div>
          </a>
          <button class="header-btn" data-open-drawer aria-label="メニューを開く">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="14" y2="17"/></svg>
          </button>
        </div>
      </header>
    `;
  }

  /* ---------- Build Drawer ---------- */
  const drawerMount = document.querySelector('[data-shell-drawer]');
  if (drawerMount) {
    const mainLinks = MAIN_CHAPTERS.map(c => `
      <a class="drawer-link" href="${c.f}">
        <span class="idx">${String(c.n).padStart(2, '0')}</span>
        <span>${c.t}</span>
      </a>`).join('');
    const supLinks = SUP_CHAPTERS.map(c => `
      <a class="drawer-link sup" href="${c.f}">
        <span class="idx">S${String(c.n).padStart(2, '0')}</span>
        <span>${c.t}</span>
      </a>`).join('');

    drawerMount.innerHTML = `
      <div class="drawer-backdrop" data-drawer-backdrop></div>
      <aside class="drawer" data-drawer aria-label="全体メニュー">
        <div class="drawer-head">
          <h3>全メニュー</h3>
          <button class="drawer-close" data-close-drawer aria-label="閉じる">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          </button>
        </div>
        <div class="drawer-body">
          <a class="drawer-link" href="index.html" style="font-weight:700;">
            <span class="idx">★</span><span>トップページ</span>
          </a>
          <a class="drawer-link" href="dashboard.html">
            <span class="idx">◆</span><span>価格ダッシュボード</span>
          </a>
          <a class="drawer-link" href="timeline.html">
            <span class="idx">⏱</span><span>2025〜2026 年表</span>
          </a>
          <a class="drawer-link" href="glossary.html">
            <span class="idx">A</span><span>用語集</span>
          </a>
          <a class="drawer-link sup" href="corrections.html">
            <span class="idx">!</span><span>訂正ノート（重要）</span>
          </a>

          <div class="drawer-section-title">本編 · 13章</div>
          ${mainLinks}

          <div class="drawer-section-title">追補版 · 13の死角</div>
          ${supLinks}
        </div>
      </aside>
    `;
  }

  /* ---------- Build Bottom Nav ---------- */
  const navMount = document.querySelector('[data-shell-nav]');
  if (navMount) {
    navMount.innerHTML = `
      <nav class="bottom-nav" aria-label="メインナビゲーション">
        <div class="bottom-nav-inner">
          <a class="nav-item" href="index.html" data-route="index.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>
            <span>ホーム</span>
          </a>
          <a class="nav-item" href="chapters.html" data-route="chapters.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>
            <span>本編</span>
          </a>
          <a class="nav-item" href="supplements.html" data-route="supplements.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>
            <span>追補</span>
          </a>
          <a class="nav-item" href="dashboard.html" data-route="dashboard.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M6 20V9"/><path d="M11 20V4"/><path d="M16 20v-7"/></svg>
            <span>データ</span>
          </a>
          <a class="nav-item" href="corrections.html" data-route="corrections.html">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><circle cx="12" cy="17" r=".5" fill="currentColor"/><circle cx="12" cy="12" r="9"/></svg>
            <span>訂正</span>
          </a>
        </div>
      </nav>
    `;
  }

  /* ---------- Footer ---------- */
  const footerMount = document.querySelector('[data-shell-footer]');
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="foot-title">記憶媒体の価格動向 — Storage Supercycle Report</div>
        <div class="foot-meta">
          Snapshot: 2026.04.19<br>
          DRAM / NAND / SSD / HDD / LTO / Optical / Cards<br>
          本サイトは「本編」「追補版」「訂正レポート」に基づき作成され、<br>訂正レポートの情報を最優先で反映しています。
        </div>
      </footer>
    `;
  }

  /* ---------- Build chapter lists dynamically if mount points exist ---------- */
  const mainListMount = document.querySelector('[data-main-chapter-list]');
  if (mainListMount) {
    mainListMount.innerHTML = MAIN_CHAPTERS.map(c => `
      <a class="index-row" href="${c.f}" data-search-target>
        <span class="num">CH ${String(c.n).padStart(2, '0')}</span>
        <span class="t">${c.t}</span>
        <span class="arrow">›</span>
      </a>`).join('');
  }

  const supListMount = document.querySelector('[data-sup-chapter-list]');
  if (supListMount) {
    supListMount.innerHTML = SUP_CHAPTERS.map(c => `
      <a class="index-row sup" href="${c.f}" data-search-target>
        <span class="num">S ${String(c.n).padStart(2, '0')}</span>
        <span class="t">${c.t}</span>
        <span class="arrow">›</span>
      </a>`).join('');
  }
})();
