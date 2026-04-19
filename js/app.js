/* =========================================================
   記憶媒体の価格動向 2026年4月19日
   Shared UI interactions
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Drawer ---------- */
  const drawer = document.querySelector('[data-drawer]');
  const backdrop = document.querySelector('[data-drawer-backdrop]');
  const openBtns = document.querySelectorAll('[data-open-drawer]');
  const closeBtns = document.querySelectorAll('[data-close-drawer]');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(b => b.addEventListener('click', openDrawer));
  closeBtns.forEach(b => b.addEventListener('click', closeDrawer));
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- Accordion ---------- */
  document.querySelectorAll('[data-acc]').forEach(acc => {
    const head = acc.querySelector('.acc-head');
    if (!head) return;
    head.addEventListener('click', () => {
      acc.classList.toggle('open');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  /* ---------- Animated ladder bars ---------- */
  document.querySelectorAll('.ladder-bar-fill').forEach(bar => {
    const w = bar.getAttribute('data-width') || '80';
    setTimeout(() => { bar.style.width = w + '%'; }, 220);
  });

  /* ---------- Search filter (on index listing) ---------- */
  const searchInput = document.querySelector('[data-chapter-search]');
  if (searchInput) {
    const targets = document.querySelectorAll('[data-search-target]');
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      targets.forEach(t => {
        const text = (t.textContent || '').toLowerCase();
        t.style.display = !q || text.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }

  /* ---------- Tab switcher (hero stats / similar) ---------- */
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = group.querySelectorAll('.tab');
    const pane = document.querySelector(group.getAttribute('data-pane-root') || 'body');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        if (!pane) return;
        pane.querySelectorAll('[data-tab-panel]').forEach(p => {
          p.style.display = (p.getAttribute('data-tab-panel') === target) ? '' : 'none';
        });
      });
    });
  });

  /* ---------- Set active bottom nav based on current page ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(n => {
    const target = n.getAttribute('data-route');
    if (!target) return;
    if (target === path || (target === 'index.html' && path === '')) {
      n.classList.add('active');
    }
  });
})();
