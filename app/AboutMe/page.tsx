import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<Hero title="About Me"></Hero>

			<div className="min-h-screen flex flex-col md:flex-row bg-green-100">
				<div className="flex flex-row w-full md:flex-col md:w-1/5 bg-green-300 rounded-r-3xl overflow-hidden">
					<div className="flex items-center justify-center p-8 md:mt-20 shadow-md">
						<h3 className="text-2xl  text-green-950">On This Page</h3>
					</div>
					<ul className="flex flex-col py-4 justify-center items-left">
						<li>
							<a
								href="#background"
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-black pl-8"
							>
								<span className="text-sm font-medium">Background</span>
							</a>
						</li>
						<li>
							<a
								href="#education"
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-black pl-8"
							>
								<span className="text-sm font-medium">Education</span>
							</a>
						</li>
						<li>
							<a
								href="#disability"
								className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-700 hover:text-black pl-8"
							>
								<span className="text-sm font-medium">
									living with a disability
								</span>
							</a>
						</li>
					</ul>
				</div>

				{/* Page Content */}

				<div className="bg-green-100 w-4/5 py-16 px-8 md:px-16 m-4 text-black text-left">
					<div id="background" className="md:mx-4 my-8">
						<h2 className="text-3xl font-bold mb-4">Background</h2>
						<p className="text-gray-800 mb-2">
							Born in India, raised in Canada, and just finished my Computer
							Science degree in Australia. Needless to say, I have a diverse
							background, and enjoy being a part of diverse groups of people.
							Having lived across three continents, I can adapt to changes
							quickly, and find it easy to connect with people from all walks of
							life. This, coupled with my curious nature, makes me a creative
							problem-solver who can work efficiently in dynamic environments to
							drive positive change in an organisation.
						</p>
						<p className="text-gray-800 mb-2">
							Growing up in Canada, I witnessed the beauty that untamed nature
							has to offer. Skiing in the Rocky Mountains, or camping in Banff
							National Park, always made me feel at peace with the world, and a
							sense of calm that I could not replicate elsewhere. That is why
							when I started to learn more about climate change, and the impact
							it was having on our natural ecosystems, I knew I wanted to pursue
							a career that would allow me to make a difference.{" "}
						</p>
						<p className="text-gray-800 mb-2">
							Due to this, I have taken part in many climate-related
							initiatives, one of them being Startmate’s Climate Tech
							Fellowship. Through this fellowship I gained valuable insights
							about the Climate Tech ecosystem in Australia, and got the
							opportunity to network with numerous mentors and professionals who
							are looking to transition into this industry.
						</p>
					</div>
					<div id="education" className="mx-4 my-8 ">
						<h2 className="text-3xl font-bold mb-4">Education</h2>
						<p className="text-gray-800 mb-2">
							I chose to study Computer Science because I have always been
							fascinated by all the magic present in our world today – from
							smartphones to airplanes, from telescopes that allow us to explore
							the depths of space, to the very machines that build those
							telescopes – the one thing that’s common across all of them is
							software. So, in order to better understand the magic, and become
							a magician myself, I decided to study computers, and learn how to
							program them.
						</p>
						<p className="text-gray-800 mb-2">
							I developed many useful skills along the way, such as how to build
							a responsive website, or clean data to train an AI model. However,
							the most important lesson my studies taught me is how to be a
							life-long learner. One aspect that is consistent about tech is
							that it is constantly changing. Thus, knowing how to learn a new
							framework quickly, or problem-solving to debug code when the
							answers aren’t available on Stack Overflow are probably the most
							crucial skills that any programmer can have.{" "}
						</p>
						<p className="text-gray-800 mb-2">
							Graduating from one of the world’s top 15 universities has truly
							been an amazing experience, and I will most certainly miss the
							beautiful architecture that always made me feel like I was at
							Hogwarts. However I am glad this chapter of my life has come to an
							end for now, and excited for whatever comes next!
						</p>
					</div>
					<div id="disability" className="md:mx-4 my-8">
						<h2 className="text-3xl font-bold mb-4">
							Living With A Disability
						</h2>
						<p className="text-gray-800 mb-2">
							Living with a visual impairment has always been a challenge, but I
							am the type of person who loves challenges, as they allow me to
							test my creativity as I often need to find innovative ways to
							overcome them. This has made me into an extremely resilient
							person, who is never easily stressed, and always can remain calm
							during tough circumstances.
						</p>
						<p className="text-gray-800 mb-2">
							Since I studied Computer Science and Web Development at
							university, I have a unique position that I can leverage to aid
							the development of accessible software that ensures inclusivity.
							Having lived with low vision, I can use screen-readers and text to
							speech softwares to test whether applications are accessible. In
							case they are not, I can easily make and suggest changes to the
							code to ensure ease of access due to my technical background.
						</p>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
