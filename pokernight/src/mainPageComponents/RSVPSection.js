"use client";
import { useEffect, useState } from "react";
import { getPlayers, confirmRSVP } from "@/utils/firestore";

export default function RSVPSection() {
    const [players, setPlayers] = useState([]);
    const [email, setEmail] = useState("");
    const [modalMessage, setModalMessage] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            const playerList = await getPlayers();
            setPlayers(playerList);
        };
        fetchPlayers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        const success = await confirmRSVP(email);
        if (success) {
            setPlayers(players.map((player) =>
                player.email === email ? { ...player, status: "confirmed" } : player
            ));
            setModalMessage({ text: "RSVP Confirmed! See you at the table.", type: "success" });
        } else {
            setModalMessage({ text: "Email not found. Make sure you were invited!", type: "error" });
        }
        setEmail("");
    };

    // Utility: force line break on names with space
    const formatAlias = (alias) => {
        if (!alias) return "Unknown";
        return alias.includes(" ") ? alias.split(" ").join("\n") : alias;
    };

    return (
        <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-lg shadow-xl text-center">
            {/* RSVP FORM */}
            <div className="mb-8">
                <h3 className="text-2xl text-[#d4af37] mb-4">Secure Your Seat</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-[#3b3b3b] text-[#e0e0e0] rounded border border-[#555] mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-[#6b4f4f] text-white rounded-lg hover:bg-[#7c5f5f] transition-all"
                    >
                        RSVP Now
                    </button>
                </form>
            </div>

            {/* PLAYERS LIST */}
            <div>
                <h3 className="text-2xl text-[#d4af37] mb-4">Pending & Confirmed Players</h3>

                {/* Stanimal at the Top, Centered */}
                <div className="flex justify-center mb-6">
                    <div className="w-[130px] min-h-[130px] p-4 rounded-md flex flex-col items-center justify-center text-white border-2 border-[#d4af37] bg-[#222] shadow-lg text-center">
                        <span className="text-lg font-bold whitespace-nowrap">Stanimal</span>
                        <span className="text-sm">(Alex)</span>
                        <span className="text-green-500 flex items-center justify-center h-full">✅</span>
                    </div>
                </div>

                {/* Grid of 8 players */}
                {(() => {
                    const nonStanimal = players.filter(p => p.alias !== "Stanimal");
                    const gridPlayers = nonStanimal.slice(0, 8);
                    const lastPlayer = nonStanimal[8];

                    return (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mb-6">
                                {gridPlayers.map((player) => (
                                    <div
                                        key={player.id}
                                        className={`w-[130px] min-h-[130px] p-2 rounded-md flex flex-col items-center justify-center 
                                            ${player.status === "confirmed" ? "text-white" : "text-gray-500 opacity-60"}
                                            border-2 border-gray-600 bg-[#222] transition-all text-center break-words`}
                                    >
                                        <span className="text-lg font-bold whitespace-pre-line">{formatAlias(player.alias)}</span>
                                        <span className="text-sm">({player.name || "Unnamed"})</span>
                                        <span className="flex items-center justify-center h-full">
                                            {player.status === "pending" ? (
                                                <span className="text-gray-400 animate-pulse">...</span>
                                            ) : (
                                                <span className="text-green-500">✅</span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Last Player Centered Below */}
                            {lastPlayer && (
                                <div className="flex justify-center mb-6">
                                    <div
                                        key={lastPlayer.id}
                                        className={`w-[130px] min-h-[130px] p-2 rounded-md flex flex-col items-center justify-center 
                                            ${lastPlayer.status === "confirmed" ? "text-white" : "text-gray-500 opacity-60"}
                                            border-2 border-gray-600 bg-[#222] transition-all text-center break-words`}
                                    >
                                        <span className="text-lg font-bold whitespace-pre-line">{formatAlias(lastPlayer.alias)}</span>
                                        <span className="text-sm">({lastPlayer.name || "Unnamed"})</span>
                                        <span className="flex items-center justify-center h-full">
                                            {lastPlayer.status === "pending" ? (
                                                <span className="text-gray-400 animate-pulse">...</span>
                                            ) : (
                                                <span className="text-green-500">✅</span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </>
                    );
                })()}
            </div>

            {/* Custom Modal */}
            {modalMessage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setModalMessage(null)}
                >
                    <div
                        className={`p-6 rounded-lg shadow-lg text-center max-w-md mx-auto transition-all ${modalMessage.type === "success"
                            ? "bg-[#1a1a1a] border-[#d4af37] text-[#d4af37]"
                            : "bg-[#1a1a1a] border-red-500 text-red-500"
                            } border-2`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">
                            {modalMessage.type === "success" ? "You're In!" : "Oops!"}
                        </h2>
                        <p className="mb-6">{modalMessage.text}</p>
                        <button
                            onClick={() => setModalMessage(null)}
                            className="px-6 py-2 bg-[#d4af37] text-black rounded-lg hover:bg-[#b8972d] transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
