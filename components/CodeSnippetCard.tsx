'use client';

import { monospace } from "@/config/fonts";
import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeSnippetCardProps = {
    filename: string;
    code: string;
    startLineNumber?: number;
};

export default function CodeSnippetCard({ filename, code, startLineNumber = 1 }: CodeSnippetCardProps) {
    const [displayedCode, setDisplayedCode] = useState('');
    const typingSpeed = 50;

    useEffect(() => {
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;

        const typeCode = () => {
            if (currentIndex < code.length) {
                setDisplayedCode((prev) => prev + code.charAt(currentIndex));
                currentIndex++;
                timeoutId = setTimeout(typeCode, typingSpeed);
            }
        };

        setDisplayedCode('');
        typeCode();

        return () => clearTimeout(timeoutId);
    }, [code]);

    return (
        <Card className={`${monospace.className} my-10 max-w-fit bg-slate-100 dark:bg-gray-800 relative`}>
            <div className="flex bg-gray-200 dark:bg-gray-900 p-3 pb-0">
                <h4 className="bg-slate-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-t-lg">
                    {filename}
                </h4>
            </div>
            <Card className="flex flex-row rounded-none bg-slate-100 dark:bg-gray-800 border-none">
                <div className="flex">
                    <pre className="text-gray-800 dark:text-gray-300 px-4 py-2">
                        {code.split('\n').map((_, index) => (
                            <div key={index}>{startLineNumber + index}</div>
                        ))}
                    </pre>
                </div>
                <div className="flex">
                    <SyntaxHighlighter
                        className="bg-gray-800"
                        language="python"
                        style={atomOneDark}
                        customStyle={{ backgroundColor: 'transparent' }}
                        startingLineNumber={startLineNumber}
                        lineNumberStyle={{ color: '#999', backgroundColor: '#2d2d2d' }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </Card>
        </Card>
    );
}
