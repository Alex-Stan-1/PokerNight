"use client";

import Hero from "./Hero";
import Introduction from "./Introduction";
import GameDetails from "./GameDetails";
import Quote from "./Quote";
import RSVPSection from "./RSVPSection";  // Updated Component
import ClosingMessage from "./ClosingMessage";

export default function MainPage() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-[#e0e0e0] font-serif">
            <Hero />
            <div className="container mx-auto p-12 space-y-32">
                <Introduction />
                <GameDetails />
                <RSVPSection /> 
                <ClosingMessage />
                <Quote />
            </div>
        </div>
    );
}