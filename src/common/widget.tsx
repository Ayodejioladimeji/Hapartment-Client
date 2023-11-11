import { useEffect } from "react";
declare const window: any;

const Widget = () => {
  useEffect(() => {
    window.chatwootSettings = {
      position: "right",
      hideMessageBubble: false,
      locale: "en",
    };
    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g: any = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_KEY,
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);
  return null;
};

export default Widget;
