import { FaSquareEnvelope } from "react-icons/fa6";

function GMail() {
  return (
    <div className="absolute top-36 right-8">
      <a
        href="mailto:lewis.mcguire92@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareEnvelope size={45} className="hover:text-gray-500" />
      </a>
    </div>
  );
}

export default GMail;
