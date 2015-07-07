# choixMédias

Css et images auto adaptatifs

## A propos

## Code Example

```html
<!-- Appel de cssImgAdapte.js -->
<script src="js/cssImgAdapte.js"></script>

<!-- La pertie css dédiée aux médias est ajouté automatiquement -->

<!-- Ajout d'un name="_NOM_IMAGE_+_EXTENTION_" et de la class="imgR" aux images adaptatives -->
<img src="img/tablet/img_a.png" name="img_a.png" class="imgR" alt="Une image responsive...">
<img src="img/tablet/img_b.png" name="img_b.png" class="imgR" alt="Une autre image responsive...">

<!-- INIT : choix média -->
<script>
    (function () {
        cssImgAdapte.init()/* global cssImgAdapte */;
    })();
</script>
```

## Installation

## Premier tests

## Crédits

## License

CONTRAT DE LICENCE DE LOGICIEL LIBRE CeCILL-C : Voir LICENSE.md