"use client";
import { motion } from "framer-motion";

export default function ClosingMessage() {
    return (
        <motion.div
            className="text-center text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {/* Closing Title */}
            <motion.h2
                className="text-3xl text-[#d4af37] mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                The Cards Are on the Table.
            </motion.h2>

            {/* Fun & Lighthearted Closing Message */}
            <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                Life is different now—new apartment, new routine, new responsibilities...
                But for one night, none of that matters.
                No distractions. Just the game, the drinks, and the boys.
                You in?
            </motion.p>

            {/* Rickroll Button (Disguised as an Exclusive Link) */}
            <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            >
                <a
                    href="https://www.youtube.com/watch?v=j5a0jTc9S10&ab_channel=YourUncleMoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4af37] text-lg underline hover:text-white transition-all"
                >
                    One last thing before we start
                </a>
            </motion.div>
        </motion.div>
    );
}
