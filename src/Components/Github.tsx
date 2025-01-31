import { FaGithub } from "react-icons/fa";

function GitHub() {
  return (
    <div className="absolute top-11 right-8">
      <a
        href="https://github.com/Mchumbles"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-gray-300 transition-colors duration-300 relative"
      >
        <FaGithub size={45} className="hover:text-gray-500" />
      </a>
    </div>
  );
}

export default GitHub;
