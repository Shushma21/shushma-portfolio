import { useState } from "react";
import { ReactTyped } from "react-typed";

export default function DetailsSection() {
  const [step, setStep] = useState(14);

  return (
    <div className="border-2 border-green-500 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-3">
        <ReactTyped 
          strings={["Details"]} 
          typeSpeed={20}  
          showCursor={false} 
          onComplete={() => setStep(15)} 
        />
      </h2>

      <ul className="space-y-3">
        {step >= 15 && (
          <li className="flex items-center">
            <ReactTyped 
              strings={["🌿 GitHub"]} 
              typeSpeed={20}  
              showCursor={false} 
              onComplete={() => setStep(16)} 
            />
            {step >= 16 && (
              <a 
                href="https://github.com/Shushma21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline ml-2"
              >
                (Visit my GitHub)
              </a>
            )}
          </li>
        )}

        {step >= 16 && (
          <li className="flex items-center">
            <ReactTyped 
              strings={["💼 LinkedIn"]} 
              typeSpeed={20}  
              showCursor={false} 
              onComplete={() => setStep(17)} 
            />
            {step >= 17 && (
              <a 
                href="https://www.linkedin.com/in/shushma-n/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline ml-2"
              >
                (Visit my LinkedIn)
              </a>
            )}
          </li>
        )}

        {step >= 17 && (
          <li className="flex items-center">
            <ReactTyped 
              strings={["✉️ Email"]} 
              typeSpeed={20}  
              showCursor={false} 
              onComplete={() => setStep(18)} 
            />
            <a 
              href="mailto:shushma.09072001@gmail.com" 
              className="underline ml-2"
            >
              (Email Me)
            </a>
          </li>
        )}

        {step >= 18 && (
        <li className="flex items-center">
            <ReactTyped 
            strings={["📞 Phone"]} 
            typeSpeed={20}  
            showCursor={false} 
            onComplete={() => setStep(19)} // Move to step 19 after typing "Phone"
            />
            {step >= 19 && <span className="ml-2">+91 8792389001</span>}
        </li>
        )}
      </ul>
    </div>
  );
}