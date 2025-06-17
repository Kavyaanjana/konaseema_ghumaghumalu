import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/server-renderer/index.mjs';
import { ref, useSSRContext } from 'file://C:/Users/DELL/konaseema_ghumaghumalu/node_modules/vue/index.mjs';
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
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Request Quote - Konaseema Ghumaghumalu",
      meta: [
        { name: "description", content: "Request a catering quote from Konaseema Ghumaghumalu for your special event. Authentic Andhra cuisine for weddings, corporate events, and celebrations." }
      ]
    });
    const quote = ref({
      eventType: "",
      guestCount: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      mealTypes: [],
      cuisines: [],
      dietaryRestrictions: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      budget: "",
      services: [],
      additionalNotes: ""
    });
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding bg-gradient-to-r from-orange-50 to-orange-100"><div class="container-max text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Request a Quote</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto"> Planning an event or need catering services? Get a personalized quote for your special occasion. </p></div></section><section class="section-padding bg-white"><div class="container-max max-w-4xl"><form class="space-y-8"><div class="bg-gray-50 p-6 rounded-lg"><h2 class="text-2xl font-bold mb-6 text-gray-800">Event Details</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="eventType" class="block text-sm font-medium text-gray-700 mb-2">Event Type</label><select id="eventType" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"><option value=""${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "") : ssrLooseEqual(quote.value.eventType, "")) ? " selected" : ""}>Select event type</option><option value="wedding"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "wedding") : ssrLooseEqual(quote.value.eventType, "wedding")) ? " selected" : ""}>Wedding</option><option value="birthday"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "birthday") : ssrLooseEqual(quote.value.eventType, "birthday")) ? " selected" : ""}>Birthday Party</option><option value="corporate"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "corporate") : ssrLooseEqual(quote.value.eventType, "corporate")) ? " selected" : ""}>Corporate Event</option><option value="anniversary"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "anniversary") : ssrLooseEqual(quote.value.eventType, "anniversary")) ? " selected" : ""}>Anniversary</option><option value="festival"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "festival") : ssrLooseEqual(quote.value.eventType, "festival")) ? " selected" : ""}>Festival Celebration</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(quote.value.eventType) ? ssrLooseContain(quote.value.eventType, "other") : ssrLooseEqual(quote.value.eventType, "other")) ? " selected" : ""}>Other</option></select></div><div><label for="guestCount" class="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label><input type="number" id="guestCount"${ssrRenderAttr("value", quote.value.guestCount)} required min="10" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="e.g., 50"></div><div><label for="eventDate" class="block text-sm font-medium text-gray-700 mb-2">Event Date</label><input type="date" id="eventDate"${ssrRenderAttr("value", quote.value.eventDate)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"></div><div><label for="eventTime" class="block text-sm font-medium text-gray-700 mb-2">Event Time</label><input type="time" id="eventTime"${ssrRenderAttr("value", quote.value.eventTime)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"></div></div><div class="mt-6"><label for="venue" class="block text-sm font-medium text-gray-700 mb-2">Venue</label><input type="text" id="venue"${ssrRenderAttr("value", quote.value.venue)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Event venue address"></div></div><div class="bg-gray-50 p-6 rounded-lg"><h2 class="text-2xl font-bold mb-6 text-gray-800">Menu Preferences</h2><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-3">Meal Type (Select all that apply)</label><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.mealTypes) ? ssrLooseContain(quote.value.mealTypes, "breakfast") : quote.value.mealTypes) ? " checked" : ""} value="breakfast" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Breakfast</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.mealTypes) ? ssrLooseContain(quote.value.mealTypes, "lunch") : quote.value.mealTypes) ? " checked" : ""} value="lunch" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Lunch</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.mealTypes) ? ssrLooseContain(quote.value.mealTypes, "dinner") : quote.value.mealTypes) ? " checked" : ""} value="dinner" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Dinner</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.mealTypes) ? ssrLooseContain(quote.value.mealTypes, "snacks") : quote.value.mealTypes) ? " checked" : ""} value="snacks" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Snacks</span></label></div></div><div><label class="block text-sm font-medium text-gray-700 mb-3">Cuisine Preferences</label><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.cuisines) ? ssrLooseContain(quote.value.cuisines, "andhra") : quote.value.cuisines) ? " checked" : ""} value="andhra" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Traditional Andhra</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.cuisines) ? ssrLooseContain(quote.value.cuisines, "south-indian") : quote.value.cuisines) ? " checked" : ""} value="south-indian" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">South Indian</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.cuisines) ? ssrLooseContain(quote.value.cuisines, "north-indian") : quote.value.cuisines) ? " checked" : ""} value="north-indian" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">North Indian</span></label></div></div><div><label for="dietaryRestrictions" class="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label><textarea id="dietaryRestrictions" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical" placeholder="Please mention any dietary restrictions, allergies, or special requirements...">${ssrInterpolate(quote.value.dietaryRestrictions)}</textarea></div></div></div><div class="bg-gray-50 p-6 rounded-lg"><h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="contactName" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label><input type="text" id="contactName"${ssrRenderAttr("value", quote.value.contactName)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Your full name"></div><div><label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-2">Email</label><input type="email" id="contactEmail"${ssrRenderAttr("value", quote.value.contactEmail)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="your.email@example.com"></div><div><label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label><input type="tel" id="contactPhone"${ssrRenderAttr("value", quote.value.contactPhone)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="+91 98765 43210"></div><div><label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label><select id="budget" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"><option value=""${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "") : ssrLooseEqual(quote.value.budget, "")) ? " selected" : ""}>Select budget range</option><option value="under-50k"${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "under-50k") : ssrLooseEqual(quote.value.budget, "under-50k")) ? " selected" : ""}>Under \u20B950,000</option><option value="50k-1l"${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "50k-1l") : ssrLooseEqual(quote.value.budget, "50k-1l")) ? " selected" : ""}>\u20B950,000 - \u20B91,00,000</option><option value="1l-2l"${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "1l-2l") : ssrLooseEqual(quote.value.budget, "1l-2l")) ? " selected" : ""}>\u20B91,00,000 - \u20B92,00,000</option><option value="2l-5l"${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "2l-5l") : ssrLooseEqual(quote.value.budget, "2l-5l")) ? " selected" : ""}>\u20B92,00,000 - \u20B95,00,000</option><option value="above-5l"${ssrIncludeBooleanAttr(Array.isArray(quote.value.budget) ? ssrLooseContain(quote.value.budget, "above-5l") : ssrLooseEqual(quote.value.budget, "above-5l")) ? " selected" : ""}>Above \u20B95,00,000</option></select></div></div></div><div class="bg-gray-50 p-6 rounded-lg"><h2 class="text-2xl font-bold mb-6 text-gray-800">Additional Requirements</h2><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-3">Services Needed</label><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.services) ? ssrLooseContain(quote.value.services, "catering") : quote.value.services) ? " checked" : ""} value="catering" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Food Catering</span></label><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(quote.value.services) ? ssrLooseContain(quote.value.services, "service-staff") : quote.value.services) ? " checked" : ""} value="service-staff" class="rounded border-gray-300 text-orange-500 focus:ring-orange-500"><span class="ml-2">Service Staff</span></label></div></div><div><label for="additionalNotes" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label><textarea id="additionalNotes" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical" placeholder="Any additional requirements, special requests, or questions...">${ssrInterpolate(quote.value.additionalNotes)}</textarea></div></div></div><div class="text-center"><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed">`);
      if (isSubmitting.value) {
        _push(`<span>Submitting Quote Request...</span>`);
      } else {
        _push(`<span>Request Quote</span>`);
      }
      _push(`</button></div></form>`);
      if (showSuccess.value) {
        _push(`<div class="mt-8 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"><h3 class="text-lg font-semibold mb-2">Quote Request Submitted!</h3><p>Thank you for your interest in our catering services. We&#39;ll review your requirements and get back to you within 24 hours with a detailed quote.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/quote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=quote-CT4PBEhW.mjs.map
