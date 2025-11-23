'use client'
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const router = useRouter()  // Next.js router

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log({ email, password })

        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, hashed_password: password })
            })

            const data = await response.json()
            console.log(data)

            if (data.access_token) {
                localStorage.setItem("token", data.access_token)
                localStorage.setItem("user_id", data.user_id)

                router.push('/prediction')
            } else {
                setMessage(data.message)
            }
        } catch (err) {
            console.error('Error logging in:', err)
            setMessage("Something went wrong")
        }
    }

    return (
        <div className="min-h-screen w-full flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[60%] flex flex-col items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-8">
                    <div className="flex items-center gap-2 justify-center mb-8">
                        <span className="text-2xl font-bold text-[#ffc727]">----------------------------------------------</span>
                    </div>
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
                        <p className="text-gray-500 text-sm">
                            Welcome back! Please enter your credentials.
                        </p>
                    </div>
                    {message && <p className="text-red-500 text-sm text-center">{message}</p>}
                    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
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
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-[#F07B6F] focus:bg-white focus:ring-0 transition-colors text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ffc727] text-white py-2.5 rounded-md hover:bg-[#e6b700] transition-colors font-medium text-sm"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            {/* Right Side - Illustration */}
            <div className="hidden lg:flex lg:w-[40%] bg-[#FFD95A] items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center p-12">
                    <Image
                        src="/curiosity search-cuate.svg"
                        alt="Login illustration"
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
