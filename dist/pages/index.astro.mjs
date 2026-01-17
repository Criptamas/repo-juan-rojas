/* empty css                                 */
import { c as createComponent, b as renderTemplate, e as renderHead } from '../chunks/astro/server_D-k4d0WZ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="es"> <head><meta charset="UTF-8"><title>Redirigiendo\u2026</title><script>
      const saved = localStorage.getItem('lang');
      const defaultLang = navigator.language.startsWith('en') ? 'en' : 'es';
      const lang = saved || defaultLang;
      window.location.replace(\`/\${lang}/\`);
    <\/script>`, "</head> <body></body></html>"], [`<html lang="es"> <head><meta charset="UTF-8"><title>Redirigiendo\u2026</title><script>
      const saved = localStorage.getItem('lang');
      const defaultLang = navigator.language.startsWith('en') ? 'en' : 'es';
      const lang = saved || defaultLang;
      window.location.replace(\\\`/\\\${lang}/\\\`);
    <\/script>`, "</head> <body></body></html>"])), renderHead());
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/index.astro", void 0);

const $$file = "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
