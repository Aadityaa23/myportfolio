"use client"; // This is a client component 👈🏽
import Image from "next/image";
import AadiPhoto from "../../public/Aadi.jpg";

export default function Intro() {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center bg-green-100 py-16 px-8 md:p-0">
				{/* Description */}
				<div className="md:w-1/2 pt-8  px-2 md:p-16">
					<h2 className="text-black text-3xl font-bold mb-4">Intro</h2>
					<p className="text-gray-800 pb-1">
						As a naturally curious person, I enjoy the continuous pursuit of
						knowledge. Whether it is learning how to code in order to build
						accessible websites, honing storytelling skills to deliver engaging
						business pitches, or even mastering the art of falling so I don’t
						break any bones while skiing – I’m just in love with the process.
					</p>
					<p className="text-gray-800 pb-1">
						This chronic curiosity has led me to embrace diverse opportunities,
						constantly challenging myself to push the boundaries of my
						potential. From founding a startup during university to launching my
						own podcast to gain insights from industry professionals, my journey
						has been defined by a relentless pursuit of growth.
					</p>
					<p className="text-gray-800 pb-1">
						During university, my curiosity for economics led me to do an
						internship at NAB, and my passion for tech led me to join Telstra.
						Both of these experiences gave me a taste for corporate life, and
						made me better appreciate the complexity of systems our world is
						built upon.
					</p>

					<p className="text-gray-800 pb-4">
						With a background in Computer Science, and a passion for sustainable
						tech, I am a creative problem-solver who aims to have a positive
						impact on the planet through the work I do. Having lived across
						three continents, I love working with diverse groups of people, and
						can often bring unique perspectives while problem-solving.{" "}
					</p>
					<button
						type="button"
						onClick={() => (window.location.href = "/AboutMe")}
						className="bg-green-900 rounded-full py-2 px-4 text-green-100 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white shadow-md hover:shadow-lg focus:shadow-lg "
					>
						Learn More
					</button>
				</div>

				{/* Photo */}
				<div className="md:w-1/2">
					<Image
						src={AadiPhoto}
						alt="Aadityaa's Photo"
						className="w-full h-auto rounded-full md:rounded-sm shadow-md"
					/>
				</div>
			</div>
		</>
	);
}
