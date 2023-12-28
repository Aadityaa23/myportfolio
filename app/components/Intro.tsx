import Image from "next/image";
import AadiPhoto from "./Aadi2.jpg";

export default function Intro() {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 p-16 md:p-0">
				{/* Description */}
				<div className="md:w-1/2 p-8">
					<h2 className="text-3xl font-bold mb-4">Intro</h2>
					<p className="text-gray-700">
						Your brief description goes here. Tell visitors about yourself, your
						skills, and what you're passionate about.
					</p>
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
