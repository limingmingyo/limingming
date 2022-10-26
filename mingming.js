// ==UserScript==
// @name         B站视频加速器
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  让B站的视频速度加倍加倍！！
// @author       黎明明
// @match        https://www.bilibili.com/video*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('video').playbackRate=2
    console.log(document.querySelector('video'))
    // Your code here...
})();