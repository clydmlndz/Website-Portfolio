// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I’m a recent graduate of <strong>West Visayas State University</strong>{" "}
        with a Bachelor of Science in Information Systems, majoring in Business
        Application Development. I specialize in building web-based applications
        and have hands-on experience with technologies like React.js, Vue.js,
        Python, HTML, CSS, and JavaScript.
        <br />
        <br />
        I'm passionate about solving real-world problems through thoughtful and
        practical software, and I'm currently seeking my first opportunity to
        grow as a developer, contribute to a team, and build meaningful
        solutions.
      </p>
    </motion.section>
  );
}

export default AboutMe;
