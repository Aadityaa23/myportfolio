import Card from "./Card";
import Image from "next/image";

export default function PNV() {
	return (
		<>
			<div className="bg-green-950 flex flex-col items-center p-16">
				<h2 className=" text-3xl mb-4">Projects</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
					<Card
						title="US 22 Pitch Comp"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="team"
					></Card>
					<Card
						title="US 22 Pitch Comp"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="team"
					></Card>
					<Card
						title="Capstone Project"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="capstone"
					></Card>
				</div>
			</div>
		</>
	);
}
