"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TransitionScreen({ onTransitionComplete }) {
    const messages = [
        "You have chosen to enter",
        "You are either very confident",
        "Or a fool",
        "Nevertheless",
        "You have chosen your fate",
        "WELCOME TO THE FIRST EVER",
        "STANIMAL’S HOLD’EM INVITATIONAL"
    ];

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimeout = setTimeout(() => {
            setFadeOut(true);
        }, messages.length * 2000 + 2000);

        const transitionTimeout = setTimeout(() => {
            onTransitionComplete();
        }, messages.length * 2000 + 4000);

        return () => {
            clearTimeout(fadeTimeout);
            clearTimeout(transitionTimeout);
        };
    }, []);

    const handleSkip = () => {
        setFadeOut(true);
        onTransitionComplete(); // ✅ Instantly transition after button press
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black text-white text-center flex-col overflow-hidden">
            {messages.map((message, index) => (
                <motion.h2
                    key={index}
                    className={`text-4xl md:text-6xl font-bold transition-message ${index === messages.length - 1 ? "text-[#d4af37] glow-text" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, delay: index * 2 }}
                >
                    {message}
                </motion.h2>
            ))}

            {fadeOut && (
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} // ✅ Faster fade effect
                />
            )}

            {/* ✅ Skip Button - Higher, More Responsive, Dark Border */}
            <button
                onClick={handleSkip}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 hover:text-white bg-black bg-opacity-50 border border-gray-700 px-4 py-2 rounded-md transition-opacity duration-200"
            >
                Skip
            </button>
        </div>
    );
}
