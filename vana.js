// ==UserScript==
// @name        VanaDataHero bot
// @namespace   Violentmonkey Scripts
// @match       https://www.vanadatahero.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 29.09.2024, 13:09:16
// @downloadURL  https://github.com/xorascs/Vana/raw/main/vana.js
// @updateURL    https://github.com/xorascs/Vana/raw/main/vana.js
// @homepage     https://github.com/xorascs/Vana
// ==/UserScript==

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
    } else {
      setTimeout(() => waitForElement(selector, callback), 500);
    }
}

async function start() {
    await sleep(5000);

    try {
      if (location.href != "https://www.vanadatahero.com/face-detection") {
        location.href = "https://www.vanadatahero.com/face-detection";
      }

      setInterval(() => {
        const parentDiv = document.querySelector('div[class="flex justify-center gap-2"]');
        const greenDivs = parentDiv.querySelectorAll('div.bg-green-500');
        console.log("Lifes: " + greenDivs.length);

        if (greenDivs.length > 0) {
            let rnd = Math.floor(Math.random() * 2);
            console.log(rnd);

            document.querySelector("div[class='flex h-full max-h-48 w-full space-x-6 px-6 pt-2']").children[rnd].click();
        }
      },5000);
  } catch (err) {
      if (err instanceof TypeError) {
          console.log("Player has no lifes left.");
      }
  }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}