import { useState,useEffect } from "react";
import { Code, Home, Mail,List,User,ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function Portfolio(){
  const [activeSection,setActiveSection] = useState('home');
  const [hoverSection,setHoverSection]   = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) =>{
      if(event.key === '1') setActiveSection('home');
      if(event.key === '2') setActiveSection('about');
      if(event.key === '3') setActiveSection('projects');
      if(event.key === '4') setActiveSection('contact');
    };

    window.addEventListener('keydown',handleKeyPress);
    return () => window.removeEventListener('keydown',handleKeyPress);
  },[]);

  return(
    <div className="min-h-screen flex flex-col bg-gray-900 text-green-400 font-mono">
      <header className="p-4 border-green-500 flex justify-between items-center">
        <h1 className="text-xl flex items-center">
          <Code className = "mr-2"/>Shushma's Portfolio
        </h1>
        <nav className="flex gap-4">
          {['home','about','projects','contact'].map((section,index)=>(
            <div key={section} className="relative">
              <button 
                onClick={() => setActiveSection(section)} 
                onMouseEnter={()=>setHoverSection(section)} 
                onMouseLeave={()=>setHoverSection(null)}
                className={`p-2 rounded-lg transition-all 
                  ${activeSection === section ? 'bg-green-500 text-gray-900':'hover:bg-green-700'}`}
              >
                {section === 'home' && <Home size={20}/>}
                {section === 'about' && <User size={20}/> }
                {section === 'projects' && <List size={20}/>}
                {section === 'contact' && <Mail size={20}/>}
              </button>
              {hoverSection === section &&(
                <div className="absolute top-full mt-2 p-2 bg-green-500 text-gray-900 rounded-lg shadow-lg text-sm">
                  {section.charAt(0).toUpperCase()+section.slice(1)}
                </div>
              )}
            </div>
          ))}
          </nav>
          </header>      
          <div className="flex-grow p-4">
            <main className="p-4">
              <motion.div initial={{opacity:0}} 
                        animate={{opacity:1}} 
                        >
                {activeSection === 'home' && (
                  <div>
                    <div className="border border-green-500 p-4 rounded-lg mb-6">
                      Hi! I am 
                      <p className="text-2xl"><b>Shushma N</b></p>
                      <p className="flex items-center">
                        <ChevronRight className="mr-2" />
                        Software Engineer
                      </p> 
                      <ul className="mt-5 space-y-2">
                        <li className="flex items-center"><b className="w-40 flex justify-between">GitHub <span className="mr-2">:</span></b> <a href="https://github.com/Shushma21" target="_blank"  rel="noopener noreferrer"  className="underline">Visit my github</a></li>
                        <li className="flex items-center"><b className="w-40 flex justify-between">linkedin <span className="mr-2">:</span></b> <a href="https://www.linkedin.com/in/shushma-n/" target="_blank"  rel="noopener noreferrer"  className="underline">Visit my linkedin</a></li>
                        <li className="flex items-center"><b className="w-40 flex justify-between">Phone <span className="mr-2">:</span> </b> +91 8792389001</li>
                        <li className="flex items-center"><b className="w-40 flex justify-between">Email <span className="mr-2">:</span></b> <a href="mailto:shushma.09072001@gmail.com" className="underline">Email Me</a></li>
                      </ul>                   
                    </div>
                    <div className="border border-green-500 p-4 rounded-lg mb-6">
                      <p className="text-xl font-bold mb-2">Tech Stack Used To Create My Portfolio Website:</p>
                      <ul className="list-disc pl-5">
                        <li><b>Language:</b> JavaScript (React)</li>
                        <li><b>Libraries:</b> Lucide Icons, Framer Motion, Tailwind CSS</li>
                        <li><b>Framework:</b> React.js</li>
                      </ul>
                    </div>
                    <div className="border border-green-500 p-4 rounded-lg mb-6">
                    <p className="mt-2">To know more about me please follow the below instructions...</p>
                      <div className="justify-center mt-4">
                        <p>Press 2 to navigate to the About page</p>
                        <p>Press 3 to navigate to the Projects page</p>
                        <p>Press 4 to navigate to the Contact page</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeSection === 'about' && <div>About Me : Passionate developer with experience in Backend & Frontend technologies</div>}
                {activeSection === 'projects' && <div>Projects : A collection  of my best coding practices, showcasing  my skills and  creativity</div>}
                {activeSection === 'contact' && <div>Contact Me: Reach out to me via Email or Phone</div>}
              </motion.div>
            </main>
          </div>
    <footer className="p-4 border-t border-green-500 text-center">
    © 2025 Shushma N | Built with React
    </footer>
    </div>
  )
}

