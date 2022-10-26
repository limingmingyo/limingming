// ==UserScript==
// @name         B站视频加速器
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  让B站的视频速度加倍加倍！！
// @author       黎明明
// @match        https://www.bilibili.com/video*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('video').playbackRate=1
    let start= document.querySelector('.bpx-player-ctrl-time-current').innerText
    let end= document.querySelector('.bpx-player-ctrl-time-duration').innerText
    //获取倍数
    document.querySelector('.bpx-player-ctrl-playbackrate-result').addEventListener('mouseover',()=>{
        let str=''
        for(i=0.5;i<16;i+=0.5){
           str =`
            <li class="bpx-player-ctrl-playbackrate-menu-item" data-value="${i}">${i}x</li>
            `
        }
        document.querySelector('.bpx-player-ctrl-playbackrate-menu').innerHTML=str
    })
   

    
    // Your code here...
})();