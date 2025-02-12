import { FaSquareEnvelope } from "react-icons/fa6";

function GMail() {
  return (
    <button className="absolute top-32 right-6">
      <a
        href="mailto:lewis.mcguire92@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareEnvelope
          size={window.innerWidth < 640 ? 35 : 45}
          className="hover:text-gray-500"
        />
      </a>
    </button>
  );
}

export default GMail;
