# mickcomputer.com

Site vitrine de Mick Computer (dépannage informatique à domicile en Wallonie).
Réalisé et maintenu par Ultimate Print.

## Mise en ligne

Branche `main` = site en ligne. Toute modification poussée sur `main` est déployée
automatiquement sur l'hébergement OVH (déploiement Git natif + webhook GitHub).

- Modifier un fichier sur GitHub (icône crayon) puis "Commit changes" : en ligne en moins d'une minute.
- Revenir en arrière : onglet Commits, ouvrir l'ancienne version, "Revert".

## Structure

- `*.html` : pages du site
- `style.css` : charte graphique
- `suivi.js` : mesure des appels et demandes (Umami, sans cookie)
- `photos/`, `*.svg`, `*.png`, `*.jpg` : visuels
- `.htaccess` : redirections HTTPS/www, page 404, cache
