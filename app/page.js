export default function Home() {
    return (
        <main className=" w-screen h-screen bg-[#19323C] grid place-content-center">
            <div className="flex flex-col items-center rounded-lg w-[800px] p-5 gap-10 bg-[#e1e2e0] shadow-lg">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
                    Siguiente pregunta
                </button>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
				<div className="flex gap-5">
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
						Correcto
					</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded duration-300 shadow">
						Incorrecto
					</button>
				</div>
				
            </div>
        </main>
    );
}
