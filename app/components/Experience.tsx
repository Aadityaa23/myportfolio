import Image from "next/image";
import CCLogo from "../../public/cclogo.png";
import NABLoogo from "../../public/nablogo.png";
import TelLogo from "../../public/TelstraLogo.png";

export default function Experience() {
	return (
		<>
			<div
				id="experience"
				className="bg-green-950 flex flex-col items-center text-center py-16 px-8"
			>
				<h2 className=" text-3xl mb-4">Professional Experience</h2>

				{/* Section 1 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-8">
					{/* Logo */}
					<div className="md:w-1/3 p-8">
						<Image
							src={NABLoogo}
							alt="National Australia Bank logo"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-2/3 py-8 px-2 md:px-8">
						<h3 className="text-white text-2xl font-bold mb-1">
							National Australia Bank
						</h3>
						<h5 className="text-gray-100 text-2xl mb-3">Business Analyst</h5>
						<p className="text-gray-200">
							As part of the Strategy and Innovations team, I worked on three
							unique projects that were each focused on different aspects of
							NAB’s operations.
						</p>
						<p className="text-gray-200">
							The first one was about Web 3.0, where I took a deep dive into the
							crypto market and analysed emerging trends to future proof NAB’s
							blockchain products.
						</p>
						<p className="text-gray-200">
							In the second one I got involved with NAB’s Annual Stocktake,
							where I conducted market research on NAB’s competitors to inform
							NAB’s future strategies and create a 5-year plan.
						</p>
						<p className="text-gray-200">
							Lastly, I completed an industry project to improve employee
							satisfaction and mental health at work, where I conducted numerous
							employee interviews, collated the data, and presented my findings
							along with a step-by-setp implementation plan to the S&I
							Leadership team.
						</p>
					</div>
				</div>

				{/* Section 2 */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-center my-8">
					<div className="md:w-2/3 py-8 px-2 md:px-8">
						<h3 className="text-white text-2xl font-bold mb-1">Carbon Coin</h3>
						<h5 className="text-gray-100 text-2xl mb-3">Co-founder and CEO</h5>

						<p className="text-gray-200">
							With Carbon Coin, my mission was to create a new crypto currency
							that could help us combat the climate crisis. We accomplished this
							by linking the removal of CO2 from the atmosphere through a
							process called Direct Air Capture, to the minting of each new
							token. So that every time a new Carbon Coin was purchased, a tonne
							of CO2 would be removed from the air. Over time, the crypto
							currency would help scale the Direct Air Capture industry, and
							thus play a crucial part in carbon reduction efforts around the
							world.
						</p>
						<p className="text-gray-200">
							Although the business was not successful, being a founder has been
							an amazing experience as it gave me countless opportunities to
							develop new skills and grow as a person. For example, by
							conducting customer interviews, and conversing with potential
							partners, I significantly improve my interpersonal skills which
							are valuable in any modern workplace. By developing a website for
							the product, and creating detailed pitch decks, I enhanced my
							technical and presentation skills, which wil enable me to become
							an effective part of any team that I am a member of.
						</p>
					</div>
					{/* Logo */}
					<div className="md:w-1/3 p-8">
						<Image
							src={CCLogo}
							alt="Carbon Coin Logo"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>

				{/* Section 3 */}
				<div className="flex flex-col md:flex-row items-center justify-center my-8">
					{/* Logo */}
					<div className="md:w-1/3 p-8">
						<Image
							src={TelLogo}
							alt="Telstra Logo"
							className="w-auto h-40 rounded-lg shadow-md"
						/>
					</div>
					<div className="md:w-2/3 py-8 px-2 md:px-8">
						<h3 className="text-white text-2xl font-bold mb-1">Telstra</h3>
						<h5 className="text-gray-100 text-2xl mb-3">Data Analyst</h5>
						<p className="text-gray-200">
							Still at university, this was the first time I had a real job at a
							real company, so naturally I was quite nervous going in, and had
							no idea of what to expect. But that’s the catch, if you don’t have
							any expectations, you cannot be disappointed{" "}
						</p>
						<p className="text-gray-200">
							Joining Telstra as a Data Analytics intern was a pleasant
							surprise, as I immersed myself into it’s amazing corporate
							culture, and experienced first-hand what it is like to be an adult
							doing adult things.
						</p>
						<p className="text-gray-200">
							I got the opportunity to apply technical skills such as writing
							python scripts, and managing and querying an SQL server that I had
							learnt at university, to a real-life scenario to cleanse complex
							data and create visualisations to explain challenging concepts.
							Not to mention, I got to experience being part of an Agile team,
							and learn the benefits it can offer for managing large scale
							projects.{" "}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
