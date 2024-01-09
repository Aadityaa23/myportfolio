import Card from "./Card";
import Image from "next/image";

export default function PNV() {
	return (
		<>
			<div
				id="projects"
				className="bg-green-950 flex flex-col items-center py-16 px-4 md:px-16"
			>
				{/* Projects */}
				<h2 className=" text-3xl mb-4">Projects</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card
						title="US 22 Pitch Comp"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="team"
					></Card>
					<Card
						title="US 22 Pitch Comp"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="CCThumbnail"
					></Card>
					<Card
						title="Capstone Project"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="capstone"
					></Card>
				</div>

				{/* Volunteering */}

				<h2 className=" text-3xl my-8">Volunteering</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card
						title="HackMelbourne Sponsorship Officer"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="HackMelb"
					></Card>
					<Card
						title="US 22 Pitch Comp"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="slawn"
					></Card>
					<Card
						title="Capstone Project"
						body="This is the new body from the Projects and Volunteering section"
						imagePath="unimelbLogo"
					></Card>
				</div>
			</div>
		</>
	);
}
