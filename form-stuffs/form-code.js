if (typeof MauticSDKLoaded == "undefined") {
  var MauticSDKLoaded = true;
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://mautic.cloudyuga.guru/media/js/mautic-form.js?v1567a4c3";
  script.onload = function () {
    MauticSDK.onLoad();
  };
  head.appendChild(script);
  var MauticDomain = "https://mautic.cloudyuga.guru";
  var MauticLang = {
    submittingMessage: "Please wait...",
  };
} else if (typeof MauticSDK != "undefined") {
  MauticSDK.onLoad();
}
