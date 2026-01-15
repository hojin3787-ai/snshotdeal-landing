"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ht: any;
    Happytalk: any;
  }
}

export default function HappyTalkScript() {
  useEffect(() => {
    // 이미 로드된 경우 중복 방지
    if (document.getElementById("happytalkSDK")) {
      return;
    }

    // 원본 해피톡 스크립트와 동일한 방식으로 구현
    window.ht = null;

    (function (id: string, scriptSrc: string, callback: () => void) {
      const prevHt = document.getElementById(id);
      if (prevHt) return;

      const d = document;
      const tagName = "script";
      const $script = d.createElement(tagName);
      const $element = d.getElementsByTagName(tagName)[0];

      $script.id = id;
      $script.async = true;
      $script.src = scriptSrc;

      if (callback) {
        $script.addEventListener(
          "load",
          function (e) {
            callback();
          },
          false
        );
      }

      $element.parentNode!.insertBefore($script, $element);
    })(
      "happytalkSDK",
      "https://chat-static.happytalkio.com/sdk/happytalk.chat.v2.min.js",
      function () {
        if (window.Happytalk) {
          window.ht = new window.Happytalk({
            siteId: "5000101173",
            siteName: "SNS핫딜",
            categoryId: "194681",
            divisionId: "194682",
          });
        }
      }
    );
  }, []);

  return null;
}
