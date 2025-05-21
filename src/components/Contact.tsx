import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    time: new Date().toLocaleString(),
    from_website: "From: angeshc.netlify.app",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then(
        () => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for contacting me. I will get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
            subject: "",
            time: new Date().toLocaleString(),
            from_website: "From: angeshc.netlify.app",
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="font-light">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 rounded mb-8"></div>
          <p className="max-w-3xl text-center text-gray-700 text-lg">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:angeshpc91@gmail.com"
                      className="text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      angeshpc91@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <a
                      href="tel:+918080381770"
                      className="text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      +91 8080381770
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Location
                    </h3>
                    <p className="text-gray-600">Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="border-2 border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your subject"
                      required
                      className="border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                      rows={5}
                      className="border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
