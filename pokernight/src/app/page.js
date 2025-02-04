"use client";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import IntroPage from "@/mainPageComponents/IntroPage";
import TransitionScreen from "@/mainPageComponents/TransitionScreen";
import MainPage from "@/mainPageComponents/MainPage";

export default function Home() {
    const [entered, setEntered] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    const handleEnter = () => {
        setShowTransition(true);
    };

    const handleTransitionComplete = () => {
        setEntered(true);
        setShowTransition(false);
    };

    return (
        <>
            {!entered ? (
                !showTransition ? (
                    <IntroPage onEnter={handleEnter} />
                ) : (
                    <TransitionScreen onTransitionComplete={handleTransitionComplete} />
                )
            ) : (
                <ParallaxProvider>
                    <MainPage />
                </ParallaxProvider>
            )}
        </>
    );
}
