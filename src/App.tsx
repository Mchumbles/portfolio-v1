import DarkLightMode from "./Components/DarkLightMode";
import GitHub from "./Components/Github";
import GMail from "./Components/Gmail";
import LinkedIn from "./Components/LinkedIn";
import ProjectDisplay from "./Components/ProjectDisplay";

function App() {
  return (
    <body>
      <header className="my-5">
        <h1 className="text-center text-3xl p-4  ">Lewis Mcguire</h1>
        <h2 className="text-center text-lg p-2">
          Junior Software Engineer & Web Developer
        </h2>
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
      <ProjectDisplay />
    </body>
  );
}

export default App;
