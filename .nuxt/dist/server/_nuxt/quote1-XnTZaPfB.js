import { _ as __nuxt_component_0 } from "./nuxt-link-CdBBp-_L.js";
import { reactive, ref, computed, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-TJBJZBmk.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/ufo/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/hookable/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unctx/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/radix3/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "quote1",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Request Quote - Konaseema Ghumaghumalu Catering",
      meta: [
        {
          name: "description",
          content: "Request a catering quote for your special event. Authentic Andhra cuisine catering services for weddings, corporate events, and celebrations in Hyderabad."
        }
      ]
    });
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      company: "",
      eventType: "",
      guests: "",
      eventDate: "",
      eventTime: "",
      venue: "",
      serviceType: "",
      dietary: [],
      budget: "",
      specialRequests: "",
      referralSource: "",
      agreeTerms: false,
      agreePrivacy: false
    });
    const isSubmitting = ref(false);
    const submitMessage = ref("");
    const submitSuccess = ref(false);
    const minDate = computed(() => {
      const today = /* @__PURE__ */ new Date();
      return today.toISOString().split("T")[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3836bc62><section class="quote-header" data-v-3836bc62><div class="container" data-v-3836bc62><h1 data-v-3836bc62>Request a Quote</h1><p data-v-3836bc62> Planning an event or celebration? Let us cater your special occasion with authentic Andhra cuisine that will delight your guests. </p></div></section><section class="quote-form-section" data-v-3836bc62><div class="container" data-v-3836bc62><div class="form-container" data-v-3836bc62><h2 data-v-3836bc62>Get Your Catering Quote</h2><form class="quote-form" data-v-3836bc62><div class="form-section" data-v-3836bc62><h3 data-v-3836bc62>Personal Information</h3><div class="form-row" data-v-3836bc62><div class="form-group" data-v-3836bc62><label for="name" data-v-3836bc62>Full Name *</label><input type="text" id="name"${ssrRenderAttr("value", form.name)} required placeholder="Enter your full name" data-v-3836bc62></div><div class="form-group" data-v-3836bc62><label for="email" data-v-3836bc62>Email Address *</label><input type="email" id="email"${ssrRenderAttr("value", form.email)} required placeholder="Enter your email address" data-v-3836bc62></div></div><div class="form-row" data-v-3836bc62><div class="form-group" data-v-3836bc62><label for="phone" data-v-3836bc62>Phone Number *</label><input type="tel" id="phone"${ssrRenderAttr("value", form.phone)} required placeholder="Enter your phone number" data-v-3836bc62></div><div class="form-group" data-v-3836bc62><label for="company" data-v-3836bc62>Company/Organization</label><input type="text" id="company"${ssrRenderAttr("value", form.company)} placeholder="Enter company name (optional)" data-v-3836bc62></div></div></div><div class="form-section" data-v-3836bc62><h3 data-v-3836bc62>Event Details</h3><div class="form-row" data-v-3836bc62><div class="form-group" data-v-3836bc62><label for="eventType" data-v-3836bc62>Event Type *</label><select id="eventType" required data-v-3836bc62><option value="" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "") : ssrLooseEqual(form.eventType, "")) ? " selected" : ""}>Select event type</option><option value="wedding" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "wedding") : ssrLooseEqual(form.eventType, "wedding")) ? " selected" : ""}>Wedding</option><option value="corporate" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "corporate") : ssrLooseEqual(form.eventType, "corporate")) ? " selected" : ""}>Corporate Event</option><option value="birthday" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "birthday") : ssrLooseEqual(form.eventType, "birthday")) ? " selected" : ""}>Birthday Party</option><option value="anniversary" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "anniversary") : ssrLooseEqual(form.eventType, "anniversary")) ? " selected" : ""}>Anniversary</option><option value="festival" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "festival") : ssrLooseEqual(form.eventType, "festival")) ? " selected" : ""}>Festival Celebration</option><option value="other" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.eventType) ? ssrLooseContain(form.eventType, "other") : ssrLooseEqual(form.eventType, "other")) ? " selected" : ""}>Other</option></select></div><div class="form-group" data-v-3836bc62><label for="guests" data-v-3836bc62>Number of Guests *</label><select id="guests" required data-v-3836bc62><option value="" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "") : ssrLooseEqual(form.guests, "")) ? " selected" : ""}>Select guest count</option><option value="10-25" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "10-25") : ssrLooseEqual(form.guests, "10-25")) ? " selected" : ""}>10-25 guests</option><option value="26-50" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "26-50") : ssrLooseEqual(form.guests, "26-50")) ? " selected" : ""}>26-50 guests</option><option value="51-100" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "51-100") : ssrLooseEqual(form.guests, "51-100")) ? " selected" : ""}>51-100 guests</option><option value="101-200" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "101-200") : ssrLooseEqual(form.guests, "101-200")) ? " selected" : ""}>101-200 guests</option><option value="200+" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.guests) ? ssrLooseContain(form.guests, "200+") : ssrLooseEqual(form.guests, "200+")) ? " selected" : ""}>200+ guests</option></select></div></div><div class="form-row" data-v-3836bc62><div class="form-group" data-v-3836bc62><label for="eventDate" data-v-3836bc62>Event Date *</label><input type="date" id="eventDate"${ssrRenderAttr("value", form.eventDate)} required${ssrRenderAttr("min", minDate.value)} data-v-3836bc62></div><div class="form-group" data-v-3836bc62><label for="eventTime" data-v-3836bc62>Event Time</label><input type="time" id="eventTime"${ssrRenderAttr("value", form.eventTime)} data-v-3836bc62></div></div><div class="form-group" data-v-3836bc62><label for="venue" data-v-3836bc62>Venue/Location *</label><input type="text" id="venue"${ssrRenderAttr("value", form.venue)} required placeholder="Enter event venue or location" data-v-3836bc62></div></div><div class="form-section" data-v-3836bc62><h3 data-v-3836bc62>Catering Preferences</h3><div class="form-group" data-v-3836bc62><label data-v-3836bc62>Service Type *</label><div class="checkbox-group" data-v-3836bc62><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.serviceType) ? ssrLooseContain(form.serviceType, "buffet") : form.serviceType) ? " checked" : ""} value="buffet" required data-v-3836bc62><span data-v-3836bc62>Buffet Service</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.serviceType) ? ssrLooseContain(form.serviceType, "plated") : form.serviceType) ? " checked" : ""} value="plated" required data-v-3836bc62><span data-v-3836bc62>Plated Service</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.serviceType) ? ssrLooseContain(form.serviceType, "family") : form.serviceType) ? " checked" : ""} value="family" required data-v-3836bc62><span data-v-3836bc62>Family Style</span></div></div></div><div class="form-group pt-5" data-v-3836bc62><label data-v-3836bc62>Dietary Requirements</label><div class="checkbox-group" data-v-3836bc62><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.dietary) ? ssrLooseContain(form.dietary, "vegetarian") : form.dietary) ? " checked" : ""} value="vegetarian" data-v-3836bc62><span data-v-3836bc62>Vegetarian Options</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.dietary) ? ssrLooseContain(form.dietary, "vegan") : form.dietary) ? " checked" : ""} value="vegan" data-v-3836bc62><span data-v-3836bc62>Vegan Options</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.dietary) ? ssrLooseContain(form.dietary, "glutenfree") : form.dietary) ? " checked" : ""} value="glutenfree" data-v-3836bc62><span data-v-3836bc62>Gluten-Free Options</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.dietary) ? ssrLooseContain(form.dietary, "spicylevel") : form.dietary) ? " checked" : ""} value="spicylevel" data-v-3836bc62><span data-v-3836bc62>Mild Spice Level</span></div></div></div><div class="form-group pt-5" data-v-3836bc62><label for="budget" data-v-3836bc62>Budget Range</label><select id="budget" data-v-3836bc62><option value="" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "") : ssrLooseEqual(form.budget, "")) ? " selected" : ""}>Select budget range</option><option value="under-500" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "under-500") : ssrLooseEqual(form.budget, "under-500")) ? " selected" : ""}>Under ₹500 per person</option><option value="500-1000" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "500-1000") : ssrLooseEqual(form.budget, "500-1000")) ? " selected" : ""}>₹500 - ₹1000 per person</option><option value="1000-1500" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "1000-1500") : ssrLooseEqual(form.budget, "1000-1500")) ? " selected" : ""}>₹1000 - ₹1500 per person</option><option value="1500-2000" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "1500-2000") : ssrLooseEqual(form.budget, "1500-2000")) ? " selected" : ""}>₹1500 - ₹2000 per person</option><option value="above-2000" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.budget) ? ssrLooseContain(form.budget, "above-2000") : ssrLooseEqual(form.budget, "above-2000")) ? " selected" : ""}>Above ₹2000 per person</option></select></div></div><div class="form-section" data-v-3836bc62><h3 data-v-3836bc62>Additional Information</h3><div class="form-group" data-v-3836bc62><label for="specialRequests" data-v-3836bc62>Special Requests or Menu Preferences</label><textarea id="specialRequests" rows="4" placeholder="Tell us about any specific dishes, requirements, etc." data-v-3836bc62>${ssrInterpolate(form.specialRequests)}</textarea></div><div class="form-group pt-3 width-hear" data-v-3836bc62><label for="referralSource" data-v-3836bc62>How did you hear about us?</label><select id="referralSource" data-v-3836bc62><option value="" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "") : ssrLooseEqual(form.referralSource, "")) ? " selected" : ""}>Select an option</option><option value="google" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "google") : ssrLooseEqual(form.referralSource, "google")) ? " selected" : ""}>Google</option><option value="instagram" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "instagram") : ssrLooseEqual(form.referralSource, "instagram")) ? " selected" : ""}>Instagram</option><option value="facebook" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "facebook") : ssrLooseEqual(form.referralSource, "facebook")) ? " selected" : ""}>Facebook</option><option value="friend" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "friend") : ssrLooseEqual(form.referralSource, "friend")) ? " selected" : ""}>Friend/Referral</option><option value="event" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "event") : ssrLooseEqual(form.referralSource, "event")) ? " selected" : ""}>Saw at an Event</option><option value="other" data-v-3836bc62${ssrIncludeBooleanAttr(Array.isArray(form.referralSource) ? ssrLooseContain(form.referralSource, "other") : ssrLooseEqual(form.referralSource, "other")) ? " selected" : ""}>Other</option></select></div><div class="form-group checkbox-group" data-v-3836bc62><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.agreeTerms) ? ssrLooseContain(form.agreeTerms, null) : form.agreeTerms) ? " checked" : ""} required data-v-3836bc62><span data-v-3836bc62>I agree to the Terms and Conditions *</span></div><div class="checkbox-label" data-v-3836bc62><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.agreePrivacy) ? ssrLooseContain(form.agreePrivacy, null) : form.agreePrivacy) ? " checked" : ""} required data-v-3836bc62><span data-v-3836bc62>I agree to the Privacy Policy *</span></div></div></div><button type="submit" class="btn btn-primary submit-btn"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-3836bc62>${ssrInterpolate(isSubmitting.value ? "Submitting..." : "Request Quote")}</button></form>`);
      if (submitMessage.value) {
        _push(`<div class="${ssrRenderClass([submitSuccess.value ? "success" : "error", "submit-message"])}" data-v-3836bc62>${ssrInterpolate(submitMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><section class="why-choose-us" data-v-3836bc62><div class="container" data-v-3836bc62><h2 data-v-3836bc62>Why Choose Our Catering Services?</h2><div class="features-grid" data-v-3836bc62><div class="feature-card" data-v-3836bc62><div class="feature-icon" data-v-3836bc62>🍽️</div><h3 data-v-3836bc62>Authentic Flavors</h3><p data-v-3836bc62> Traditional Andhra recipes prepared by experienced chefs using authentic spices and techniques. </p></div><div class="feature-card" data-v-3836bc62><div class="feature-icon" data-v-3836bc62>👨‍🍳</div><h3 data-v-3836bc62>Professional Service</h3><p data-v-3836bc62> Experienced catering team ensuring seamless service and presentation for your special event. </p></div><div class="feature-card" data-v-3836bc62><div class="feature-icon" data-v-3836bc62>🌿</div><h3 data-v-3836bc62>Fresh Ingredients</h3><p data-v-3836bc62> We use only the freshest, locally sourced ingredients to ensure the highest quality dishes. </p></div><div class="feature-card" data-v-3836bc62><div class="feature-icon" data-v-3836bc62>💰</div><h3 data-v-3836bc62>Competitive Pricing</h3><p data-v-3836bc62> Affordable catering packages without compromising on quality or taste. </p></div></div></div></section><section class="contact-cta" data-v-3836bc62><div class="container" data-v-3836bc62><h2 data-v-3836bc62>Need to Discuss Your Event?</h2><p data-v-3836bc62> Our catering specialists are here to help you plan the perfect menu for your occasion. </p><div class="cta-buttons" data-v-3836bc62><a href="tel:+917674800999" class="btn btn-primary" data-v-3836bc62>Call Us: 076748 00999</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/quote1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quote1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3836bc62"]]);
export {
  quote1 as default
};
//# sourceMappingURL=quote1-XnTZaPfB.js.map
