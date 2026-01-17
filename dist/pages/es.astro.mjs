/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, a as createAstro } from '../chunks/astro/server_D-k4d0WZ.mjs';
import { i as $$JS, j as $$REACT, k as $$Linkbutton, h as $$Sabermas, l as $$GithubIcon, n as $$ImgSobreMi, $ as $$Layout, a as $$SectionContainer, b as $$Badge, c as $$Socialref, d as $$MailIcon, e as $$LinkedinIcon, f as $$CvIcon, g as $$CodeIcon, m as $$Perfilyo } from '../chunks/REACT_BM8UaXME.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    JS: {
      name: "JavaScript",
      class: "bg-[#eab308] text-black",
      icon: $$JS
    },
    REACT: {
      name: "REACT",
      class: "bg-[#003159] text-white",
      icon: $$REACT
    }
  };
  const PROYECTOS = [
    {
      title: "Prueba React Junior",
      description: "Participe en una prueba tecnica para Junior donde me pidieron consumir una API de usuarios usando ReactJS y agregarlos a una tabla dinamicamente, ademas de modificar y ordenar por pais se les puede agregar color, tiene un buscador que filtra por pais y un boton para eliminar y deshacer cambios. Para todo esto use React Component, Async Await, los hooks useffect y useState.",
      link: "https://react-prueba-a1cqg89b6-criptamas-projects.vercel.app/",
      github: "https://github.com/Criptamas/proto-prueba",
      image: "https://pbs.twimg.com/media/GjuU66ZWIAA1Q5o?format=jpg&name=medium",
      tags: [TAGS.JS, TAGS.REACT],
      a: "https://github.com/Criptamas?tab=repositories"
    },
    {
      title: "Pagina Web -  Punto flash",
      description: "Realice una demo de como podria ser un sitio web con Javascript vanilla y HTML REACT para un restaurant llamado Punto Flash.",
      link: "https://punto-flash-web-site.vercel.app/",
      github: "https://github.com/Criptamas/PuntoFlashWebSite",
      image: "https://pbs.twimg.com/media/GjuBbblXEAAbf_5?format=jpg&name=large",
      tags: [TAGS.JS],
      a: "https://github.com/Criptamas?tab=repositories"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16 "> ${PROYECTOS.map(({ image, title, description, tags, link, github, a }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Primer Proyecto estudiando programacion" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$Linkbutton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GithubIcon", $$GithubIcon, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$Linkbutton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$GithubIcon, { "class": "size-4" })}
Preview
` })}`} </footer> </div> ${renderComponent($$result, "Sabermas", $$Sabermas, { "href": a }, { "default": ($$result2) => renderTemplate`
Ver mas proyectos${""}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> ` })} </div> </article>`)} </div>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Proyectos.astro", void 0);

const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p> <strong>Comence a estudiar programacion por primera vez por alla en el 2022.</strong> </p> <p>
Mi experiencia va desde proyectos colaborativos hasta personales, a modo de practica. <strong>Por ejemplo, he formado parte del equipo de No-Country en dos ocasiones </strong> y participe en una entrevista de trabajo para Junior Front Developer.
</p> <p>
Por lo mismo me considero Junior Trainee <strong> con solidos conocimientos en <em class="italic"> Javascript, ReactJS, HTML, CSS y Git - Github </em></strong>.  Estoy listo para arrancar a crear productos de alto impacto💥
</p> </div> ${renderComponent($$result, "ImgSobreMi", $$ImgSobreMi, {})} </article>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/SobreMi.astro", void 0);

const $$Formacion = createComponent(($$result, $$props, $$slots) => {
  const FORMACION = [
    {
      title: "Platzi - Curso de Fundamentos de Javascript",
      description: "En este curso aprend\xED a comprender desde cero c\xF3mo funciona este lenguaje hasta declarar variables, trabajar con tipos de datos, condicionales y bucles. Tambi\xE9n entend\xED c\xF3mo manipular arrays y objetos, adem\xE1s de usar funciones para estructurar mejor mi c\xF3digo.",
      image: "https://pbs.twimg.com/media/GjuIW8gXoAEPykm?format=jpg&name=large",
      verMas: false
    },
    {
      title: "Platzi - Manipulacion del DOM",
      description: "Aca aprendi a acceder y modificar elementos de una p\xE1gina web usando JavaScript seleccionando nodos, cambiando textos, estilos y atributos en tiempo real. Ademas de  crear y eliminar elementos del DOM din\xE1micamente. S\xE9 manejar eventos como clics y formularios para hacer mis p\xE1ginas interactivas. Adem\xE1s, aprend\xED sobre el flujo de eventos y el uso de addEventListener.",
      image: "https://pbs.twimg.com/media/GjuHnc9XEAENm4Z?format=jpg&name=medium",
      a: "https://github.com/Criptamas",
      verMas: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16 "> ${FORMACION.map(({ image, title, description, a, verMas }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Primer Proyecto estudiando programacion" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> </div> ${verMas && renderTemplate`${renderComponent($$result, "Sabermas", $$Sabermas, { "href": a }, { "default": ($$result2) => renderTemplate`
Ver todos mis certificados${""}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> ` })}`} </div> </article>`)} </div>`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/components/Formacion.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Juan Rojas Desarrollador y Programador Web", "description": "Curriculum de Juan Rojas. Programador en Javascript y Python. Manejo de ReactJS y Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-20 pb-22" }, { "default": ($$result3) => renderTemplate` <img class="rounded-full size-12 mb-4" src="https://avatars.githubusercontent.com/u/113388558?v=4" alt="Juan Rojas foto"> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">Hola Soy Juan Rojas <div class="flex justify-center items-center"> <a href="https://www.linkedin.com/in/criptamas/" rel="noreferrer" target="_blank">${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })}</a> </div> </h1> <h2 class="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]"> <span>
Junior Web Developer ReactJS. </span><span class="text-orange-200/90"> Tengo solidos conocimientos en semantica WEB HTML & CSS. </span> <span class="text-red-200/95"> Soy Venezolano. </span> <span class="opacity-80"> Estoy listo para arrancar a crear productos de alto impacto💥</span> </h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "Socialref", $$Socialref, { "href": "mailto:criptamas@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$MailIcon, { "class": "size-4 md:size-6" })} Contactame
` })} ${renderComponent($$result3, "Socialref", $$Socialref, { "href": "https://www.linkedin.com/in/criptamas/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$LinkedinIcon, { "class": "size-4 md:size-6" })} LinkedIn
` })} ${renderComponent($$result3, "Socialref", $$Socialref, { "download": "frontend-juan-rojas.pdf", "href": "/files/mi-hoja-de-vida.pdf" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CvIcon", $$CvIcon, { "class": "size-4 md:size-6" })} Hoja de vida
` })} </nav> ` })} <!-- PORTAFOLIO --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$CodeIcon, {})}
Portafolio </h2> ${renderComponent($$result3, "Formacion", $$Formacion, {})}  ${renderComponent($$result3, "SectionContainer", $$SectionContainer, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Proyectos", $$Proyectos, {})} ` })}  ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result4) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result4, "Perfilyo", $$Perfilyo, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result4, "SobreMi", $$SobreMi, {})} ` })} ` })}</main> ` })}`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
