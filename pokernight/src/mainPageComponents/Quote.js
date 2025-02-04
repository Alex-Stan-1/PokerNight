"use client";

import { motion } from "framer-motion";

export default function Quote() {
    return (
        <motion.div
            className="text-center text-gray-400 italic text-2xl font-light tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {`"You gotta know when to hold 'em, know when to fold 'em."`}
        </motion.div>
    );
}
