/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D-k4d0WZ.mjs';
import { $ as $$Layout, a as $$SectionContainer, b as $$Badge, c as $$Socialref, d as $$MailIcon, e as $$LinkedinIcon, f as $$CvIcon, g as $$CodeIcon, h as $$Sabermas, i as $$JS, j as $$REACT, k as $$Linkbutton, l as $$GithubIcon, m as $$Perfilyo, n as $$ImgSobreMi } from '../chunks/REACT_BM8UaXME.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const EDUCATION = [
    {
      title: "Platzi - ReactJS Course",
      description: "I learned and mastered the entire basic ReactJS environment, from state management to intermediate hooks; including useContext, useEffect, and more. Techniques for rendering and custom hooks, API calls, and best practices.",
      image: "https://pbs.twimg.com/media/Gw53glcagAAcGNJ?format=png&name=small",
      verMas: false
    },
    {
      title: "Platzi - JavaScript Fundamentals Course",
      description: "In this course, I learned to understand from scratch how this language works, including how to declare variables, work with data types, conditionals, and loops. I also learned how to manipulate arrays and objects, as well as use functions to better structure my code.",
      image: "https://pbs.twimg.com/media/GjuIW8gXoAEPykm?format=jpg&name=large",
      a: "https://github.com/Criptamas",
      verMas: true
    }
  ];
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
  const PROJECTS = [
    {
      title: "React Junior Skills Test",
      description: "I participated in a technical test for a Junior position where I was asked to consume a user API using ReactJS and dynamically add users to a table. The table allowed modifying entries, sorting by country (with optional color coding), and included a search filter by country as well as buttons to delete entries and undo changes. For all of this, I used React Components, Async/Await, and the hooks useEffect and useState.",
      link: "https://react-prueba-a1cqg89b6-criptamas-projects.vercel.app/",
      github: "https://github.com/Criptamas/proto-prueba",
      image: "https://pbs.twimg.com/media/GjuU66ZWIAA1Q5o?format=jpg&name=medium",
      tags: [TAGS.JS, TAGS.REACT],
      a: "https://github.com/Criptamas?tab=repositories"
    },
    {
      title: "Punto flash - Landing Pages",
      description: "I made a demo of what a website could look like using vanilla JavaScript and HTML REACT for a restaurant called Punto Flash.",
      link: "https://punto-flash-web-site.vercel.app/",
      github: "https://github.com/Criptamas/PuntoFlashWebSite",
      image: "https://pbs.twimg.com/media/GjuBbblXEAAbf_5?format=jpg&name=large",
      tags: [TAGS.JS],
      a: "https://github.com/Criptamas?tab=repositories"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Juan Rojas's Portfolio Forntend Developer", "description": "Juan Rojas \u2014 Resume: From HTML to AstroJS Knowledg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-20 pb-22" }, { "default": ($$result3) => renderTemplate` <img class="rounded-full size-12 mb-4" src="https://avatars.githubusercontent.com/u/113388558?v=4" alt="Juan Rojas foto"> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"> Hi there! I'm Juan Rojas<div class="flex justify-center items-center"> <a href="https://www.linkedin.com/in/criptamas/" rel="noreferrer" target="_blank"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate` Open to work ` })} </a> </div> </h1> <h2 class="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]"> <span>
Junior Web Developer ReactJS. </span><span class="text-orange-200/90"> Expert in React JS, HTML, CSS, and version control skills. </span> <span class="text-red-200/95"> I'm Venezuelan. </span> <span class="opacity-80"> I'm ready to start creating high-impact products.💥</span> </h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "Socialref", $$Socialref, { "href": "mailto:criptamas@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$MailIcon, { "class": "size-4 md:size-6" })} Contact
` })} ${renderComponent($$result3, "Socialref", $$Socialref, { "href": "https://www.linkedin.com/in/criptamas/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$LinkedinIcon, { "class": "size-4 md:size-6" })} LinkedIn
` })} ${renderComponent($$result3, "Socialref", $$Socialref, { "download": "frontend-juan-rojas.pdf", "href": "/files/mi-hoja-de-vida.pdf" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CvIcon", $$CvIcon, { "class": "size-4 md:size-6" })} Resume
` })} </nav> ` })} <!-- PORTFOLIO --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$CodeIcon, {})}
Portfolio </h2>  <div class="flex flex-col gap-y-16 "> ${EDUCATION.map(({ image, title, description, a, verMas }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Primer Proyecto estudiando programacion" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> </div> ${verMas && renderTemplate`${renderComponent($$result3, "Sabermas", $$Sabermas, { "href": a }, { "default": ($$result4) => renderTemplate`
More ${""}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> ` })}`} </div> </article>`)} </div> ` })} <!-- PROJECTS --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate`  <div class="flex flex-col gap-y-16 "> ${PROJECTS.map(({ image, title, description, tags, link, github, a }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Primer Proyecto estudiando programacion" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result3, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result3, "LinkButton", $$Linkbutton, { "href": github }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$GithubIcon, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result3, "LinkButton", $$Linkbutton, { "href": link }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Link", $$GithubIcon, { "class": "size-4" })}
Preview
` })}`} </footer> </div> ${renderComponent($$result3, "Sabermas", $$Sabermas, { "href": a }, { "default": ($$result4) => renderTemplate`
Ver mas PROJECTS${""}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> ` })} </div> </article>`)} </div> ` })} <!--SOBRE MI --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "Perfilyo", $$Perfilyo, { "class": "size-8" })}
About me
</h2> <article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p> <strong>I started studying programming for the first time back in 2022.</strong> </p> <p>
My experience ranges from collaborative projects to personal ones, as practice. <strong>For example, I’ve been part of the No-Country team on two occasions. </strong> And I participated in a job interview for a Junior Frontend Developer position.
</p> <p>
That’s why I consider myself a Junior Trainee <strong> with solid knowledge of <em class="italic"> JavaScript, ReactJS, HTML, CSS, and Git - GitHub </em></strong>.  I’m ready to start building high-impact products💥
</p> </div> ${renderComponent($$result3, "ImgSobreMi", $$ImgSobreMi, {})} </article> ` })} </main> ` })}`;
}, "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/abcdr/OneDrive/Escritorio/Dev/Portfolio/repo-juan-rojas/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
