# Tunnel de vente · How to Prepare Bible Messages

Tunnel de vente en anglais pour le livre *How to Prepare Bible Messages* de James Braga, vendu sur la boutique Chariow **Library Online**.

## Le parcours du client

1. **`index.html`** : la page de vente. Chaque bouton « Get the book » envoie vers le paiement Chariow.
2. **Paiement Chariow** : Mobile Money ou carte, dans la devise du client. Chariow livre le PDF.
3. **`thank-you.html`** : la page de remerciement. Elle donne les étapes de téléchargement, l'aide WhatsApp, le groupe WhatsApp des livres gratuits, une recommandation (*Chronological Bible Handbook*) et un lien vers bookline.digital.

Les visiteurs qui ne sont pas prêts à acheter trouvent, en bas de la page de vente, une section pour rejoindre le groupe WhatsApp des livres chrétiens gratuits.

## Modifier le lien, les prix ou les contacts

Tout se règle dans **un seul fichier : `assets/js/config.js`**. Les deux pages s'en servent.

| Réglage | Valeur actuelle |
| --- | --- |
| `checkoutUrl` (lien de tous les boutons d'achat) | `https://livresenligne.mychariow.shop/prd_dlcz1mir/checkout` |
| `price` / `oldPrice` / `discount` | `$7` / `$11` / `-40%` |
| `offerHours` / `offerStart` | `48` / `2026-10-11T00:00:00+01:00` (minuit, heure de Kinshasa) |
| `whatsappNumber` | `243823226790` (sert aux boutons WhatsApp, jamais écrit sur la page) |
| `whatsappGroupUrl` | groupe WhatsApp des livres chrétiens gratuits |
| `email` | `libraryonline65@gmail.com` |
| `booklineUrl` | `https://bookline.digital` |
| `metaPixelId` | vide (pixel Facebook désactivé) |

Les prix sont affichés en dollars. Le visiteur peut payer dans la monnaie de son choix : Chariow convertit automatiquement. Sur Chariow, le livre coûte 15 000 CDF au lieu de 25 000, soit environ 6,7 $ et 11,1 $ au taux Chariow du 11 octobre 2026. Si vous changez le prix sur Chariow ou si le taux bouge beaucoup, mettez `price` et `oldPrice` à jour.

## Compte à rebours de 48 h

La page affiche « Offer ends in » avec un compte à rebours de 48 h, en haut de page et près de chaque bouton d'achat. Quand il arrive à zéro, un nouveau cycle de 48 h commence tout seul. Tous les visiteurs voient le même temps restant, car les cycles partent de la date `offerStart`.

Pour que le compte à rebours corresponde à un vrai prix promotionnel, réglez sur Chariow le prix promo du produit sur la même période de 48 h, avec le renouvellement automatique activé.

## Relier Chariow à la page de remerciement

Une fois le site en ligne, ouvrez le produit sur Chariow et collez l'adresse de `thank-you.html` dans le champ de redirection après achat (*redirect URL*). Le client y arrive juste après son paiement.

## Mettre le site en ligne

Le site est fait de fichiers simples (HTML, CSS, JS, images). Aucune installation n'est nécessaire.

- **GitHub Pages (gratuit)** : dans le dépôt, *Settings → Pages → Deploy from a branch*, choisissez la branche et le dossier `/ (root)`. L'adresse sera du type `https://salem-ask.github.io/How-to-prepare-bible-message-/`.
- **Hostinger ou un autre hébergeur** : envoyez tout le contenu du dossier (avec le dossier `assets`) à la racine du site.

Après la mise en ligne, remplacez `assets/img/og-image.jpg` dans la balise `og:image` de `index.html` par l'adresse complète de l'image (par exemple `https://votre-site.com/assets/img/og-image.jpg`). Facebook et WhatsApp afficheront alors le bon aperçu quand vous partagerez le lien.

## Pixel Facebook (optionnel)

Pour mesurer vos publicités, mettez l'identifiant de votre pixel dans `metaPixelId`. La page envoie alors :

- `PageView` sur les deux pages ;
- `InitiateCheckout` quand un visiteur clique sur un bouton d'achat ;
- `Purchase` (6,7 USD, réglable avec `purchaseValue`) à l'arrivée sur la page de remerciement.

## À vérifier avant de lancer la publicité

- **Contenu du livre** : le lien Google Drive n'était pas accessible depuis l'environnement de travail. Les sections *What you will learn* et *Inside the book* suivent la structure connue du livre (sermon thématique, textuel et expositoire, puis les huit parties du sermon). Comparez-les à votre PDF.
- **Auteur** : la biographie (Multnomah School of the Bible, *How to Study the Bible*) vient de sources publiques. Vérifiez-la avec la page « About the author » du livre.
- **Chiffres** : 1 500+ ventes de l'édition française, 6 800+ clients et 30+ pays viennent des statistiques de votre boutique Chariow (octobre 2026).
- **Droits** : assurez-vous de détenir les droits de distribution de l'édition numérique de ce livre.

## Fichiers

```
index.html            page de vente
thank-you.html        page de remerciement
assets/js/config.js   réglages (lien, prix, contacts, pixel)
assets/js/main.js     fonctionnement (ne pas modifier)
assets/css/style.css  design
assets/img/           affiches optimisées et image de partage
```
