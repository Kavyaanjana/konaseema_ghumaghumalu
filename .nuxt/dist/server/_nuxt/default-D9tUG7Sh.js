import { _ as __nuxt_component_0$1 } from "./nuxt-link-CdBBp-_L.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/hookable/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/unctx/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/radix3/dist/index.mjs";
import "C:/Users/DELL/konaseema_ghumaghumalu/node_modules/defu/dist/defu.mjs";
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-lg sticky top-0 z-50" }, _attrs))} data-v-242653f9><nav class="container-max" data-v-242653f9><div class="flex items-center justify-between py-4" data-v-242653f9><div class="flex items-center" data-v-242653f9><div class="logo" data-v-242653f9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Konaseema Ghumaghumalu" class="logo-img" data-v-242653f9${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Konaseema Ghumaghumalu",
                class: "logo-img"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex items-center space-x-8" data-v-242653f9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["nav-link", { "text-orange-500": _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: ["nav-link", { "text-orange-500": _ctx.$route.path === "/about" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/menu",
        class: ["nav-link", { "text-orange-500": _ctx.$route.path === "/menu" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our Menu `);
          } else {
            return [
              createTextVNode(" Our Menu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gallery",
        class: ["nav-link", { "text-orange-500": _ctx.$route.path === "/gallery" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Gallery `);
          } else {
            return [
              createTextVNode(" Gallery ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["nav-link", { "text-orange-500": _ctx.$route.path === "/contact" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote1",
        class: ["btn-secondary text-sm", { "text-orange-500": _ctx.$route.path === "/quote1" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Quote1`);
          } else {
            return [
              createTextVNode("Request Quote1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/quote",
        class: "btn-secondary text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Request Quote 2 `);
          } else {
            return [
              createTextVNode(" Request Quote 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/order",
        class: "btn-primary text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ORDER NOW `);
          } else {
            return [
              createTextVNode(" ORDER NOW ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden" data-v-242653f9><button class="text-gray-700 hover:text-orange-500 focus:outline-none" data-v-242653f9><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-242653f9><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-242653f9></path></svg></button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="md:hidden py-4 border-t" data-v-242653f9><div class="flex flex-col space-y-4 p-3" data-v-242653f9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "nav-link",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          class: "nav-link",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` About `);
            } else {
              return [
                createTextVNode(" About ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/menu",
          class: "nav-link",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Our Menu `);
            } else {
              return [
                createTextVNode(" Our Menu ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/gallery",
          class: "nav-link",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Gallery `);
            } else {
              return [
                createTextVNode(" Gallery ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "nav-link",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact Us `);
            } else {
              return [
                createTextVNode(" Contact Us ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-col space-y-2 pt-4" data-v-242653f9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/quote1",
          class: "btn-secondary text-center",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request Quote 1 `);
            } else {
              return [
                createTextVNode(" Request Quote 1 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/quote",
          class: "btn-secondary text-center",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request Quote 2 `);
            } else {
              return [
                createTextVNode(" Request Quote 2 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/order",
          class: "btn-primary text-center",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ORDER NOW `);
            } else {
              return [
                createTextVNode(" ORDER NOW ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-242653f9"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 text-white" }, _attrs))} data-v-12db4c11><div class="container-max py-6 px-7" data-v-12db4c11><div class="grid grid-cols-1 md:grid-cols-4 gap-8" data-v-12db4c11><div data-v-12db4c11><div class="mb-4" data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "logo-link inline-block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Konaseema Ghumaghumalu" class="logo-img" data-v-12db4c11${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Konaseema Ghumaghumalu",
            class: "logo-img"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><p class="text-gray-300 mb-4" data-v-12db4c11> Authentic Andhra flavors in the heart of KPHB, Hyderabad. Experience traditional coastal cuisine with a modern touch. </p><div class="text-gray-300 space-y-1" data-v-12db4c11></div></div><div data-v-12db4c11><h3 class="text-xl font-bold mb-4 text-orange-500" data-v-12db4c11>Our Location</h3><p class="text-gray-300" data-v-12db4c11> Konaseema Ghumaghumalu, Flat No: 681, Lakshmi Arcade, 13th Phase Rd, 9th Phase, Kukatpally Housing Board Colony, Hafeezpet, Hyderabad, Telangana 500085 </p></div><div data-v-12db4c11><h3 class="text-xl font-bold mb-4 text-orange-500" data-v-12db4c11>Quick Links</h3><ul class="space-y-2 text-gray-300" data-v-12db4c11><li data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:text-orange-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "hover:text-orange-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/menu",
    class: "hover:text-orange-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Menu`);
      } else {
        return [
          createTextVNode("Our Menu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/gallery",
    class: "hover:text-orange-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-12db4c11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "hover:text-orange-500"
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
  _push(`</li></ul></div><div data-v-12db4c11><h3 class="text-xl font-bold mb-4 text-orange-500" data-v-12db4c11>Opening Hours</h3><div class="text-gray-300 mb-4" data-v-12db4c11><p data-v-12db4c11>Monday - Sunday</p><p data-v-12db4c11>11:00 AM - 10:00 PM</p></div><div class="flex space-x-4" data-v-12db4c11><a href="#" class="text-gray-300 hover:text-orange-500 transition" data-v-12db4c11><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-12db4c11><path d="M24 4.557c-...z" data-v-12db4c11></path></svg></a><a href="#" class="text-gray-300 hover:text-orange-500 transition" data-v-12db4c11><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-12db4c11><path d="M22.46 6c-...z" data-v-12db4c11></path></svg></a><a href="#" class="text-gray-300 hover:text-orange-500 transition" data-v-12db4c11><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-12db4c11><path d="M12.017 0C5.396...z" data-v-12db4c11></path></svg></a></div></div></div><div class="border-t border-gray-700 mt-8 pt-8 text-center" data-v-12db4c11><p class="text-gray-400" data-v-12db4c11> © 2024 Konaseema Ghumaghumalu. All rights reserved. | <span class="text-orange-500" data-v-12db4c11>Made with Manus</span></p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-12db4c11"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-D9tUG7Sh.js.map
