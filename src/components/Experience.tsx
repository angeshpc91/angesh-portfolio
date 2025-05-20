import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Unico Connect",
      location: "Mumbai",
      position: "Principal Lead",
      period: "February 2025 — Current",
      responsibilities: [
        "Led a high-performing development team of 12 developers using JavaScript, React, Node, and CSS3 to deliver scalable, maintainable applications that met client specifications and deadlines.",
        "Managed 7 cross-functional projects by leveraging frameworks like Next.js and tools like Vite for architecture planning, resource allocation, and timeline estimation to ensure on-time delivery and alignment with business goals.",
        "Revamped the whole project implementing design system and custom components and delivered it to client's satisfaction within record time.",
        "Restructured development workflows by applying industry-standard best practices and coding guidelines such as Component-Driven Development (CDD) and Test-Driven Development (TDD) to improve code quality, maintainability, and team collaboration.",
        "Designed and implemented custom Vite boilerplates tailored to unique projects and requirements to streamline build processes, reduce setup time, and enhance development efficiency.",
      ],
    },
    {
      company: "Fluent Health",
      location: "Mumbai",
      position: "Senior Software Engineer",
      period: "June 2024 — February 2025",
      responsibilities: [
        "Implemented FHIR standards and GraphQL in healthcare applications using React and Next.js to ensure interoperability, data consistency, and modern API integration.",
        "Developed reusable UI components and led a team of 5 developers with a focus on analytics features and maintaining architectural integrity to enhance code reusability, performance, and project scalability.",
      ],
    },
    {
      company: "Freecharge (Subsidiary of AXIS Bank)",
      location: "Mumbai",
      position: "Frontend Lead",
      period: "May 2020 — June 2024",
      responsibilities: [
        "Championed efficient development practices by creating reusable UI components for banking products such as account creation, loans, and mutual funds to enhance user experience and reduce front-end redundancy.",
        "Implemented State Machine Architecture which eliminated the need to develop separate applications for multiple workflows, which reduced the development time and efforts exponentially resulting in faster delivery and feature deployment.",
        "Conducted comprehensive requirement analysis and led a small development team through task delegation and code reviews to ensure timely delivery, code quality, and alignment with business goals.",
        "Utilized tools like Webpack, Parcel, Vite, and Next.js to build custom boilerplates and streamline front-end development workflows resulting in improved efficiency and reduced setup time.",
        "Developed backend functionality and APIs using NodeJS to support front-end features and enable seamless data interaction.",
      ],
    },
    {
      company: "Tata Digital",
      location: "Mumbai",
      position: "Frontend Lead",
      period: "November 2019 — February 2020",
      responsibilities: [
        "Crafted user-friendly and scalable web applications by prioritizing efficiency and brand consistency through the use of reusable components to enhance maintainability and ensure a cohesive user experience across platforms.",
        "Employed agile project management practices including requirement analysis, team leadership, task delegation, and code review to drive project success and maintain high development standards.",
      ],
    },
    {
      company: "Accenture",
      location: "Mumbai",
      position: "Senior Software Analyst",
      period: "March 2018 — November 2019",
      responsibilities: [
        "Translated UI/UX designs into functional web applications by architecting scalable projects and mentoring teams on JavaScript best practices to ensure high-performance, maintainable codebases.",
        "Excelled in client communication and requirement gathering to align development efforts with business goals resulting in efficient, performance-driven solutions.",
      ],
    },
    {
      company: "Xoriant Solutions Pvt Ltd",
      location: "Mumbai",
      position: "Software Engineer",
      period: "November 2015 — November 2016",
      responsibilities: [
        "Engaged in web design and development by implementing unit testing practices to ensure code functionality, reliability, and maintainability.",
      ],
    },
    {
      company: "TCS",
      location: "Chennai",
      position: "Software Engineer",
      period: "July 2013 — October 2015",
      responsibilities: [
        "Designed, developed, and deployed web applications while managing servers using manual configurations and custom scripts to ensure reliable deployment and infrastructure stability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work <span className="font-light">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 text-lg">
            My professional journey spans over 11 years across leading companies
            in fintech, healthtech, and digital platforms.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line   */}
          <div className="hidden md:block absolute top-0 bottom-0  bg-gray-200 left-1/2 w-0.5 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              /* TODO: some logic ${
                 ${
                  index % 2 === 0
                    ? "md:ml-1/2"
                    : "md:mr-1/2 md:flex md:justify-end"
                }
              } */
              <div key={index} className={`relative`}>
                {/* Timeline dot  */}
                <div className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-brand-600 border-4 border-white left-1/2  transform -translate-x-1/2 "></div>

                {/* TODO: some logic  ${
                
                  index % 2 === 0
                    ? "md:ml-1/2"
                    : "md:mr-1/2 md:flex md:justify-end"
                } 
                 ${
                    index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                  }*/}
                <Card
                  className={`border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow md:w-[calc(100%-20px)] `}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-brand-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <p className="text-gray-600">
                            {exp.company}, {exp.location}
                          </p>
                        </div>
                      </div>
                      <span className="hidden md:block text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <span className="block md:hidden text-sm font-medium text-gray-500 mb-4">
                      {exp.period}
                    </span>

                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
