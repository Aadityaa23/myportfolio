"use client"; // This is a client component 👈🏽
import Image from "next/image";
import GradPhoto from "../../public/grad.jpg";

export default function Education() {
	return (
		<>
			<div
				id="education"
				className="bg-green-100 flex flex-col items-center py-16 px-8"
			>
				<h2 className="text-black text-3xl mb-4">Education</h2>

				{/* Section 1 */}
				<div className="flex flex-col md:flex-row items-center justify-center py-8">
					{/* Photo */}
					<div className="md:w-1/2 px-2">
						<Image
							src={GradPhoto}
							alt="Aadityaa's photo at graduation"
							className="w-full h-auto rounded-xl md:rounded-sm shadow-md"
						/>
					</div>

					{/* Description */}
					<div className="md:w-1/2 md:px-8 px-2 pt-8 md:pt-4">
						<h3 className="text-black text-3xl font-bold mb-1">
							The University of Melbourne
						</h3>
						<h5 className="text-gray-900 text-2xl mb-1">
							Bachelor of Science (Computing and Software Systems)
						</h5>
						<p className="text-gray-800 pl-2">
							Achieved Second Class Honours, and was rewarded the Leaders in
							Communities Award, fro outstanding leadership and contribution to
							the community.
						</p>
						<h3 className="text-black text-3xl font-bold mb-1 mt-3">
							Foundations for the Future Charter Academy
						</h3>
						<h5 className="text-gray-900 text-2xl mb-1">High School Diploma</h5>
						<p className="text-gray-800 pl-2 pb-4">
							Finished with an overall average of 88. Awarded the Rutherford
							Scholarship for outstanding academic performance, and the Farlye
							Mowat Scholarship for exceptional writing and leadership skills.
						</p>
						<button
							type="button"
							onClick={() => window.open("/AboutMe/#education")}
							className="bg-green-900 rounded-full pt-2 px-4 text-green-100 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white shadow-md hover:shadow-lg focus:shadow-lg "
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
