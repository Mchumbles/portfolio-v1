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
} from "react-icons/si";

import { IconType } from "react-icons";

interface Technology {
  icon: IconType;
  title: string;
}

const languages: Technology[] = [
  { icon: SiJavascript, title: "JavaScript" },
  { icon: SiPhp, title: "PHP" },
  { icon: SiHtml5, title: "HTML5" },
  { icon: SiCss3, title: "CSS3" },
];

const skills: Technology[] = [
  { icon: SiJest, title: "Jest" },
  { icon: SiTailwindcss, title: "Tailwind CSS" },
  { icon: SiVite, title: "Vite" },
  { icon: SiAxios, title: "Axios" },
  { icon: SiSupabase, title: "Supabase" },
  { icon: SiNetlify, title: "Netlify" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiReact, title: "React" },
  { icon: SiReactbootstrap, title: "React Bootstrap" },
  { icon: SiNodedotjs, title: "Node.js" },
  { icon: SiDotenv, title: "Dotenv" },
  { icon: SiComposer, title: "Composer" },
  { icon: SiExpressvpn, title: "ExpressVPN" },
];

export { languages, skills };
