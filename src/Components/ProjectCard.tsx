import { IconType } from "react-icons";

interface ProjectItemProps {
  title: string;
  image: string;
  stack: IconType[];
  link: string;
}

function ProjectCard({ title, image, stack, link }: ProjectItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <img
          src={image}
          alt="project image"
          className="w-full h-56 xl:h-80 md:h-60 sm:h-40 object-cover rounded-md"
        />
        <div className="flex flex-wrap gap-2 mb-4 mt-4">
          {stack.map((Icon, index) => (
            <Icon key={index} className="text-2xl text-cyan-500" />
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
