import Image from "next/image";
import CCLogo from "../../public/cclogo.png";
import DEN from "../../public/DEN.jpg";
import CCnS from "../../public/CCnS.jpg";
import Scuba from "../../public/Scuba.jpg";

export default function Hobbies() {
	return (
		<>
			<div className="bg-green-950 flex flex-col items-center py-16 px-8">
				<h2 className=" text-3xl mb-4">Hobbies and Passions</h2>

				{/* Section 1 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-8">
					{/* Logo */}
					<div className="md:w-2/3">
						<Image
							src={DEN}
							alt="Aadityaa's Photo"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-1/3 py-8 px-2 md:px-8">
						<h2 className="text-white text-3xl font-bold mb-4">Intro</h2>
						<p className="text-gray-200">
							Your brief description goes here. Tell visitors about yourself,
							your skills, and what you're passionate about.
						</p>
					</div>
				</div>

				{/* Section 2 */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-center my-8">
					<div className="md:w-1/3 p-8">
						<h2 className="text-white text-3xl font-bold mb-4">Intro</h2>
						<p className="text-gray-200">
							Your brief description goes here. Tell visitors about yourself,
							your skills, and what you're passionate about.
						</p>
					</div>
					{/* Logo */}
					<div className="md:w-2/3 p-8">
						<Image
							src={CCnS}
							alt="Aadityaa's Photo"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>

				{/* Section 3 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-8">
					{/* Logo */}
					<div className="md:w-2/3 p-8">
						<Image
							src={Scuba}
							alt="Aadityaa's Photo"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-1/3 p-8">
						<h2 className="text-white text-3xl font-bold mb-4">Intro</h2>
						<p className="text-gray-200">
							Your brief description goes here. Tell visitors about yourself,
							your skills, and what you're passionate about.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
