import { useEffect, useState } from "react";

function App() {
  const [scheme, setScheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setScheme("dark");
    } else {
      setScheme("light");
    }
  }, []);

  const handleSchemeSwitch = () => {
    setScheme(scheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [scheme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );

  useEffect(() => {});
  return (
    <body>
      <button
        type="button"
        onClick={handleSchemeSwitch}
        className="absolute p-1 z-10 right-16 top-5 mr-4 bg-violet-300 dark:bg-cyan-600 text-lg rounded-md hover:bg-violet-400"
      >
        {scheme === "dark" ? sun : moon}
      </button>
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
    </body>
  );
}

export default App;
