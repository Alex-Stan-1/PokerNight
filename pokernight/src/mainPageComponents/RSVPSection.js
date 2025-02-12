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

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#2b2b2b] p-6 rounded-lg shadow-xl text-center">
            {/* RSVP FORM */}
            <div className="p-4 bg-[#1a1a1a] rounded-lg shadow-md">
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

            {/* PLAYERS LIST (Reverted Back to Original) */}
            <div className="p-4 bg-[#1a1a1a] rounded-lg shadow-md">
                <h3 className="text-2xl text-[#d4af37] mb-4">Pending & Confirmed Players</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className={`p-3 rounded-md flex flex-col items-center justify-center ${player.status === "confirmed" ? "text-white" : "text-gray-500 opacity-60"
                                }`}
                        >
                            <span className="text-lg font-bold">{player.alias || "Unknown"}</span>
                            <span className="text-sm">({player.name || "Unnamed"})</span>

                            {/* Pending Players Get "..." */}
                            {player.status === "pending" && (
                                <span className="text-gray-400 animate-pulse">...</span>
                            )}

                            {/* Confirmed Players Get ✅ */}
                            {player.status === "confirmed" && (
                                <span className="text-green-500">✅</span>
                            )}
                        </div>
                    ))}
                </div>
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
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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
