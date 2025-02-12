import { FaLinkedin } from "react-icons/fa";
function LinkedIn() {
  return (
    <button className="absolute top-20 right-6">
      <a
        href="https://www.linkedin.com/in/lewis-mcguire-51a4a1327/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={window.innerWidth < 640 ? 35 : 45}
          className="hover:text-gray-500"
        />
      </a>
    </button>
  );
}

export default LinkedIn;
