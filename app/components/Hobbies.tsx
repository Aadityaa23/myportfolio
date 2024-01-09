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
				<div className="flex flex-col md:flex-row items-center justify-center my-8 md:px-8">
					{/* Logo */}
					<div className="md:w-2/3 md:p-2">
						<Image
							src={DEN}
							alt="A group of people wearing costumes are standing on stage"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-1/3 pt-8 md:pt-0 px-2">
						<h3 className="text-white text-3xl font-bold mb-4">
							Theatre and Comedy
						</h3>
						<p className="text-gray-200">
							Do Everything Now Before The World Ends: An Absurdist play that
							explored the interconnection between the end of the world due to
							global warming, and what it truly means to be alive.
						</p>
					</div>
				</div>

				{/* Section 2 */}
				<div className="flex flex-col md:flex-row items-center justify-center text-right my-8 md:px-8">
					<div className="md:w-1/3 pt-8 md:pt-0 px-2 ">
						<h3 className="text-white text-3xl font-bold mb-4">
							Climate Change and Sustainability
						</h3>{" "}
						<p className="text-gray-200">
							Hiking at Peto Lake with a group of friends and enjoying the peace
							that nature has to offer.
						</p>
					</div>
					{/* Logo */}
					<div className="md:w-2/3 md:p-2">
						<Image
							src={CCnS}
							alt="Four people standing in front of a scenic view of mountains and lakes"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>

				{/* Section 3 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-8 md:px-8">
					{/* Logo */}
					<div className="md:w-2/3 md:p-2">
						<Image
							src={Scuba}
							alt="Two people scuba diving"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-1/3 pt-8 md:pt-0 px-2">
						<h3 className="text-white text-3xl font-bold mb-4">Travel</h3>{" "}
						<p className="text-gray-200">
							Scuba diving at the Great Barrier Reef to witness the majestic
							coral before they disappear.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
