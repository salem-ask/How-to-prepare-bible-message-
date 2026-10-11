/* Fills the pages from FUNNEL_CONFIG (config.js), runs the sticky buy bar
   and sends the optional Meta Pixel events. No settings live in this file. */
(function () {
  "use strict";

  var C = window.FUNNEL_CONFIG || {};
  var doc = document;

  function each(selector, fn) {
    Array.prototype.forEach.call(doc.querySelectorAll(selector), fn);
  }

  /* ---------- Links and text ---------- */

  if (C.checkoutUrl) {
    each("[data-cta]", function (a) { a.href = C.checkoutUrl; });
  }

  // data-link="whatsappUrl" takes its address from the setting of the same name.
  each("[data-link]", function (a) {
    var url = C[a.getAttribute("data-link")];
    if (url) a.href = url;
  });

  // data-text="price" takes its text from the setting of the same name.
  each("[data-text]", function (el) {
    var value = C[el.getAttribute("data-text")];
    if (value !== undefined && value !== null && value !== "") el.textContent = value;
  });

  each("[data-email]", function (a) {
    if (!C.email) return;
    a.href = "mailto:" + C.email;
    a.textContent = C.email;
  });

  each("[data-year]", function (el) { el.textContent = String(new Date().getFullYear()); });

  /* ---------- Sticky buy bar ----------
     Appears once the visitor has scrolled past the hero's buy button,
     and steps aside while another large buy button is on screen. */

  var bar = doc.getElementById("sticky-cta");
  if (bar) {
    var hero = doc.querySelector("[data-cta-hero]");
    var mains = doc.querySelectorAll("[data-cta-main]");

    if (hero && "IntersectionObserver" in window) {
      var passedHero = false;
      var mainOnScreen = [];

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.target === hero) {
            passedHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          } else {
            mainOnScreen[Number(entry.target.getAttribute("data-cta-index"))] = entry.isIntersecting;
          }
        });
        bar.classList.toggle("is-visible", passedHero && mainOnScreen.indexOf(true) === -1);
      });

      observer.observe(hero);
      Array.prototype.forEach.call(mains, function (el, i) {
        el.setAttribute("data-cta-index", String(i));
        mainOnScreen[i] = false;
        observer.observe(el);
      });
    } else {
      bar.classList.add("is-visible");
    }
  }

  /* ---------- Optional Meta (Facebook) Pixel ---------- */

  if (C.metaPixelId) {
    /* Meta Pixel base code */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, doc, "script", "https://connect.facebook.net/en_US/fbevents.js");

    var eventData = {
      value: C.purchaseValue,
      currency: C.purchaseCurrency,
      content_name: "How to Prepare Bible Messages"
    };

    window.fbq("init", String(C.metaPixelId));
    window.fbq("track", "PageView");

    if (doc.body.getAttribute("data-page") === "thank-you") {
      // One Purchase per browser session, so a page refresh is not counted twice.
      var sent = false;
      try { sent = window.sessionStorage.getItem("hpbm-purchase") === "1"; } catch (e) { /* storage blocked */ }
      if (!sent) {
        window.fbq("track", "Purchase", eventData);
        try { window.sessionStorage.setItem("hpbm-purchase", "1"); } catch (e) { /* storage blocked */ }
      }
    }

    doc.addEventListener("click", function (event) {
      var link = event.target.closest ? event.target.closest("[data-cta]") : null;
      if (!link) return;
      window.fbq("track", "InitiateCheckout", eventData);

      // Give the pixel a moment to send before leaving the page (plain clicks only).
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      setTimeout(function () { window.location.href = link.href; }, 300);
    });
  }
})();
