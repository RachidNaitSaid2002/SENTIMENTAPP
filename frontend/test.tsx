'use client'

import { useState, useEffect } from "react"

export default function PredictionPage() {

    const [text, setText] = useState('')

    const [predictions, setPredictions] = useState([])

    const [message, setMessage] = useState('')

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    const userId = typeof window !== 'undefined' ? localStorage.getItem('user_id') : null

    // Fetch user predictions

    const fetchPredictions = async () => {

        if (!token || !userId) return

        try {

            const response = await fetch(`http://127.0.0.1:8000/Prediction/${userId}`, {

                method: 'GET',

                headers: {

                    Authorization: `Bearer ${token}`

                }

            })

            const data = await response.json()

            if (data.message) {

                setMessage(data.message)

                setPredictions([])

            } else {

                setPredictions(data)

                setMessage('')

            }

        } catch (err) {

            console.error('Error fetching predictions:', err)

            setMessage('Something went wrong')

        }

    }

    useEffect(() => {

        fetchPredictions()

    }, [])

    // Submit new prediction

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!text) return

        try {

            const response = await fetch('http://127.0.0.1:8000/Prediction', {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${token}`

                },

                body: JSON.stringify({ user_text: text })

            })

            const data = await response.json()

            if (data.message) {

                setMessage(data.message)

                setText('')

                fetchPredictions() // Refresh list

            }

        } catch (err) {

            console.error('Error submitting prediction:', err)

            setMessage('Something went wrong')

        }

    }

    return (

        <div className="min-h-screen p-8 bg-gray-50">

            <div className="max-w-3xl mx-auto space-y-6">

                <h1 className="text-2xl font-bold text-gray-800 text-center">Text Prediction</h1>

                {/* Form */}

                <form className="space-y-4" onSubmit={handleSubmit}>

                    <textarea

                        placeholder="Enter text for prediction..."

                        value={text}

                        onChange={(e) => setText(e.target.value)}

                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#F07B6F] focus:border-transparent transition-colors"

                        rows={4}

                    />

                    <button

                        type="submit"

                        className="w-full bg-[#ffc727] text-white py-2.5 rounded-md hover:bg-[#e6b700] transition-colors font-medium text-sm"

                    >

                        Predict

                    </button>

                </form>

                {/* Message */}

                {message && <p className="text-red-500 text-center">{message}</p>}

                {/* Predictions List */}

                <div className="space-y-4 mt-6">

                    {predictions.length > 0 && <h2 className="text-lg font-semibold">Your Predictions:</h2>}

                    {predictions.map((pred, idx) => (

                        <div key={idx} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">

                            <p><strong>Text:</strong> {pred.user_text}</p>

                            <p><strong>Result:</strong> {pred.result}</p>

                            <p className="text-xs text-gray-400">Created at: {new Date(pred.created_at).toLocaleString()}</p>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )

}