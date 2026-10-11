/* =====================================================================
   FUNNEL SETTINGS
   This is the only file you need to edit. Every button, price and
   contact link on index.html and thank-you.html is filled from here.
   Keep the quotes "..." around each value.
   ===================================================================== */

window.FUNNEL_CONFIG = {
  /* Where every "Get the book" button sends the visitor (Chariow checkout).
     To send people to the product page instead, remove "/checkout". */
  checkoutUrl: "https://livresenligne.mychariow.shop/prd_dlcz1mir/checkout",

  /* Prices shown on the page. Keep them identical to the prices on Chariow. */
  price: "18,000 CDF",
  oldPrice: "35,000 CDF",
  priceUsd: "about US$8",
  discount: "-49%",

  /* Customer service */
  whatsappNumber: "243997155350",          // international format, digits only
  whatsappDisplay: "+243 997 155 350",     // how the number is written on the page
  whatsappGroupUrl: "https://chat.whatsapp.com/DRFUqxZkOjX3fzXEaGObV3",
  email: "libraryonline65@gmail.com",

  /* Other links */
  storeUrl: "https://livresenligne.mychariow.shop",
  frenchEditionUrl: "https://livresenligne.mychariow.shop/prd_b77u61",
  upsellUrl: "https://livresenligne.mychariow.shop/prd_2j3myxax",

  /* Optional: Meta (Facebook) Pixel for your ads, e.g. "123456789012345".
     Leave it empty to switch tracking off. When it is filled in, the pages send
     PageView, InitiateCheckout (click on a buy button) and Purchase (thank-you page). */
  metaPixelId: "",
  purchaseValue: 8,
  purchaseCurrency: "USD"
};
