"use client";

import { useState } from "react";

export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const pickQuestion = async () => {
        const res = await fetch("/api/questions/pick");
        console.log('[DEBUG] Response: ', res)
        const data = await res.json();
        console.log('[DEBUG] Data: ', data)

        setSelectedQuestion(data.body.question);

        await fetch(`/api/questions/${data.body.index}`, {
            method: "POST",
        });
    };

    console.log('SELECTED QUESTION: ', selectedQuestion)

    return (
        <main className=" w-screen h-screen bg-[#19323C] grid place-content-center">
            <div className="flex flex-col items-center rounded-lg w-[800px] p-5 gap-10 bg-[#e1e2e0] shadow-lg">
                {selectedQuestion ? (
                    <>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
                            Siguiente pregunta
                        </button>
                        <p>
                            {selectedQuestion}
                        </p>
                        <div className="flex gap-5">
                            <button onClick={pickQuestion} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
                                Correcto
                            </button>
                            <button onClick={pickQuestion} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
                                Incorrecto
                            </button>
                        </div>
                    </>
                ) : (
                    <button
                        onClick={pickQuestion}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 shadow"
                    >
                        Comenzar
                    </button>
                )}
            </div>
        </main>
    );
}
