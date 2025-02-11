"use client";
import { motion } from "framer-motion";

export default function GameDetails() {
    return (
        <motion.div
            className="max-w-4xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl text-[#d4af37] mb-4">The Details</h2>

            {/* Game Details */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Texas Hold’em - No buy-in, just good vibes.
                Drinks are on the house. Pizza’s on me.
            </p>

            {/* Event Details */}
            <div className="mt-6 text-gray-300 text-lg space-y-2">
                <p>
                    <strong className="text-[#d4af37]">🎭 Dress Code: </strong>
                    Show up as your alias would. Commit to the role.
                </p>
                <p>
                    <strong className="text-[#d4af37]">📍 Location: </strong>
                    701 Martha Ave, APT 3119, Lancaster, PA 17601
                </p>
                <p>
                    <strong className="text-[#d4af37]">⏰ Start Time: </strong>
                    May 2nd @ 6:00 PM
                </p>
            </div>
        </motion.div>
    );
}
