// ==UserScript==
// @name            Photopea Advertisement Hide
// @namespace       AlejandroAkbal
// @version         0.1
// @description     Hides advertisements by pushing them out of view.
// @author          Alejandro Akbal
// @icon            https://www.google.com/s2/favicons?sz=64&domain=photopea.com
// @homepage        https://github.com/AlejandroAkbal/Photopea-Advertisement-Hide/
// @downloadURL     https://raw.githubusercontent.com/AlejandroAkbal/Photopea-Advertisement-Hide/main/src/photopea_ad_hide.user.js
// @match           https://www.photopea.com/
// @grant           none
// @run-at          document-start
// ==/UserScript==

// Add width to the window so the advertisements cannot be seen.
window.innerWidth += 300;