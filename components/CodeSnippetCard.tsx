'use client';

import { monospace } from "@/config/fonts";
import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typewriter from 'typewriter-effect';


export default function CodeSnippetCard() {
    const code = `
class Life:
    def __init__(self, name):
        self.name = name
        self.energy = 100

    def code(self):
        if self.energy >= 30:
            self.energy -= 30
            print(f"{self.name} is coding. Energy: {self.energy}")
        else:
            print(f"{self.name} is too tired to code. Needs to eat or sleep.")

    def sleep(self):
        self.energy = min(self.energy + 40, 100)
        print(f"{self.name} is sleeping. Energy: {self.energy}")`;

    const [displayedCode, setDisplayedCode] = useState('');
    const typingSpeed = 50; // Adjust typing speed as desired
  
    useEffect(() => {
      let currentIndex = 0;
      let timeoutId: NodeJS.Timeout;
  
      const typeCode = () => {
        if (currentIndex < code.length) {
          setDisplayedCode((prev) => prev + code.at(currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeCode, typingSpeed);
        }
      };
  
      // Clear displayedCode each time code changes
      setDisplayedCode('');
      typeCode();

      // Cleanup function to clear timeout
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Card className={`${monospace.className} max-w-fit bg-slate-100 dark:bg-gray-800 relative`}>
            <div className="flex bg-gray-200 dark:bg-gray-900 p-3 pb-0">
                <h4 className="bg-slate-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-t-lg">
                    human_life.py
                </h4>
            </div>
            <Card className="flex flex-row rounded-none bg-slate-100 dark:bg-gray-800 border-none">
                <div className="flex">
                    <pre className="text-gray-800 dark:text-gray-300 p-4">
                        {code.split('\n').map((line, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </pre>
                </div>
                <div className="flex">
                    <SyntaxHighlighter
                        className="bg-gray-800"
                        language="python"
                        style={atomOneDark}
                        customStyle={{ backgroundColor: 'transparent' }}
                        lineNumberStyle={{ color: '#999', backgroundColor: '#2d2d2d' }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </Card>
        </Card>
    );
}