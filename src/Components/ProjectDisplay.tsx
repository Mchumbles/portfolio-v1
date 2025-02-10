import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function ProjectDisplay() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center ml-10 mr-10 mb-40 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectDisplay;
