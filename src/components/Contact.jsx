// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
      <p className="text-gray-300 text-lg mb-6">
        Interested in working together or want to connect? You can reach me via
        email or check out my social links below.
      </p>

      <a
        href="mailto:anthonyclyde.melendez@gmail.com"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition mb-6"
      >
        Send Email
      </a>

      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/moonBSIS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/anthonyclyde-melendez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
