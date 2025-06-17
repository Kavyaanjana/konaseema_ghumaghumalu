import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/index.mjs';
import { u as useHead } from './v3-TJBJZBmk.mjs';
import './server.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/DELL/konaseema_ghumaghumalu/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/devalue/index.js';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Order Online - Konaseema Ghumaghumalu",
      meta: [
        { name: "description", content: "Order authentic Andhra food online from Konaseema Ghumaghumalu. Home delivery, pickup, and dine-in options available. 25% off on first order!" }
      ]
    });
    const popularItems = [
      {
        name: "Andhra Chicken Curry",
        description: "Traditional spicy chicken curry with authentic spices",
        price: 380
      },
      {
        name: "Hyderabadi Biryani",
        description: "Aromatic basmati rice with tender meat",
        price: 350
      },
      {
        name: "Gongura Mutton",
        description: "Signature mutton curry with tangy gongura leaves",
        price: 450
      },
      {
        name: "Chicken 65",
        description: "Spicy deep-fried chicken appetizer",
        price: 280
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100"><div class="container-max text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Order Online</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto"> Enjoy authentic Andhra flavors from the comfort of your home. Order now and get it delivered fresh to your doorstep. </p></div></section><section class="bg-orange-500 text-white py-4"><div class="container-max text-center"><p class="text-lg font-semibold"> \u{1F389} Exclusive Launch Offer: Enjoy 25% off on your first online order! Use code: FIRST25 \u{1F389} </p></div></section><section class="section-padding bg-white"><div class="container-max"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"><div class="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors cursor-pointer"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Home Delivery</h3><p class="text-gray-600 mb-4">Get fresh food delivered to your doorstep</p><p class="text-sm text-orange-500 font-semibold">Delivery in 30-45 mins</p></div><div class="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors cursor-pointer"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Pickup</h3><p class="text-gray-600 mb-4">Order ahead and pickup from restaurant</p><p class="text-sm text-orange-500 font-semibold">Ready in 20-30 mins</p></div><div class="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 transition-colors cursor-pointer"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Dine In</h3><p class="text-gray-600 mb-4">Reserve a table and enjoy at restaurant</p><p class="text-sm text-orange-500 font-semibold">Book your table</p></div></div><div class="text-center"><h2 class="text-3xl font-bold mb-8 text-gray-800">Order Through Our Partners</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"><a href="#" class="block p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"><div class="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4"><span class="text-white font-bold text-lg">Swiggy</span></div><h3 class="text-xl font-semibold text-gray-800 mb-2">Order on Swiggy</h3><p class="text-gray-600">Fast delivery with live tracking</p></a><a href="#" class="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"><div class="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4"><span class="text-white font-bold text-lg">Zomato</span></div><h3 class="text-xl font-semibold text-gray-800 mb-2">Order on Zomato</h3><p class="text-gray-600">Reliable delivery service</p></a><div class="p-6 bg-green-50 rounded-lg"><div class="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4"><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><h3 class="text-xl font-semibold text-gray-800 mb-2">Call to Order</h3><p class="text-gray-600 mb-3">Direct ordering via phone</p><p class="text-orange-500 font-bold">+91 98765 43210</p></div></div></div></div></section><section class="section-padding bg-gray-50"><div class="container-max"><h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">Popular Items</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(popularItems, (item) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="h-48 bg-gray-200 flex items-center justify-center"><p class="text-gray-500">${ssrInterpolate(item.name)}</p></div><div class="p-4"><h3 class="text-lg font-semibold text-gray-800 mb-2">${ssrInterpolate(item.name)}</h3><p class="text-gray-600 text-sm mb-3">${ssrInterpolate(item.description)}</p><div class="flex justify-between items-center"><span class="text-orange-500 font-bold text-lg">\u20B9${ssrInterpolate(item.price)}</span><button class="btn-primary text-sm px-4 py-2">Add to Cart</button></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-padding bg-white"><div class="container-max"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Fast Delivery</h3><p class="text-gray-600">Fresh food delivered in 30-45 minutes</p></div><div class="text-center"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Quality Assured</h3><p class="text-gray-600">Fresh ingredients and authentic recipes</p></div><div class="text-center"><div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><h3 class="text-xl font-bold mb-2 text-gray-800">Secure Payment</h3><p class="text-gray-600">Multiple payment options available</p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-BWZDPc7u.mjs.map
