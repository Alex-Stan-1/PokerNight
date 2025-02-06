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

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black text-white text-center flex-col overflow-hidden px-4">
            {/* Transition Messages */}
            {messages.map((message, index) => (
                <motion.h2
                    key={index}
                    className={`text-2xl md:text-4xl font-bold transition-message leading-tight ${index === messages.length - 1 ? "text-[#d4af37] glow-text" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.8, delay: index * 2 }}
                >
                    {message}
                </motion.h2>
            ))}

            {/* Full-Screen Blackout for Transition */}
            {fadeOut && (
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />
            )}

            {/* Skip Button - Placed Higher for Mobile Accessibility */}
            {!fadeOut && (
                <motion.button
                    onClick={onTransitionComplete}
                    className="absolute bottom-24 md:bottom-10 px-6 py-3 text-lg bg-[#d4af37] text-black rounded-lg shadow-md hover:bg-[#b8972d] transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    Skip Intro
                </motion.button>
            )}
        </div>
    );
}
