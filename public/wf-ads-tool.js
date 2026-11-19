/* Ad placement for the main diff tool page (Adsterra, iframe banners). */
(function () {
  "use strict";
  if (window.__wfAdsTool) return;
  window.__wfAdsTool = 1;
  var B = {
    "728x90": "6f957697df2e22ac814cb68621698576",
    "468x60": "b18b6f3f2a64238dd00dc0fee9eb82cb",
    "300x250": "901294c463afbe28c4b1802c03953942",
    "160x600": "55565bf9d5719863ef55765dd713c51e",
    "160x300": "4de44b14d2a2769b94e21e86c3b99645",
    "320x50": "b20eb9a379bdd14c101ddbeb28263eda"
  };
  var nativeId = "container-eef038c5968f116f5d074b877fec828e";
  var smart = "https://araplhn.org/4/fa1ccfeddbd34e0b655abef91266a7c6";
  var d = document;
  function banner(size, extraStyle) {
    var k = B[size];
    if (!k) return null;
    var wh = size.split("x"), w = +wh[0], h = +wh[1];
    var box = d.createElement("div");
    box.className = "wf-ad wf-ad-" + size;
    box.setAttribute("aria-label", "Advertisement");
    box.style.cssText = "margin:0 auto;text-align:center;max-width:100%;overflow:hidden;flex-shrink:0;" + (extraStyle || "");
    var f = d.createElement("iframe");
    f.title = "Advertisement";
    f.width = w; f.height = h;
    f.setAttribute("scrolling", "no");
    f.setAttribute("frameborder", "0");
    f.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation");
    f.style.cssText = "border:0;display:block;margin:0 auto;width:" + w + "px;height:" + h + "px;max-width:100%";
    f.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body>' +
      "<script>atOptions={'key':'" + k + "','format':'iframe','height':" + h + ",'width':" + w + ",'params':{}};</scr" + "ipt>" +
      '<script src="https://bauval.org/22/' + k + '"></scr' + "ipt></body></html>";
    box.appendChild(f);
    return box;
  }
  function after(ref, node) {
    if (ref && node && ref.parentNode) ref.parentNode.insertBefore(node, ref.nextSibling);
  }
  function run() {
    var vw = window.innerWidth || d.documentElement.clientWidth || 1024;
    var header = d.getElementById("menu-bar");
    var toolbar = d.getElementById("toolbar");
    var footer = d.querySelector("footer.seo-content");
    var topSize = vw >= 780 ? "728x90" : (vw >= 500 ? "468x60" : "320x50");
    var top = banner(topSize, "padding:.35rem 0 .5rem;");
    if (top && header) after(header, top);
  else if (top && toolbar) toolbar.parentNode.insertBefore(top, toolbar);

    if (footer) {
      var wrap = d.createElement("div");
      wrap.className = "wf-ad-strip";
      wrap.style.cssText = "max-width:728px;margin:1rem auto;padding:0 1rem;";
      var mid728 = banner("728x90");
      if (mid728) wrap.appendChild(mid728);
      var nativeWrap = d.createElement("div");
      nativeWrap.className = "wf-ad wf-ad-native";
      nativeWrap.style.margin = "1rem 0";
      var nc = d.createElement("div");
      nc.id = nativeId;
      nativeWrap.appendChild(nc);
      wrap.appendChild(nativeWrap);
      var nScript = d.createElement("script");
      nScript.async = true;
      nScript.setAttribute("data-cfasync", "false");
      nScript.src = "https://bauval.org/21/eef038c5968f116f5d074b877fec828e";
      nativeWrap.appendChild(nScript);
      var b300 = banner("300x250", "margin:1rem auto;");
      if (b300) wrap.appendChild(b300);
      if (vw >= 780) {
        var b468 = banner("468x60", "margin:1rem auto;");
        if (b468) wrap.appendChild(b468);
      }
      var p = d.createElement("p");
      p.className = "wf-ad wf-sponsored";
      p.style.cssText = "font-size:.8rem;opacity:.75;text-align:center;margin:.75rem 0";
      var a = d.createElement("a");
      a.href = smart;
      a.target = "_blank";
      a.rel = "sponsored nofollow noopener";
      a.textContent = "Sponsored: recommended offers";
      p.appendChild(a);
      wrap.appendChild(p);
      footer.insertBefore(wrap, footer.firstChild);
    }

    if (vw >= 1300) {
      [["160x600", "left"], ["160x300", "right"]].forEach(function (pair) {
        var rb = banner(pair[0], "position:fixed;top:96px;" + pair[1] + ":8px;margin:0;z-index:4;pointer-events:auto;");
        if (rb) d.body.appendChild(rb);
      });
    }

    if (vw < 780) {
      var sticky = banner("320x50", "position:fixed;left:0;right:0;bottom:0;margin:0;z-index:6;background:var(--bg,#fff);border-top:1px solid rgba(0,0,0,.08);padding:2px 0;");
      if (sticky) d.body.appendChild(sticky);
    }
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", run); else run();
})();