'use client'
import Image from "next/image"
import { useState } from "react"

export default function SignupPage() {
    const [username, setUsername] = useState('')
    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [hashed_password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({ username, full_name, email, hashed_password })

        try {
            const response = await fetch('http://127.0.0.1:8000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username,  email,full_name, hashed_password })
            })

            const data = await response.json()
            setMessage(data.message)
            console.log(data)
        } catch (err) {
            console.error('Error signing up:', err)
        }
    }

    return (
        <div className="min-h-screen w-full flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[60%] flex flex-col items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 justify-center mb-8">
                        <span className="text-2xl font-bold text-[#ffc727]">Brief 5</span>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold text-gray-800">TEXT ANALYSE</h1>
                        <p className="text-gray-500 text-sm">
                            Application d’Analyse de Sentiment avec Service IA Externe
                        </p>
                    </div>

                    {message && <p className="text-red-500 text-sm text-center">{message}</p>}

                    {/* Form */}
                    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-[#F07B6F] focus:bg-white focus:ring-0 transition-colors text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={full_name}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-[#F07B6F] focus:bg-white focus:ring-0 transition-colors text-sm"
                        />
                        <input
                            type="email"
                            placeholder="E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-[#F07B6F] focus:bg-white focus:ring-0 transition-colors text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={hashed_password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-[#F07B6F] focus:bg-white focus:ring-0 transition-colors text-sm"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#ffc727] text-white py-2.5 rounded-md hover:bg-[#e6b700] transition-colors font-medium text-sm"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex lg:w-[40%] bg-[#FFD95A] items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center p-12">
                    <Image
                        src="/curiosity search-cuate.svg"
                        alt="Signup illustration"
                        width={800}
                        height={800}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
