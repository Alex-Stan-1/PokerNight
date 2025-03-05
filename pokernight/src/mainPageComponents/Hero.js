"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center bg-black px-4">
            {/* Background Poker Chip Image */}
            <div className="absolute inset-0 flex justify-center items-center opacity-20">
                <Image
                    src="/image-removebg-preview.png"
                    alt="Poker Chip"
                    width={300} // Scales well for mobile
                    height={300}
                    className="animate-spin-slow md:w-[450px] md:h-[450px]" // Larger for desktops
                />
            </div>

            {/* Title */}
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-[#d4af37] tracking-wide uppercase relative z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                The 1st
                <br />
                Semi-Annual
                <br />
                Stanimal’s Invitational
            </motion.h1>

            {/* Description */}
            <motion.p
                className="text-base md:text-lg text-gray-400 mt-2 relative z-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                A night for the boys, the cards, and the memories we’ll talk about long after the last hand is dealt.
                Texas Hold’em, good drinks, and one hell of a night.
            </motion.p>
        </div>
    );
}
