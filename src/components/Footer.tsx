import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Angesh Chettiar</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Principal Lead with 11+ years of experience in JavaScript,
              TypeScript, React and modern web technologies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:angeshpc91@gmail.com"
                className="text-white hover:text-brand-400 transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
              <a
                href="tel:+918080381770"
                className="text-white hover:text-brand-400 transition-colors"
                aria-label="Phone"
              >
                <Phone />
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-start md:justify-end gap-x-12 gap-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">More</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#skills"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Angesh Chettiar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
