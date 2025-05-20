import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "HTML (HTML5)", "CSS (CSS3)"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Redux",
        "NodeJS",
        "Webpack",
        "Parcel",
        "Vite",
        "NextJS",
        "Material UI",
        "Bootstrap",
        "Tailwind",
        "Styled-Components",
        "CSS in JS",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "AWS",
        "Jenkins",
        "Unit Testing",
        "Micro-frontend",
        "GraphQL",
        "CI/CD",
        "Microservice",
        "Agile",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="font-light">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 text-lg">
            Through my career, I've mastered a diverse range of technologies and
            methodologies that enable me to deliver scalable, maintainable
            frontend/backend solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
