import Image from "next/image";
import AadiPhoto from "../../public/Aadi.jpg";

export default function Intro() {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center bg-green-100 p-16 md:p-0">
				{/* Description */}
				<div className="md:w-1/2 p-8">
					<h2 className="text-black text-3xl font-bold mb-4">Intro</h2>
					<p className="text-gray-700 pb-4">
						Your brief description goes here. Tell visitors about yourself, your
						skills, and what you're passionate about.
					</p>
					<button
						type="button"
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
