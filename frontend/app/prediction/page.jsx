"use client";

import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ChatInput() {

    const router = useRouter();

    const [value, setValue] = useState("");
    const [Pedoctions, setPredictions] = useState([]);
    const [message, setMessage] = useState("");

    const [token, setToken] = useState("");
    const [user_id, setUserId] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setToken(localStorage.getItem("token") || "");
            setUserId(localStorage.getItem("user_id") || "");
        }
    }, []);

    const getPredictionsList = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/Prediction/${user_id}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const data = await response.json();

        if (data.message) {
            setMessage(data.message);
            setPredictions([]);
        } else {
            setPredictions(data);
            setMessage("");
        }
    };

    useEffect(() => {
        if (token && user_id) {
            getPredictionsList();
        }
    }, [token, user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/Prediction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ user_text: value }),
            });

            const data = await response.json();

            if (data.message) {
                setMessage(data.message);
                setValue("");
                getPredictionsList();
            }
        } catch (err) {
            console.error("Error submitting prediction:", err);
            setMessage("Something went wrong");
        }
    };

    const Logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user_id");
        localStorage.removeItem("token");

        router.push("/login");
    };


    return (

        <div className="min-h-screen w-full flex">
                <div className="bg-[#38ada9] p-4">
                    <button onClick={Logout} className="bg-[#ffff] p-4 border-[#38ada9] rounded-lg cursor-pointer hover:bg-[#f5f6fa]"> 
                        <Image
                            src="/icons8-logout-32.png"
                            alt="Login illustration"
                            width={25}
                            height={25}
                            className="object-contain"
                            priority
                        />
                    </button>
                </div>
            <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4 w-full lg:w-[70%]">
                
                <div className="w-full max-w-3xl space-y-8">
                    <h1 className="text-center text-4xl font-semibold tracking-tight text-[#38ada9]">Devinez Votre Mode Du Jour ...</h1>
                    <form onSubmit={handleSubmit} className="relative rounded-[32px] border border border-[#38ada9] bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <textarea
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Tape simplement n’importe quoi…"
                            className="min-h-[60px] w-full resize-none bg-transparent  px-4 py-3 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none"
                            rows={1}
                        />

                        <div className="flex items-center justify-between px-2 pb-2">
                            <div className="flex items-center gap-2">
                            </div>

                            <button
                                type="submit"
                                disabled={!value.trim()}
                                className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full transition-colors  bg-[#38ada9] text-white hover:bg-gray-800"
                                aria-label="Send message"
                            >
                                <ArrowUp className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <div className="hidden lg:flex lg:w-[30%] bg-[#38ada9] p-10">
                <div className="space-y-4 mt-6 w-full">

                    {Pedoctions.length > 0 && <h2 className="text-left text-2xl font-semibold tracking-tight text-[#ffff]">Votre Predictions</h2>}

                    {Pedoctions.map((pred, idx) => (

                        <div key={idx} className="p-4 w-full bg-white bg-opacity-10 rounded-lg shadow-sm border border-gray-200 shadow-md">

                            <p><strong className="font-sans">Text:</strong> {pred.user_text}</p>

                            <p><strong>Result:</strong> {pred.result}</p>

                            <p className="text-xs text-gray-400 mt-5">Created at:   {new Date(pred.created_at).toLocaleString()}</p>

                        </div>

                    ))}

                </div>
                
            </div>

        </div>
    )
}
