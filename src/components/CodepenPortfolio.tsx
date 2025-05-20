import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import LoadingPNG from "./assets/Loading_Screenshot.png";
import CarouselPNG from "./assets/Carousel_Screenshot.png";
import ParticlesPNG from "./assets/Particles_Screenshot.png";
import { Codepen } from "lucide-react";

interface CodepenItem {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

const CodepenPortfolio = () => {
  const { colorMode } = useTheme();
  const [pens, setPens] = useState<CodepenItem[]>([
    {
      title: "Particles Background Animation",
      url: "https://codepen.io/angeshpc91/pen/KwKrdYQ",
      thumbnail: ParticlesPNG,
      description:
        "Interactive particle animation with hover effects using Particles.js",
    },
    {
      title: "Carousel in Vanila JS",
      url: "https://codepen.io/angeshpc91/pen/WNgbKQJ",
      thumbnail: CarouselPNG,
      description: "Smooth carousel animation with vanila JS",
    },
    {
      title: "Loading Animation",
      url: "https://codepen.io/angeshpc91/pen/gOpxyva",
      thumbnail: LoadingPNG,
      description: "Infinite Smooth loading animation using CSS transitions",
    },
  ]);

  return (
    <section
      id="codepen"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CodePen <span className="font-light">Portfolio</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 dark:text-gray-300 text-lg">
            Check out some of my interactive demos and UI experiments on CodePen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pens.map((pen, index) => (
            <a
              href={pen.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={pen.thumbnail}
                      alt={pen.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      View on CodePen
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pen.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {pen.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://codepen.io/angeshpc91"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-colors"
          >
            <span>View all my CodePens</span>
            <Codepen />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodepenPortfolio;
