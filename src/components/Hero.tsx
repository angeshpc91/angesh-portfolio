import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, Github, Codepen } from "lucide-react";
import angeshcPdf from "./assets/Angesh_Chettiar.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = angeshcPdf;
    link.download = "Angesh_Chettiar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative py-20 overflow-hidden animated-bg">
      <div className="container px-8 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-900">
              <span className="block font-semibold">
                Angesh <span className="font-light">Chettiar</span>
              </span>
              <span className="block text-brand-600 dark:text-brand-400 mt-2 font-semibold">
                Principal <span className="font-light">Lead</span>
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-700 max-w-lg">
              A proven engineering leader with 11+ years of experience in
              building robust, scalable systems and driving product success
              across fintech, healthtech, and digital platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
                onClick={() => (window.location.href = "#contact")}
              >
                <Mail size={18} />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-brand-600 text-brand-600 hover:bg-brand-50 dark:border-brand-400 dark:text-brand-400 dark:hover:bg-gray-800"
                onClick={handleDownload}
              >
                Download CV
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:angeshpc91@gmail.com"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
              <a
                href="tel:+918080381770"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="Phone"
              >
                <Phone />
              </a>
              <a
                href="https://github.com/angeshpc91"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://codepen.io/angeshpc91"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
                aria-label="CodePen"
              >
                <Codepen />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-600 dark:bg-brand-500 rounded-full opacity-10 blur-xl transform -translate-x-4 translate-y-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-brand-600 to-blue-400 dark:from-brand-500 dark:to-blue-500 rounded-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10">
                <span className="text-7xl md:text-8xl font-bold text-white">
                  AC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
