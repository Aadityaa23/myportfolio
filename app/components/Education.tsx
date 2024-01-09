import Image from "next/image";
import GradPhoto from "../../public/grad2.jpg";

export default function Education() {
	return (
		<>
			<div
				id="education"
				className="flex flex-col md:flex-row items-center justify-center bg-green-100 py-16 px-8 md:p-0"
			>
				{/* Photo */}
				<div className="md:w-1/2">
					<Image
						src={GradPhoto}
						alt="Aadityaa's Photo"
						className="w-full h-auto rounded-xl md:rounded-sm shadow-md"
					/>
				</div>

				{/* Description */}
				<div className="md:w-1/2 pt-8 md:pt-0 px-2 md:px-8">
					<h2 className="text-black text-3xl font-bold mb-4">Education</h2>
					<p className="text-gray-700">
						Your brief description goes here. Tell visitors about yourself, your
						skills, and what you're passionate about.
					</p>
				</div>
			</div>
		</>
	);
}
