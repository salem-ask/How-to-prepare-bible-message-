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
  price: "15,000 CDF",
  oldPrice: "25,000 CDF",
  priceUsd: "about US$7",
  discount: "-40%",

  /* Customer service. The WhatsApp button opens a chat with you;
     your phone number is never written on the page. */
  whatsappUrl: "https://wa.me/message/TSRPPLLZPMM3N1",
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
     purchaseValue is the book price in purchaseCurrency (15,000 CDF ≈ 6.7 USD). */
  metaPixelId: "",
  purchaseValue: 6.7,
  purchaseCurrency: "USD"
};
