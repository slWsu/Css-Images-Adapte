
// -----------------------------------------------------------------------------
// Fichier: cssImgAdapte.js
// ---
//
// Package   : css Img Adapte - V 1.0.0 (master)
// Copyright : (c) 2014 Steeve Lefebvre - http://www.web-startup.fr
// Projet URI:
// License   : http://www.cecill.info/licences/Licence_CeCILL-C_V1-fr.html
// ---
//
// Description:
// Ce fichier détermine la largeur du périférique puis cré un <link css> vers le 
// fichier css adapté et change les chemins des images pour afficher les images adaptées.
// -----------------------------------------------------------------------------

var set, cssImgAdapte = {
    settings: {
        cssLink: "",
        url: "",
        cheminCss: "css/", // chemin du Css
        cheminImg: ["img/petit/", "img/moyen/", "img/grand/"], // chemin des images
        style: ["mobile.css", "tablet.css", "laptop.css", "desktop.css"], // Les résolution
        mobileSite: ["500"], // Max 500px
        tabletSite: ["501", "720"], // Entre 601px et 1024px
        laptopSite: ["721", "1024"], // Entre 601px et 1024px
        DesktopSite: ["1025"] // Plus de 1025 : N'est pas utiliser, css par défault pour SWITCH
    },
    init: function () {
        set = this.settings;
        set.url = this.url() + "/"; // Config url
        set.cssLlink = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'));
        var attributs = {rel: 'stylesheet', type: 'text/css', href: '', id: 'cssR'};
        for (var key in attributs) {
            set.cssLlink.setAttribute(key, attributs[key]);
        }
        this.maj();
    },
    url: function () {
        var url = location.href;
        var baseURL = url.substring(0, url.indexOf('/', 14));
        if (baseURL.indexOf('http://localhost') !== -1) {
            var pathname = location.pathname;
            var index1 = url.indexOf(pathname);
            var index2 = url.indexOf("/", index1 + 1);
            var baseLocalUrl = url.substr(0, index2);
            return baseLocalUrl;
        }
        else {
            return baseURL;
        }
    },
    resolution: function (w) {
        var width = parseInt(w), dossier = 2;
        switch (true) {
            case (width < set.mobileSite[0]):
                dossier = 0;
                break;
            case (width >= set.tabletSite[0] && width <= set.tabletSite[1]):
            case (width >= set.laptopSite[0] && width <= set.laptopSite[1]):
                dossier = 1;
                break;
            default:
                dossier = 2;
        }
        // On met a jour le css
        document.getElementById("cssR").setAttribute("href", set.url + set.cheminCss + set.style[dossier]);
        // On récupère les images avec la classe imgR
        var imgs = document.getElementsByClassName("imgR"), imgNom;
        // On met a jour les images
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            imgNom = img.name;
            img.setAttribute("src", set.url + set.cheminImg[dossier] + imgNom);
        }
    },
    maj: function () {
        if (window.outerWidth) {
            this.resolution(window.outerWidth);
        } else {
            // IE
            this.resolution(document.body.clientWidth);
        }
    }
};

/**
 * Détecte le redimentionnement
 */
if (window.addEventListener) {
    window.addEventListener("resize", function () {
        cssImgAdapte.maj();
    });
} else if (document.addEventListener) {
    document.addEventListener("resize", function () {
        cssImgAdapte.maj();
    });
} else if (window.attachEvent) {
    window.attachEvent("onresize", function () {
        cssImgAdapte.maj();
    });
}
