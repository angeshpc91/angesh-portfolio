import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. (Information Technology)",
      institution: "SIES College",
      location: "MUMBAI",
      period: "2012 — 2013",
    },
    {
      degree: "Class XII",
      institution: "ICLES' Jhunjhunwala",
      location: "VASHI, MUMBAI",
      period: "2008 — 2009",
    },
    {
      degree: "Class X",
      institution: "General Education Academy",
      location: "CHEMBUR, MUMBAI",
      period: "2006 — 2007",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 text-lg">
            My academic background has provided a solid foundation for my
            professional career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <Book className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
