import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ title, description, tech, highlights, github, image }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition relative z-10">
        {image && (
          <img
            src={image}
            alt={`${title} Screenshot`}
            className="w-full rounded-lg mb-4 border border-gray-800 cursor-pointer hover:opacity-90 transition"
            onClick={() => setIsOpen(true)}
          />
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-blue-800 text-blue-100 text-xs px-2 py-1 rounded-full font-mono"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="text-sm text-gray-300 mb-4 list-disc list-inside">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={image}
              alt="Full Screenshot"
              className="max-w-full max-h-[90vh] rounded-xl shadow-lg"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;
