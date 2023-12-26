export default function Hero() {
	return (
		<main>
			<div className="relative h-screen">
				{/* Video Container */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Use an HTML5 video element for the background */}
					<video
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover opacity-80"
						src={require("./planethopf.mp4")}
					/>
				</div>

				{/* Content Overlay */}
				<div className="relative z-10 flex items-center justify-center h-full">
					{/* Your Hero Content Goes Here */}
					<div className="text-white text-center">
						<h1 className="text-4xl font-bold">Aaadityaa Gupta</h1>
						<p className="mt-4 text-lg">Your hero description goes here.</p>
					</div>
				</div>
			</div>
		</main>
	);
}
