import { useState, useEffect } from "react";
import { Code, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactTyped } from 'react-typed';
import profilePic from "./assets/profile.jpeg";
import DetailsSection from './components/DetailsSection';
import ContactForm from "./components/ContactMe";

export default function Portfolio() {
  const [step, setStep] = useState(1);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-green-300 font-mono">
      <header className="p-4 border-b border-green-500 flex items-center justify-between">
        {step >= 1 && (
          <h1 className="text-2xl flex items-center">
            <Code className="mr-2" />
            <ReactTyped
              strings={["Shushma's Portfolio"]}
              typeSpeed={20}
              showCursor={false}
              onComplete={() => setStep(2)}
            />
          </h1>
        )}

        {step >= 2 && (
          <nav className="flex gap-4">
            {['home', 'about', 'projects', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5 }}
                className="p-2 rounded-lg border-2 border-green-500 hover:bg-green-500 hover:text-black"
                onClick={() => section === 'contact' && setShowContactForm(true)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-grow p-6">
        {step >= 3 && (
          <motion.img
            src={profilePic}
            alt="Shushma N"
            className="w-32 h-32 rounded-full border-4 border-green-500 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setStep(4)}
          />
        )}

        {step >= 4 && (
          <div className="text-center mt-6">
            <p className="text-2xl">
              <ReactTyped
                strings={["Hi! I'm Shushma N"]}
                typeSpeed={20}
                showCursor={false}
                onComplete={() => setStep(5)}
              />
            </p>
          </div>
        )}

        {step >= 5 && (
          <div className="text-center mt-3">
            <p className="flex items-center justify-center text-lg">
              <ChevronRight className="mr-2" />
              <ReactTyped
                strings={["Software Engineer"]}
                typeSpeed={20}
                showCursor={false}
                onComplete={() => setStep(6)}
              />
            </p>
          </div>
        )}

        {step >= 6 && (
          <div className="grid grid-cols-2 gap-6 p-6">
            <div className="border-2 border-green-500 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-3">
                <ReactTyped
                  strings={["Tech Stack Used"]}
                  typeSpeed={20}
                  showCursor={false}
                  onComplete={() => setStep(7)}
                />
              </h2>
              <ul className="list-disc list-inside">
                {["⚛️ React", "✨ Tailwind CSS", "📦 Vite (for fast development)", "🎯 Framer Motion (for animations)", "✍️ React Typed (for typing effects)", "🌿 Lucide Icons"].map((tech, index) => (
                  step >= 7 + index && (
                    <li key={tech}>
                      <ReactTyped
                        strings={[tech]}
                        typeSpeed={20}
                        showCursor={false}
                        onComplete={() => setStep(8 + index)}
                      />
                    </li>
                  )
                ))}
              </ul>
            </div>
            {step >= 13 && <DetailsSection />}
          </div>
        )}

        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </main>

      <footer className="p-4 border-t border-green-500 text-center">
        © 2025 Shushma N | Built with React
      </footer>
    </div>
  );
}
