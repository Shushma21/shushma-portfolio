// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import {motion} from 'framer-motion';
// import { Helmet } from 'react-helmet';


// const Card = ({ children }) => (
//   <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '20px auto' }}>
//     {children}
//   </div>
// );

// const CardContent = ({ children }) => (
//   <div style={{ padding: '10px' }}>
//     {children}
//   </div>
// );


// const Button = ({ children ,onclick}) => (
//   <button onclick={onclick} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//     {children}
//   </button>
// );

// const App = () => {
//   return (
//     <>
//     <Helmet>
//       <title>Shushma N-Portfolio</title>
//       <meta name='description' content='Shushma personal portfolio'></meta>
//     </Helmet>
//     <Router basename='/shushma-portfolio'>

//       <div className="min-h-screen flex flex-col bg-gray-100 p-4">
//         <header className="flex justify-between items-center p-4 bg-white shadow-lg rounded-2xl">
//           <h1 className="text-2xl font-bold">My Portfolio</h1>
//           <nav>
//             {/* <Link to="/" className="mx-2">Home</Link> */}
//             <NavLink to="/" className={({isActive}) => isActive ? 'mx-2 text-blue-500 font-bold' : 'mx-2'}>Home</NavLink>
//             <NavLink to="/projects" className={({isActive}) => isActive ? 'mx-2 text-blue-500 font-bold' : 'mx-2'}>Projects</NavLink>
//             <NavLink to="/skills" className={({isActive}) => isActive ? 'mx-2 text-blue-500 font-bold' : 'mx-2'}>Skills</NavLink>
//             <NavLink to="/contact" className={({isActive}) => isActive ? 'mx-2 text-blue-500 font-bold':'mx-2'}>Contact</NavLink>
//           </nav>
//         </header>

//         <div className='flex-grow p-4'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path='*' element={<NotFound/>}/>
//         </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//     </>
//   );
// };

// const NotFound =() => (
//   <div className='p-4'>
//     <h2 className='text-xl font-semibold'>404 Not Found</h2>
//     <p>The page you are looking  for doesn'e exist.</p>
//   </div>
// );

// const Footer=()=>(
//   <footer className='text-left p-2 mt-6'>
//     <p>© 2025 Shushma N | Built with React</p>
//   </footer>
// )
// const Home = () => (
//   <motion.div className='relative h-screen w-full flex items-center justify -center bg-cover bg-center'
//               style={{backgroundImage:"url('https://i.pinimg.com/originals/19/9f/d2/199fd29184c6cff24e3445f849af463e.gif')"}} 
//               initial={{opacity:0}} animate={{opacity:1}} transition={{opacity:0.5}}>
//     <h2 className="text-xl font-semibold">Hi I'm Shushma N</h2>
//     <br></br>
//     <p>Software Engineer | Coding Enthusiast</p>
//     </motion.div>
// );

// const Projects = () => (
//   <motion.div className='p-4' initial={{opacity:0}} animate={{opacity:1}} transition={{opacity:0.5}} >
//     <h2 className="text-xl font-semibold">Projects</h2>
//     <Card>
//       <CardContent>
//         <h3 className="font-bold">Gemstone Gallery</h3>
//         <p>A dynamic gallery with filtering and search features.</p>
//         <Button>
//           <a href="https://shushma21.github.io/shushma-portfolio" target='_blank' rel='noopener norefferer' style={{color:'#fff',textDecoration:'none'}}>
//           View Project
//           </a>
//         </Button>
//       </CardContent>
//     </Card>
//     <Card className="mt-4">
//       <CardContent>
//         <h3 className="font-bold">Souled Skull</h3>
//         <p>E-commerce platform with modern UI/UX and API integrations.</p>
//         <Button>
//           <a href="https://shushma21.github.io/shushma-portfolio" target='_blank' rel='noopenner norefferer' style={{color:'#fff',textDecoration:'none'}}>View Project</a>
//         </Button>
//       </CardContent>
//     </Card>
//     </motion.div>
// );

// const Skills = () => (
//     <motion.div className='p-4' initial={{opacity:0}} animate={{opacity:1}} transition={{opacity:0.5}}>
//     <h2 className="text-xl font-semibold">Skills</h2>
//     <ul>
//       <li>PHP, JavaScript, Node.js</li>
//       <li>React, Express.js</li>
//       <li>MySQL, MongoDB</li>
//       <li>Git, REST APIs, Unit Testing</li>
//     </ul>
//     </motion.div>
// );

// const Contact = () => (
//   <motion.div className='p-4' initial={{opacity:0}} animate={{opacity:1}} transition={{opacity:0.5}}>
//   <h2 className="text-xl font-semibold">Contact Me</h2>
//     <br></br>
//     <Button>
//       <a href="mailto:shushma972001@gmail.com" style={{color:'#fff',textDecoration:'none'}}>Email Me</a>
//     </Button>
//     </motion.div>
// );

// export default App;



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

