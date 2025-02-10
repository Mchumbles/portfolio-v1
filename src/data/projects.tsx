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
    title: "Artist Portfolio",
    image: "/images/Artist-portfolio-img.png",
    stack: [
      SiCss3,
      SiHtml5,
      SiJavascript,
      SiReact,
      SiTailwindcss,
      SiVite,
      SiNetlify,
      SiNodedotjs,
    ],
    link: "https://github.com/Mchumbles/giorgias-website",
  },
];

export default projects;
