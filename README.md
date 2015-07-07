# Css Img Adapte

Css et images auto adaptatifs

## A propos

Css Img Adapte met a jour automatiquement les chemins des fichiers css et images en fonction 
de la largueur du périphérique d'affichage.

Le script utilise cinq fichiers css dont un est utilisé pour tout les formats, et 
quatre autres dédiés a quatre format d'affichage différents : Desktop, Laptop, Tablet et mobile.

Il utilise aussi un dossier img ou les images sont triplées sous 3 formats differents : petit, moyen et grand.

La configuration est pour le moment compliqué si vous ne souhaitez pas utiliser cette 
architecture, il vous faudra alors modifier le code...

En cas de besoin, faites moi signe, on ne sais jamais...

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

## License

CONTRAT DE LICENCE DE LOGICIEL LIBRE CeCILL-C : Voir LICENSE.md