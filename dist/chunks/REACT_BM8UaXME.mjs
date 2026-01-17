import { c as createComponent, a as createAstro, m as maybeRenderHead, s as spreadAttributes, b as renderTemplate, r as renderComponent, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_D-k4d0WZ.mjs';
/* empty css                         */

const $$Astro$f = createAstro();
const $$SunIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SunIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/SunIcon.astro", void 0);

const $$Astro$e = createAstro();
const $$MoonIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$MoonIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/MoonIcon.astro", void 0);

const $$Astro$d = createAstro();
const $$SystemIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SystemIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/SystemIcon.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3> <ul data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  let remove = null\n  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")\n  const themesMenu = document.getElementById("themes-menu")\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system"\n    }\n\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light"\n  }\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0"\n    })\n  }\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove()\n    }\n    matchMedia.addEventListener("change", updateTheme)\n    remove = () => {\n      matchMedia.removeEventListener("change", updateTheme)\n    }\n\n    const themePreference = getThemePreference()\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMedia.matches)\n\n    updateIcon(themePreference)\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark")\n  }\n\n  updateTheme()\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"))\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation()\n    const isClosed = !themesMenu.classList.contains("open")\n    themesMenu.classList[isClosed ? "add" : "remove"]("open")\n  })\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())\n      updateTheme()\n    })\n  })\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SunIcon", $$SunIcon, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$MoonIcon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$SystemIcon, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/ThemeToggle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="lang-btn" class="px-4 py-2">
\u{1F310} ES
</button> <script>
  // aplica el idioma guardado de  la p\xE1gina
  const savedLang = localStorage.getItem("lang") || "es";
  document.documentElement.lang = savedLang;
  const btn = document.getElementById("lang-btn");
  btn.textContent = savedLang === "es" ? "\u{1F310} EN" : "\u{1F310} ES";
<\/script> <script type="module">
  // cambio
  const btn = document.getElementById("lang-btn");
  btn.addEventListener("click", () => {
    // switch entre 'es' y 'en'
    const current = document.documentElement.lang || "es";
    const next = current === "es" ? "en" : "es";
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;

    // Actualiza el texto del bot\xF3n
    btn.textContent = next === "es" ? "\u{1F310} EN" : "\u{1F310} ES";

    // rutas /es/ y /en/, redirige:
    const path = window.location.pathname;
    const newPath = path.replace(/^\\/(es|en)/, \`/\${next}\`);
    window.location.pathname = newPath;
  });
<\/script>`], ["", `<button id="lang-btn" class="px-4 py-2">
\u{1F310} ES
</button> <script>
  // aplica el idioma guardado de  la p\xE1gina
  const savedLang = localStorage.getItem("lang") || "es";
  document.documentElement.lang = savedLang;
  const btn = document.getElementById("lang-btn");
  btn.textContent = savedLang === "es" ? "\u{1F310} EN" : "\u{1F310} ES";
<\/script> <script type="module">
  // cambio
  const btn = document.getElementById("lang-btn");
  btn.addEventListener("click", () => {
    // switch entre 'es' y 'en'
    const current = document.documentElement.lang || "es";
    const next = current === "es" ? "en" : "es";
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;

    // Actualiza el texto del bot\xF3n
    btn.textContent = next === "es" ? "\u{1F310} EN" : "\u{1F310} ES";

    // rutas /es/ y /en/, redirige:
    const path = window.location.pathname;
    const newPath = path.replace(/^\\\\/(es|en)/, \\\`/\\\${next}\\\`);
    window.location.pathname = newPath;
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/LanguageToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Portafolio",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:abcdrojasgimenez@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/LanguageToggle.astro", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-blue rounded-lg shadow m-4 w-full py-5 xl:w-[1120px] mx-auto mb-10"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li> <a href="#top" class="hover:underline me-4 md:me-6">inicio</a> </li> <li> <a href="mailto:criptamas@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Realizado por <a rel=" noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/criptamas/" class="hover:underline">Juan Rojas</a></span> </div> </footer>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Footer.astro", void 0);

const $$Astro$c = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/code-circle-2.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- HTML Meta Tags --><title>Portafolio Juan Rojas Desarrollador FrontEnd y Programador Web</title><meta name="description" content="Curriculum de Juan Rojas. Programador en Javascript. Manejo de ReactJS y Astro."><!-- Facebook Meta OP --><meta property="og:url" content="https://portafolio-juan-rojas.vercel.app/"><meta property="og:type" content="website"><meta property="og:title" content="Portafolio Juan Rojas Desarrollador FrontEnd y Programador Web"><meta property="og:description" content="Curriculum de Juan Rojas. Programador en Javascript y Python. Manejo de ReactJS y Astro."><meta property="og:image" content="https://avatars.githubusercontent.com/u/113388558?v=4"><!-- Twitter Meta  OP--><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="portafolio-juan-rojas.vercel.app"><meta property="twitter:url" content="https://portafolio-juan-rojas.vercel.app/"><meta name="twitter:title" content="Portafolio Juan Rojas Desarrollador FrontEnd y Programador Web"><meta name="twitter:description" content="Curriculum de Juan Rojas. Programador en Javascript y Python. Manejo de ReactJS y Astro."><meta name="twitter:image" content="https://avatars.githubusercontent.com/u/113388558?v=4"><title>${title}</title>${renderHead()}</head> <body class="relative h-full w-full bg-slate-950"> <div><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div></body></html>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Badge.astro", void 0);

const $$Astro$b = createAstro();
const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkedinIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/LinkedinIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$MailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MailIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"></path><path d="M3 7l9 6l9 -6"></path><path d="M16 22l5 -5"></path><path d="M21 21.5v-4.5h-4.5"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/MailIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$Socialref = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Socialref;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 text-xs md:text-base  transition "${spreadAttributes(Astro2.props)} rel="noopener noreferrer" target="_blank"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Socialref.astro", void 0);

const $$Astro$8 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full mx-auto  lg:w-[740px] ${className} py-15 mb-20`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/SectionContainer.astro", void 0);

const $$ImgSobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img width="200" height="200" src="/assets/yo.jpg"${addAttribute("Juan Rojas", "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%">`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/ImgSobreMi.astro", void 0);

const $$Astro$7 = createAstro();
const $$CodeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CodeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9"></path><path d="M3 13h18"></path><path d="M8 21h3.5"></path><path d="M10 17l-.5 4"></path><path d="M20 21l2 -2l-2 -2"></path><path d="M17 17l-2 2l2 2"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/CodeIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$CvIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CvIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path><path d="M13 11l1.5 6l1.5 -6"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/CvIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$Perfilyo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Perfilyo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/Perfilyo.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sabermas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sabermas;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank" rel="noopener noreferrer"${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Sabermas.astro", void 0);

const $$Astro$3 = createAstro();
const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/GithubIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$Linkbutton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Linkbutton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank" rel=" noopener noreferrer"${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Linkbutton.astro", void 0);

const $$Astro$1 = createAstro();
const $$JS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/JS.astro", void 0);

const $$Astro = createAstro();
const $$REACT = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$REACT;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"></path> </svg>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/icons/REACT.astro", void 0);

export { $$Layout as $, $$SectionContainer as a, $$Badge as b, $$Socialref as c, $$MailIcon as d, $$LinkedinIcon as e, $$CvIcon as f, $$CodeIcon as g, $$Sabermas as h, $$JS as i, $$REACT as j, $$Linkbutton as k, $$GithubIcon as l, $$Perfilyo as m, $$ImgSobreMi as n };
