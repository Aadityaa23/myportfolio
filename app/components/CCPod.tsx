"use client"; // This is a client component 👈🏽

import CCPodLogo from "../../public/CCPodLogo.png";
import Image from "next/image";
import SpotifyLogo from "../../public/spotifylogo.png";

export default function CCPd() {
	// Create a section of the website where I can share about my podcast
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center bg-green-100 py-16 px-8">
				{/* Description */}
				<div className="md:w-1/2  pt-8 md:pt-0 px-2 md:px-8">
					<h2 className="text-black text-3xl font-bold mb-4">
						The Curious Coconut Podcast
					</h2>
					<p className="text-gray-900 pb-4">
						I love books, tech, sustainability, and start-ups, this podcast is
						my way of exploring all of those topics at once. As the title
						suggests, we at the Curious Coconut are curious people at heart. So
						with each episode we bring on a guest who is doing cool things about
						a topic that we like, and then let our curious minds be nourished by
						absorbing any knowledge they share.{" "}
					</p>
					{/*A button to link to the podcast*/}
					<button
						onClick={() =>
							window.open("https://www.youtube.com/@Curious_Coconut", "_blank")
						}
						className="bg-green-900 rounded-full py-2 mb-4 px-4  text-green-100 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white shadow-md hover:shadow-lg focus:shadow-lg "
					>
						Checkout the latest episode!
					</button>
					{/* Logo container */}
					<div className="flex flex-row">
						<button
							type="button"
							onClick={() =>
								window.open(
									"https://www.youtube.com/@Curious_Coconut",
									"_blank"
								)
							}
							data-te-ripple-init
							data-te-ripple-color="light"
							aria-label="Youtube"
							className="bg-ytred mx-3 mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
							</svg>
						</button>

						<button
							type="button"
							onClick={() =>
								window.open(
									"https://www.instagram.com/curious.coconut/",
									"_blank"
								)
							}
							data-te-ripple-init
							data-te-ripple-color="light"
							aria-label="Instagram"
							className="bg-instapink mx-3 mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
						</button>

						<button
							type="button"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/company/99156845/admin/feed/posts/",
									"_blank"
								)
							}
							data-te-ripple-init
							data-te-ripple-color="light"
							aria-label="LinkedIn"
							className="bg-linkedinblue mx-3 mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
							</svg>
						</button>
						<button
							type="button"
							onClick={() =>
								window.open(
									"https://open.spotify.com/show/2hYRH1un8QjYYz8rNXrySF",
									"_blank"
								)
							}
							data-te-ripple-init
							data-te-ripple-color="light"
							aria-label="Spotify"
							className="bg-spotifygreen p-3 mb-2 mx-3 text-xs font-medium uppercase inline-block rounded-full  leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
						>
							<Image
								src={SpotifyLogo}
								alt="Spotify Logo"
								className="w-4 h-4 rounded-full"
							/>
						</button>
					</div>
				</div>

				<div className="md:w-1/3">
					<Image
						src={CCPodLogo}
						alt="The Curious Coconut Podcast Logo"
						className="w-full h-auto shadow-md rounded-full"
					/>
					{/* Add three small logos for linking to youtube, spotify, and instagram */}
				</div>
			</div>
		</>
	);
}
