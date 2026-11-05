(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;

  /* ---------- ARRIVÉE SUR LA PAGE : on cache le loader ---------- */
  let loaderDoneSent = false;

  function hideLoader() {
    loader.classList.add('hidden');
    if (loaderDoneSent) return;
    loaderDoneSent = true;
    document.dispatchEvent(new Event('loaderDone'));
  }

  const pageLoaded = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(r => window.addEventListener('load', r, { once: true }));

  Promise.all([pageLoaded, document.fonts.ready]).then(() => setTimeout(hideLoader, 300));

  // Filet de sécurité : jamais plus de 5 s
  setTimeout(hideLoader, 5000);

  // Retour arrière du navigateur (page restaurée depuis le cache)
  window.addEventListener('pageshow', e => {
    if (e.persisted) hideLoader();
  });

  /* ---------- DÉPART VERS UNE AUTRE PAGE : on affiche le loader ---------- */
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a || !a.href) return;
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    if (!/^https?:|^file:/.test(a.protocol)) return;          // ignore mailto:, tel:...
    if (a.host !== location.host) return;                      // ignore les liens externes
    if (/\.(pdf|zip|mp4)$/i.test(a.pathname)) return;          // ignore les fichiers

    const url = new URL(a.href);
    const samePage = url.pathname === location.pathname && url.search === location.search;
    if (samePage) return;                                      // ancres #... : pas de loader

    e.preventDefault();
    loader.classList.remove('hidden');
    setTimeout(() => { window.location.href = a.href; }, 400); // laisse finir le fondu
  });
})();