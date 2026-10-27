/* =========================================================
   Mick Computer - suivi des contacts (Umami, sans cookie)
   1. Créer un compte gratuit sur https://cloud.umami.is
   2. Ajouter le site www.mickcomputer.com
   3. Coller ci-dessous le "Website ID" fourni par Umami
   Tant que l'ID n'est pas rempli, ce fichier ne fait rien.
   ========================================================= */
(function () {
  var WEBSITE_ID = 'COLLER-ICI-LE-WEBSITE-ID';
  if (!WEBSITE_ID || WEBSITE_ID.indexOf('COLLER') === 0) return;

  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://cloud.umami.is/script.js';
  s.setAttribute('data-website-id', WEBSITE_ID);
  s.setAttribute('data-domains', 'www.mickcomputer.com,mickcomputer.com');
  document.head.appendChild(s);

  function track(name, data) {
    try { if (window.umami) window.umami.track(name, data); } catch (e) {}
  }

  // Zone de la page où le clic a eu lieu (en-tête, hero, contact, pied de page...)
  function zone(el) {
    if (el.classList.contains('float-call')) return 'bouton-flottant';
    var z = el.closest('header,footer,section,main');
    if (!z) return 'autre';
    if (z.tagName === 'HEADER') return 'en-tete';
    if (z.tagName === 'FOOTER') return 'pied-de-page';
    return z.id || z.className.split(' ')[0] || z.tagName.toLowerCase();
  }

  var page = location.pathname.replace(/^\//, '') || 'accueil';

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) track('Appel', { page: page, zone: zone(a) });
    else if (href.indexOf('mailto:') === 0) track('Email', { page: page });
    else if (href.indexOf('google.com/maps?q=') > -1) track('Itineraire', { page: page });
    else if (href.indexOf('/review') > -1) track('Laisser un avis', { page: page });
    else if (href.indexOf('google.com/maps/search') > -1) track('Voir avis Google', { page: page });
  }, true);

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || (f.action || '').indexOf('formsubmit.co') === -1) return;
    var type = f.querySelector('[name="Type-probleme"]');
    track('Formulaire envoye', { page: page, type: type ? type.value : '' });
  }, true);
})();
