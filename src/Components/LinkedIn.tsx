import { FaLinkedin } from "react-icons/fa";
function LinkedIn() {
  return (
    <div className="absolute top-24 right-8">
      <a
        href="https://www.linkedin.com/in/lewis-mcguire-51a4a1327/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={45} className="hover:text-gray-500" />
      </a>
    </div>
  );
}

export default LinkedIn;
