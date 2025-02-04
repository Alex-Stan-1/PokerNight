"use client";

import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl text-[#d4af37] mb-4">Welcome</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
                The cards are stacked, the chips are ready.
                A night where every hand tells a story, every call carries weight,
                and every moment could be the turning point.

                This isn&rsquo;t just a game. It&rsquo;s an unspoken challenge,
                a test of nerve, a chance to prove you belong at the table.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
                Think you&rsquo;ve got what it takes?
            </p>
        </motion.div>
    );
}
