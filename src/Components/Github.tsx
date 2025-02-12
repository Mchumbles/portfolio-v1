import { FaGithub } from "react-icons/fa";

function GitHub() {
  return (
    <button className="absolute top-8 right-6 ">
      <a
        href="https://github.com/Mchumbles"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-gray-300 transition-colors duration-300 relative"
      >
        <FaGithub
          size={window.innerWidth < 640 ? 35 : 45}
          className="hover:text-gray-500"
        />
      </a>
    </button>
  );
}

export default GitHub;
