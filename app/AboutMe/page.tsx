import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<>
			<NavBar></NavBar>
			<Hero title="About Me"></Hero>
			<div className="bg-green-100 py-16 px-8 md:px-16 m-4 text-black text-left">
				<div className="md:mx-4 my-8">
					<h2 className="text-3xl font-bold mb-4">Background</h2>
					<p className="text-gray-800 mb-2">
						Hello! I'm Aadityaa Gupta, a software engineer based in Toronto,
						Canada. I enjoy creating things that live on the internet, whether
						that be websites, applications, or anything in between. My goal is
						to always build products that provide pixel-perfect, performant
						experiences.
					</p>
				</div>
				<div className="mx-4 my-8 ">
					<h2 className="text-3xl font-bold mb-4">Education</h2>
					<p className="text-gray-800 mb-2">
						I chose to study Computer Science because I have always been
						fascinated by all the magic present in our world today – from
						smartphones to airplanes, from telescopes that allow us to explore
						the depths of space, to the very machines that build those
						telescopes – the one thing that’s common across all of them is
						software. So, in order to better understand the magic, and become a
						magician myself, I decided to study computers, and learn how to
						program them.
					</p>
					<p className="text-gray-800 mb-2">
						I developed many useful skills along the way, such as how to build a
						responsive website, or clean data to train an AI model. However, the
						most important lesson my studies taught me is how to be a life-long
						learner. One aspect that is consistent about tech is that it is
						constantly changing. Thus, knowing how to learn a new framework
						quickly, or problem-solving to debug code when the answers aren’t
						available on Stack Overflow are probably the most crucial skills
						that any programmer can have.{" "}
					</p>
					<p className="text-gray-800 mb-2">
						Graduating from one of the world’s top 15 universities has truly
						been an amazing experience, and I will most certainly miss the
						beautiful architecture that always made me feel like I was at
						Hogwarts. However I am glad this chapter of my life has come to an
						end for now, and excited for whatever comes next!
					</p>
				</div>
			</div>
		</>
	);
}
