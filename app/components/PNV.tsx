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
						body="Finalist in the UniMelb Start-up Pitch Competition"
						body1="Ever since I first moved to Canada, I fell in love with nature. This love gradually turned into a passion for living a sustainable lifestyle, which led me onto the path of fighting climate change. So when I got the opportunity to join a pitch competition at university, and work on an idea that had been brewing in the back of my mind for months, I immediately took it and started working on my first start-up – Carbon Coin."
						body2="In the span of 3 months, I went from nothing to having a co-founder, a business plan for my idea, a pitch deck for investors, and a new set of skills to engage and deal with potential customers that were developed by conducting countless customer interviews to better understand the market. Not to mention the fact that I felt more confident and had significantly improved my communication skills as a result of attending numerous networking events."
						body3="After 3 months of hard work on developing the business, we were rewarded by being selected for the finals. Out of 40 teams that initially joined the competition, my team was one of eight that got chosen to pitch in front of a live panel of judges. Although nerve-wracking, it was super exciting to spend hours perfecting the pitch, and then finally presenting it to the judges and share our product. "
						body4="Unfortunately, we did not win the competition. However, the experience we gained and the connections we developed were invaluable. The competition had ended, but my entrepreneurial journey had just begun. If you want to know more about it, check out the episode on my podcast, where we discuss Carbon Coin in more detail. "
						imagePath="team"
					></Card>
					<Card
						title="Podcast Host"
						body="Network with and interview interesting guests"
						imagePath="CCThumbnail"
					></Card>
					<Card
						title="Front-End Lead"
						body="Creating wireframes and writing React code for a responsive web app"
						imagePath="capstone"
					></Card>
				</div>

				{/* Volunteering */}

				<h2 className=" text-3xl my-8">Volunteering</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card
						title="HackMelbourne Sponsorship Officer"
						body="Finding new sponsors to fund the club's events"
						imagePath="HackMelb"
					></Card>
					<Card
						title="Sustainability Tour Guide"
						body="Teaching people how to pursue a sustainable lifestyle"
						imagePath="slawn"
					></Card>
					<Card
						title="Peer Mentor"
						body="Organising events and engaging students in fun activities"
						imagePath="unimelbLogo"
					></Card>
				</div>
			</div>
		</>
	);
}
