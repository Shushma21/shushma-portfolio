import { ChevronRight, Code, ArrowUpCircle } from 'lucide-react';
import profilePic from './assets/profile.jpeg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shushma from './assets/shushma_CV.pdf';

export default function Portfolio() {
  const [showScroll, setShowScroll] = useState(false);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React and Tailwind CSS.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript','AOS','React Scroll'],
      link: 'https://shushma21.github.io/shushma-portfolio',
      github: "https://github.com/Shushma21/shushma-portfolio",
      image: 'https://a.storyblok.com/f/99519/1100x619/a6d10b1a52/project-portfolio-management-blog.png/m/2160x1216/filters:format(png)',
    },
    {
      title: 'Task Manager',
      description: 'A simple task management app with drag-and-drop features.',
      techStack: ['React', 'Firebase', 'CSS'],
      link: 'https://shushma21.github.io/Task-Management/',  
      github: "https://github.com/Shushma21/Task-Management", 
      image: 'https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525',
    },
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce website with user authentication and a shopping cart.',
      techStack: ['React', 'Node.js', 'MongoDB', 'CSS'],
      link: '', 
      github: "https://github.com/Shushma21/souled-skull",
      image: 'https://media.licdn.com/dms/image/v2/C4D12AQHqcEd3IXlhLQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1526236763388?e=2147483647&v=beta&t=zRTovIAbnLVS-dTkd9ysAprUybEVaY-71RmJvaDemeI',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, disable: 'mobile', once: true, reduceMotion: true });
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: true });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-10">
      {/* Header */}
      <header className="col-span-10 p-4 border-b border-[#1ABC9C]/30 flex items-center justify-between sticky top-0 z-50 bg-[#121212]">
        <h1 className="text-3xl flex items-center text-[#1ABC9C]">
          <Code className="mr-2 animate-pulse" />
          Shushma N
        </h1>
        <nav className="flex gap-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button
                className="p-3 rounded-lg text-lg font-semibold hover:bg-[#1ABC9C]/90 text-white hover:scale-105 transform transition-all"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </Link> 
          ))}
        </nav>
      </header>

      {/* Left side with content */}
      <div
        id="home"
        className="col-span-10 lg:col-span-7 flex flex-col items-center justify-center bg-[#121212] p-6 h-[70vh]"
      >
        <div className="text-center">
          <p className="text-xl text-white mt-6">Hi There! I'm</p>
          <p className="text-3xl mt-3 text-[#1ABC9C] flex items-center justify-center">
            <ChevronRight className="mr-3 animate-pulse" />
            Software Engineer
          </p>
          <p className="text-xl mt-3 text-white leading-relaxed">
            On a mission to turn "it works on my machine" into "it works everywhere!"
          </p>
          <a
            href={shushma}
            download="Shushma_N_CV.pdf"
            className="mt-6 inline-block px-6 py-3 border border-[#1ABC9C] text-white rounded-lg hover:bg-[#1ABC9C] hover:text-[#121212] transition-all"
            title="Download my CV"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side with background image */}
      <div
        className="col-span-10 lg:col-span-3 w-full h-[70vh] bg-cover bg-center rounded-none transform transition-transform hover:scale-110"
        style={{ backgroundImage: `url(${profilePic})`,    backgroundAttachment: 'fixed',  // Parallax effect
      }}
        
      ></div>

      {/* About Section */}
      <div id="about" className="col-span-10 p-6 bg-[#1A1A2E] text-[#E0E0E0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#1ABC9C] mb-6 text-center font-semibold">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - About Me */}
            <div
              className="bg-[#121212] p-6 rounded-lg shadow-xl"
              data-aos="flip-left"
            >
              <h3 className="text-3xl text-[#1ABC9C] mb-4">Hi, I'm Shushma N</h3>
              <p className="text-lg mb-4">
              Software engineer with 1 year of back-end development experience, specializing in API creation, database management, and web page development. Currently expanding into full-stack development with a focus on JavaScript and React. Passionate about building scalable solutions and continuously improving technical skills.              </p>
              <p className="text-lg mb-4">
                I enjoy solving complex problems and learning new technologies. I believe in creating seamless, intuitive experiences for users while writing clean, maintainable code.
              </p>
              <p className="text-lg mb-4">
                When I'm not coding, you'll find me exploring open-source projects or improving my skills through new challenges.
              </p>
              {/* Contact Links */}
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="https://github.com/shushma21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1ABC9C] hover:text-[#16A085] transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shushma21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1ABC9C] hover:text-[#16A085] transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:shushma.09072001@gmail.com"
                  className="text-[#1ABC9C] hover:text-[#16A085] transition duration-300"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Right side - Skills */}
            <div
              className="bg-[#121212] p-6 rounded-lg shadow-xl"
              data-aos="flip-right"
            >
              <h3 className="text-3xl text-[#1ABC9C] mb-4">Skills</h3>
              <div className="space-y-6">
                {[
                  { skill: 'PHP', level: 90 },
                  { skill: 'MYSQL', level: 90},
                  { skill: 'Git', level: 90 },
                  { skill: 'HTML,CSS,JavaScript', level: 85 },
                  { skill: 'Node.js', level: 70 },
                  { skill: 'MongoDB', level: 70 },
                  { skill: 'Tailwind CSS', level: 60 },
                  { skill: 'React', level: 60 },
                ].map(({ skill, level }, index) => (
                  <div key={index}>
                    <div className="text-lg text-white mb-2">{skill}</div>
                    <div className="relative pt-1">
                      <div className="flex mb-2">
                        <div className="w-full bg-gray-300 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full bg-[#1ABC9C]`}
                            style={{
                              width: `${level}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="col-span-10 p-6 bg-gradient-to-b from-[#1A1A2E] to-[#121212] text-[#E0E0E0]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#1ABC9C] mb-6 text-center font-semibold">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative p-6 bg-[#121212] rounded-lg shadow-lg group hover:scale-105 transition-all transform perspective-1000"
                data-aos="flip-left"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-110 transition-all transform"
                  />
                )}
                <h3 className="text-2xl text-[#1ABC9C] mb-3 font-bold">
                  {project.title}
                </h3>
                <p className="text-lg mb-3">{project.description}</p>
                <p className="mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-[#121212]/70 rounded-lg">
                  <div className="flex gap-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-[#1ABC9C] text-[#1ABC9C] rounded-lg hover:bg-[#1ABC9C] hover:text-white transition-all"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="px-6 py-3 border border-[#1ABC9C] text-[#1ABC9C] rounded-lg">
                        Live Demo (Coming Soon)
                      </span>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-[#1ABC9C] text-[#1ABC9C] rounded-lg hover:bg-[#1ABC9C] hover:text-white transition-all"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="px-6 py-3 border border-[#1ABC9C] text-[#1ABC9C] rounded-lg">
                        GitHub (Coming Soon)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="col-span-10 p-6 bg-[#121212] text-[#E0E0E0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#1ABC9C] mb-6 text-center font-semibold">
            Contact
          </h2>
          <div className="text-center">
            <p className="text-xl mb-4">
              Feel free to reach out to me for collaborations or any inquiries!
            </p>
            <p className="text-lg">
              Email: <a href="mailto:shushma21@example.com" className="text-[#1ABC9C]">shushma.09072001@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <div
          onClick={handleScrollToTop}
          className="fixed bottom-10 right-10 cursor-pointer p-4 bg-[#1ABC9C] text-white rounded-full shadow-lg hover:bg-[#16A085] transition-all transform hover:scale-105"
        >
          <ArrowUpCircle size={30} />
        </div>
      )}
    </div>
  );
}
