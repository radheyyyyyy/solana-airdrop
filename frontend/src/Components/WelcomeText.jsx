import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar.jsx";

const AnimatedText = () => {
    const messages = [
        "Welcome to Solana dApp",
        "You can do airdrop to any wallet ",
        "send Solana to your friend",
        "and sign a message"
    ];
    const [displayedText, setDisplayedText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (messageIndex < messages.length) {
            if (charIndex < messages[messageIndex].length) {
                setTimeout(() => {
                    setDisplayedText(prev => prev + messages[messageIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, 100);
            } else {
                setTimeout(() => {
                    setDisplayedText('');
                    setCharIndex(0);
                    setMessageIndex(prev => prev + 1);
                }, 1500);
            }
        }
    }, [charIndex, messageIndex]);

    return (
        <div className='bg-black w-full h-screen'>
            <div className='flex'>
                <Sidebar/>
                <div
                    className="font-mono flex justify-center items-center w-full text-3xl font-semibold text-center text-blue-600 mt-6">
                    {displayedText}
                    <span className="animate-blink">|</span>
                </div>
            </div>

        </div>

    );
};

export default AnimatedText;