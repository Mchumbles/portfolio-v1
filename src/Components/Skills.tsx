import { skills, languages } from "../data/skills";

function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-center text-4xl p-4">Skills</h2>
      <h3 className="text-center text-2xl p-4">Programming Languages</h3>
      <div className="flex flex-wrap justify-center gap-6 p-4 mb-6">
        {languages.map((lang, index) => (
          <div key={index} className="flex flex-col items-center">
            <lang.icon className="text-4xl text-violet-300" />
            <p className="mt-2 text-base">{lang.title}</p>
          </div>
        ))}
      </div>
      <h3 className="text-center text-2xl p-4">Technologies</h3>
      <div className="flex flex-wrap justify-center gap-6 p-4 mb-11">
        {skills.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <tech.icon className="text-4xl text-blue-500" />
            <p className="mt-2 text-base">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
