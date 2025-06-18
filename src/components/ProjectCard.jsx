import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCard({ title, description, tech, highlights, github, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition relative z-10">
        {images && images.length > 0 && (
          <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg border border-gray-800">
            <Slider {...sliderSettings}>
              {images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`${title} Screenshot ${idx + 1}`}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() => {
                      setIsOpen(true);
                      setSelectedImageIndex(idx);
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  src={images[selectedImageIndex]}
                  alt={`Expanded ${selectedImageIndex}`}
                  className="w-full max-h-[90vh] object-contain rounded-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <button
                onClick={() =>
                  setSelectedImageIndex(
                    (selectedImageIndex - 1 + images.length) % images.length
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/60 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition"
              >
                ❮
              </button>

              <button
                onClick={() =>
                  setSelectedImageIndex(
                    (selectedImageIndex + 1) % images.length
                  )
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/60 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition"
              >
                ❯
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;
