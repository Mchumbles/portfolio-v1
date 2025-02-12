import {
  SiJest,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiSupabase,
  SiNetlify,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiReactbootstrap,
  SiCss3,
  SiHtml5,
  SiNodedotjs,
  SiPhp,
  SiDotenv,
  SiComposer,
  SiExpressvpn,
  SiTypescript,
} from "react-icons/si";

import { IconType } from "react-icons";

interface Project {
  title: string;
  image: string;
  stack: IconType[];
  link: string;
}

const projects: Project[] = [
  {
    title: "News Web Application",
    image: "/images/NC-News-img.jpeg",
    stack: [
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiReact,
      SiReactbootstrap,
      SiTailwindcss,
      SiVite,
      SiNetlify,
      SiNodedotjs,
      SiPhp,
      SiJest,
      SiAxios,
      SiSupabase,
      SiExpressvpn,
      SiDotenv,
    ],
    link: "https://lm-nc-news.netlify.app/",
  },
  // {
  //   title: "News Web Application (Back-End)",
  //   image: "",
  //   stack: [
  //     SiJavascript,
  //     SiPostgresql,
  //     SiJest,
  //     SiAxios,
  //     SiSupabase,
  //     SiVite,
  //     SiNetlify,
  //     SiNodedotjs,
  //     SiDotenv,
  //   ],
  //   link: "https://github.com/Mchumbles/be-nc-news",
  // },
  {
    title: "User Login Authentication",
    image: "images/php-code-img.png",
    stack: [SiPhp, SiHtml5, SiNodedotjs, SiDotenv, SiComposer, SiPostgresql],
    link: "https://github.com/Mchumbles/php-user-login",
  },
  {
    title: "Artist Portfolio (In progress)",
    image: "/images/Artist-portfolio-img.png",
    stack: [
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiReact,
      SiTailwindcss,
      SiVite,
      SiNetlify,
    ],
    link: "https://giorgiaciampitsolaki.com/?fbclid=IwY2xjawIW83JleHRuA2FlbQIxMAABHcaAbdxo_EO928FqKAvlmtUkjfB0es17QYsJnEcZOkasFM5PqDV3LDQlfA_aem_5MY8k3BjSdvZ23dBL-Fkew",
  },
  {
    title: "To-do list",
    image: "/images/tdlist-img.png",
    stack: [
      SiCss3,
      SiHtml5,
      SiTypescript,
      SiJavascript,
      SiReact,
      SiVite,
      SiNetlify,
    ],
    link: "https://tdlistly.netlify.app/",
  },
];

export default projects;
