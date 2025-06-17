import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/server-renderer/index.mjs';
import { ref, computed, useSSRContext } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/index.mjs';
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
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gallery - Konaseema Ghumaghumalu",
      meta: [
        { name: "description", content: "View our gallery showcasing delicious Andhra dishes, restaurant ambiance, and dining experiences at Konaseema Ghumaghumalu." }
      ]
    });
    const activeCategory = ref("All");
    const lightboxOpen = ref(false);
    const currentImageIndex = ref(0);
    const categories = ["All", "Food", "Restaurant", "Events", "Chef Specials"];
    const images = [
      {
        category: "Food",
        title: "Andhra Chicken Curry",
        description: "Traditional spicy chicken curry with authentic Andhra spices"
      },
      {
        category: "Food",
        title: "Hyderabadi Biryani",
        description: "Aromatic basmati rice with tender meat and traditional spices"
      },
      {
        category: "Food",
        title: "Gongura Mutton",
        description: "Signature mutton curry with tangy gongura leaves"
      },
      {
        category: "Restaurant",
        title: "Dining Area",
        description: "Comfortable and modern dining space with traditional touches"
      },
      {
        category: "Restaurant",
        title: "Kitchen",
        description: "Our clean and modern kitchen where magic happens"
      },
      {
        category: "Food",
        title: "Fish Pulusu",
        description: "Tangy fish curry with tamarind and vegetables"
      },
      {
        category: "Events",
        title: "Family Celebration",
        description: "Families enjoying authentic Andhra cuisine together"
      },
      {
        category: "Chef Specials",
        title: "Prawns Fry",
        description: "Fresh prawns cooked with coastal spices and curry leaves"
      },
      {
        category: "Food",
        title: "Traditional Thali",
        description: "Complete Andhra meal with variety of dishes"
      },
      {
        category: "Restaurant",
        title: "Entrance",
        description: "Welcoming entrance with traditional Andhra decor"
      },
      {
        category: "Chef Specials",
        title: "Chicken 65",
        description: "Spicy deep-fried chicken marinated in traditional spices"
      },
      {
        category: "Events",
        title: "Festival Celebration",
        description: "Special festival menu and decorations"
      }
    ];
    const filteredImages = computed(() => {
      if (activeCategory.value === "All") {
        return images;
      }
      return images.filter((image) => image.category === activeCategory.value);
    });
    const currentImage = computed(() => {
      return filteredImages.value[currentImageIndex.value];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100"><div class="container-max text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Gallery</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto"> Take a visual journey through our restaurant, dishes, and the vibrant atmosphere that makes Konaseema Ghumaghumalu special. </p></div></section><section class="section-padding bg-white"><div class="container-max"><div class="flex flex-wrap justify-center mb-12 gap-4"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([
          "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
          activeCategory.value === category ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-orange-100"
        ])}">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(filteredImages.value, (image, index) => {
        _push(`<div class="group cursor-pointer"><div class="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 h-64"><div class="absolute inset-0 bg-gray-300 flex items-center justify-center"><p class="text-gray-500">${ssrInterpolate(image.title)}</p></div><div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"><svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg></div></div><div class="mt-4"><h3 class="text-lg font-semibold text-gray-800">${ssrInterpolate(image.title)}</h3><p class="text-gray-600">${ssrInterpolate(image.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      if (lightboxOpen.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"><div class="relative max-w-4xl max-h-full"><button class="absolute top-4 right-4 text-white hover:text-orange-500 z-10"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="bg-gray-300 rounded-lg h-96 w-full flex items-center justify-center"><p class="text-gray-600 text-xl">${ssrInterpolate((_a = currentImage.value) == null ? void 0 : _a.title)}</p></div><div class="text-center mt-4"><h3 class="text-xl font-semibold text-white mb-2">${ssrInterpolate((_b = currentImage.value) == null ? void 0 : _b.title)}</h3><p class="text-gray-300">${ssrInterpolate((_c = currentImage.value) == null ? void 0 : _c.description)}</p></div><button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-BQieakrn.mjs.map
