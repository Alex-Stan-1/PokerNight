"use client";
import { motion } from "framer-motion";

export default function IntroPage({ onEnter }) {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black text-white text-center flex-col overflow-hidden">
            {/* 🔥 Left Flame - Closer to Title */}
            <motion.img
                src="/fire-animation.gif"
                alt="Flame Left"
                className="absolute left-[20%] top-[40%] w-20 h-20 md:w-28 md:h-28 opacity-90"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1], y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* 🔥 Right Flame - Closer to Title */}
            <motion.img
                src="/fire-animation.gif"
                alt="Flame Right"
                className="absolute right-[20%] top-[40%] w-20 h-20 md:w-28 md:h-28 opacity-90"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1], y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* 🔥 Title with Flickering Effect */}
            <motion.h1
                className="text-6xl font-bold mb-6 text-red-600 uppercase tracking-wider flicker-text relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                ENTER IF YOU DARE
            </motion.h1>

            {/* 📜 Suspenseful Description */}
            <motion.p
                className="text-lg text-gray-400 mb-8 max-w-lg relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                totally not a virus
            </motion.p>

            {/* Intense "ENTER" Button */}
            <motion.button
                onClick={onEnter}
                className="relative px-10 py-5 text-2xl font-bold uppercase bg-red-700 rounded-full shadow-xl border-4 border-red-900 tracking-wide overflow-hidden z-10"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                whileHover={{ scale: 1.1 }}
            >
                <span className="absolute inset-0 bg-red-500 blur-lg opacity-50 animate-pulse"></span>
                ENTER
            </motion.button>
        </div>
    );
}
