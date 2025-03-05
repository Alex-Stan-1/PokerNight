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
    ];

    const [fadeOutMessages, setFadeOutMessages] = useState(false);
    const [showBlackout, setShowBlackout] = useState(false);
    const [showInvitation, setShowInvitation] = useState(false);

    useEffect(() => {
        const fadeMessagesTimeout = setTimeout(() => {
            setFadeOutMessages(true);
        }, messages.length * 2000 + 2000); // Delay before fading messages

        const blackoutTimeout = setTimeout(() => {
            setShowBlackout(true);
        }, messages.length * 2000 + 2000); // Ensures messages fully fade out before blackout

        const invitationTimeout = setTimeout(() => {
            setShowInvitation(true);
        }, messages.length * 2000 + 2000); // Show invitation after blackout

        const transitionTimeout = setTimeout(() => {
            onTransitionComplete();
        }, messages.length * 2000 + 10000); // Complete transition

        return () => {
            clearTimeout(fadeMessagesTimeout);
            clearTimeout(blackoutTimeout);
            clearTimeout(invitationTimeout);
            clearTimeout(transitionTimeout);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black text-white text-center flex-col overflow-hidden px-4">
            {/* Transition Messages */}
            {!fadeOutMessages &&
                messages.map((message, index) => (
                    <motion.h2
                        key={index}
                        className="text-2xl md:text-4xl font-bold transition-message leading-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.8, delay: index * 2 }}
                    >
                        {message}
                    </motion.h2>
                ))}

            {/* Fade Out Effect for Messages */}
            {fadeOutMessages && !showBlackout && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                />
            )}

            {/* Full Blackout Before Invitation */}
            {showBlackout && !showInvitation && (
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />
            )}

            {/* Stanimal's Invitational Full-Screen Display */}
            {showInvitation && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black text-[#d4af37] text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-wider uppercase"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    >
                        STANIMAL’S INVITATIONAL
                    </motion.h1>
                </motion.div>
            )}

            {/* Skip Button - Always Visible */}
            <motion.button
                onClick={onTransitionComplete}
                className="absolute bottom-24 md:bottom-10 px-6 py-3 text-lg bg-[#d4af37] text-black rounded-lg shadow-md hover:bg-[#b8972d] transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                Skip Intro
            </motion.button>
        </div>
    );
}
