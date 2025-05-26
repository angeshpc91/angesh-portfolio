import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="font-light">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 text-lg">
            As a Principal Engineer, I've led cross-functional teams at
            Freecharge (AXIS Bank), Tata Digital, and now Unico Connect,
            delivering high-impact solutions using React, TypeScript, Node.js,
            and modern frameworks like Next.js.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">11+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Years of Experience
              </h3>
              <p className="text-gray-600">
                Over a decade of professional experience in web development and
                leadership
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">7+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Major Projects
              </h3>
              <p className="text-gray-600">
                Led multiple cross-functional projects across fintech,
                healthtech, and digital platforms
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">12+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Members
              </h3>
              <p className="text-gray-600">
                Successfully led and mentored teams of developers in delivering
                high-quality applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
