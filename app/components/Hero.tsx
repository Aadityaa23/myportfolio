import Image from "next/image";
import bgimage from "../../public/herobg2.jpg";

export default function Hero() {
	return (
		<main>
			<div className="relative h-screen">
				{/* Video Container */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Use an HTML5 video element for the background */}
					<Image
						src={bgimage}
						className="w-full h-full object-cover opacity-80"
						alt="Hero Image"
					/>
				</div>

				{/* Content Overlay */}
				<div className="relative  flex items-center justify-center h-4/5">
					{/* Your Hero Content Goes Here */}
					<div className="text-white text-center">
						<h1 className="text-4xl font-bold">Aaadityaa Gupta</h1>
						<p className="mt-4 text-lg">Your hero test goes here.</p>
					</div>
				</div>
			</div>
		</main>
	);
}
