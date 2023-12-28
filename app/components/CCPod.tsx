"use client"; // This is a client component 👈🏽

import CCPodLogo from "../../public/CCPodLogo.png";
import Image from "next/image";

export default function CCPd() {
	// Create a section of the website where I can share about my podcast
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center bg-green-100 p-16">
				{/* Description */}
				<div className="md:w-1/2 p-8">
					<h2 className="text-black text-3xl font-bold mb-4">Podcast</h2>
					<p className="text-gray-700">
						Your brief description goes here. Tell visitors about yourself, your
						skills, and what you're passionate about.
					</p>
					{/*A button to link to the podcast*/}
					<button className="bg-green-950 text-green-300 rounded-full my-8 border-solid border-4 border-green-950 hover:bg-green-900 hover:text-white">
						<h4 className="p-4">Chechout the latest episode!</h4>
					</button>
					{/* Logo container */}
					<div>
						<a href="https://www.youtube.com/@Curious_Coconut" target="_blank">
							<svg
								className="block h-7 w-7"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
							</svg>
						</a>
					</div>
				</div>

				<div className="md:w-1/3">
					<Image
						src={CCPodLogo}
						alt="The Curious Cocnut Podcast Logo"
						className="w-full h-auto rounded-full shadow-md border-solid border-4 border-green-900"
					/>
					{/* Add three small logos for linking to youtube, spotify, and instagram */}
				</div>
			</div>
		</>
	);
}
