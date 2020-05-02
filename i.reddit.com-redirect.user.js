// ==UserScript==
// @name         i.reddit.com redirect
// @version      0.1.6
// @license      GPL-3.0-only; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL  https://github.com/Logarithmus/i.reddit.com-redirect
// @updateURL    https://openuserjs.org/meta/Logarithmus/i.reddit.com_redirect.meta.js
// @downloadURL  https://openuserjs.org/install/Logarithmus/i.reddit.com_redirect.user.js
// @copyright    2020, Logarithmus (https://openuserjs.org/users/Logarithmus)
// @description  Redirect to i.reddit.com
// @author       Logarithmus
// @match        *://*/*
// ==/UserScript==

(function() {
    if (window.location.hostname === "www.reddit.com") | (window.location.hostname === "reddit.com") {
        window.location.hostname = "i.reddit.com"
    }   
    for (let a of document.getElementsByTagName("a")) {
        if ( (a.hostname === "www.reddit.com") | (a.hostname === "reddit.com") ) {
            a.hostname = "i.reddit.com"
        }
    }
})();
