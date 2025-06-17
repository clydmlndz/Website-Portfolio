function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-white text-lg font-semibold hover:text-blue-400 transition"
        >
          Anthony Clyde P. Melendez
        </a>
        <ul className="flex gap-6 text-gray-300 text-sm">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
