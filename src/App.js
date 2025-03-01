import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Card = ({ children }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '20px auto' }}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div style={{ padding: '10px' }}>
    {children}
  </div>
);


const Button = ({ children }) => (
  <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
    {children}
  </button>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="flex justify-between items-center p-4 bg-white shadow-lg rounded-2xl">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/projects" className="mx-2">Projects</Link>
            <Link to="/skills" className="mx-2">Skills</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Welcome to My Portfolio!</h2>
    <p>Explore my projects, skills, and ways to get in touch.</p>
  </div>
);

const Projects = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Projects</h2>
    <Card>
      <CardContent>
        <h3 className="font-bold">Gemstone Gallery</h3>
        <p>A dynamic gallery with filtering and search features.</p>
      </CardContent>
    </Card>
    <Card className="mt-4">
      <CardContent>
        <h3 className="font-bold">Souled Skull</h3>
        <p>E-commerce platform with modern UI/UX and API integrations.</p>
      </CardContent>
    </Card>
  </div>
);

const Skills = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Skills</h2>
    <ul>
      <li>PHP, JavaScript, Node.js</li>
      <li>React, Express.js</li>
      <li>MySQL, MongoDB</li>
      <li>Git, REST APIs, Unit Testing</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Contact Me</h2>
    <Button asChild>
      <a href="mailto:shushma972001@gmail.com">Email Me</a>
    </Button>
  </div>
);

export default App;

