import { lazy } from "react";
import LazyLoader from "./Components/LazyLoader";
import DarkLightMode from "./Components/DarkLightMode";
import GitHub from "./Components/Github";
import GMail from "./Components/Gmail";
import LinkedIn from "./Components/LinkedIn";
import Skills from "./Components/Skills";
const ProjectDisplay = lazy(() => import("./Components/ProjectDisplay"));

function App() {
  return (
    <div>
      <header className="my-5">
        <h1 className="text-center text-4xl p-4">Lewis Mcguire</h1>
        <h2 className="text-center text-2xl p-2 mb-10">
          Junior Software Engineer <br></br> & Web Developer
        </h2>
        <p className="text-center text-lg px-4 md:w-3/4 lg:w-1/2 mx-auto mb-10">
          Passionate full-stack developer committed to building efficient,
          scalable web applications and writing clean, maintainable code. Always
          eager to learn new technologies to enhance my skills and deliver
          better solutions.
        </p>
        <div className="flex flex-col items-center">
          <button className="bg-cyan-600 shadow-lg shadow-cyan-600/50 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded">
            <a href="/Lewis-Mcguire-CV-2025.pdf" target="_blank">
              Curriculum Vitae
            </a>
          </button>
        </div>
      </header>
      <DarkLightMode />
      <LinkedIn />
      <GMail />
      <GitHub />
      <Skills />
      <div className="my-40"></div>
      <LazyLoader>
        <ProjectDisplay />
      </LazyLoader>
    </div>
  );
}

export default App;
