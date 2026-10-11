/* =====================================================================
   FUNNEL SETTINGS
   This is the only file you need to edit. Every button, price and
   contact link on index.html and thank-you.html is filled from here.
   Keep the quotes "..." around each value.
   ===================================================================== */

window.FUNNEL_CONFIG = {
  /* Where every "Get the book" button sends the visitor (checkout page).
     To send people to the product page instead, remove "/checkout". */
  checkoutUrl: "https://livresenligne.mychariow.shop/prd_dlcz1mir/checkout",

  /* Prices shown on the page, in US dollars. Visitors can still pay in their
     own currency at checkout. Keep them in line with the checkout price. */
  price: "$7",
  oldPrice: "$11",
  discount: "-40%",

  /* Offer countdown: restarts by itself every `offerHours` hours, counted
     from `offerStart`, so every visitor sees the same time left. */
  offerHours: 48,
  offerStart: "2026-10-11T00:00:00+01:00",

  /* Customer service. The WhatsApp buttons open a chat with this number;
     the number itself is never written on the page. */
  whatsappNumber: "243823226790",           // international format, digits only
  email: "libraryonline65@gmail.com",

  /* WhatsApp group where members receive free Christian books */
  whatsappGroupUrl: "https://chat.whatsapp.com/DRFUqxZkOjX3fzXEaGObV3?s=cl&p=a&mlu=4&ilr=4",

  /* Other links */
  booklineUrl: "https://bookline.digital",
  frenchEditionUrl: "https://livresenligne.mychariow.shop/prd_b77u61",
  upsellUrl: "https://livresenligne.mychariow.shop/prd_2j3myxax",

  /* Optional: Meta (Facebook) Pixel for your ads, e.g. "123456789012345".
     Leave it empty to switch tracking off. When it is filled in, the pages send
     PageView, InitiateCheckout (click on a buy button) and Purchase (thank-you page).
     purchaseValue is what one sale is worth in purchaseCurrency. */
  metaPixelId: "",
  purchaseValue: 6.7,
  purchaseCurrency: "USD"
};
