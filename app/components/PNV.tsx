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
				<h2 className="text-white text-3xl mb-4">Projects</h2>

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
						body1="In 2023, I started reading non-fiction for the first time. The Millionaire Fastlane by M. J. DeMarco had a profound impact in particular. One of the things that DeMarco talks about in the book, is how most people are consumers in today’s world. Whether it is food, services, or content, we always seem to be consuming things. And the people who truly get ahead in life are all on the other side of the equation – producing."
						body2="Thus, I decided to make a change in my life and start something which I have always wanted to. I decided to start my own podcast. Even though it may seem like a small step, but by taking this step I have gone to the other side of the equation, and become a producer."
						body3="Through this avenue, I can explore topics that I have always been passionate about, and learn from people who are experts on them. I can share these learnings with the people around me, and hopefully make their lives a little bit better!"
						imagePath="CCThumbnail"
					></Card>
					<Card
						title="Front-End Lead"
						body="Creating wireframes and writing React code for a responsive web app"
						body1="RestEasy – A platform that makes finding your next favourite restaurant easy."
						body2="Decision paralysis is far too common in today’s society, and this is what our client wanted us to solve. Thus, me and my team of five students created a restaurant catalog application that made it easy to find new and unique restaurants. "
						body3="My role in the team was Scrum Lead and Front-End Developer. This entailed managing interactions with the client, setting goals and ensuring deadlines were met in a timely manner, creating wireframes for the product, and of course writing code and ensuring it ran smoothly."
						body4="Through this Capstone Project, I was able to apply the skills I had learned throughout university in apractical setting to create something that I am proud of. I got the opportunity to use and explore industry-standard tools and frameworks to create the application, which included MongoDB, Express, React, Material UI, and Node JS. Overall, we received great praise for the accessible and responsive design of our website, and professionalism for our teamwork and the timely deliverance of our project."
						imagePath="capstone"
					></Card>
				</div>

				{/* Volunteering */}

				<h2 className="text-white text-3xl my-8">Volunteering</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<Card
						title="HackMelbourne Sponsorship Officer"
						body="Finding new sponsors to fund the club's events"
						body1="HackMelbourne is a student club at the University of Melbourne that aims to organise hackathons to solve tech challenges, and teach the power of programming to the masses. It is a beginner friendly club, where hackathons are open to all levels, and educational workshops are delivered to teach interesting coding techniques and concepts.  "
						body2="After attending one of their workshops about building a professional portfolio and hosting it for free, I immediately fell in love with the club. So when I got the opportunity to join the club as a Sponsorship officer, I took it without much thought as I knew it would allow me to pursue my passion for tech, and bring the power of programming to new audiences."
						body3="As a sponsorship officer, I regularly interacted with the club’s sponsors to ensure their satisfaction and kept them up to date about any upcoming events. I would also often reach out to new companies to see if they were interested in sponsoring us, and fund our future events. Becoming a sponsorship officer allowed me to significantly enhance my professional communication skills, as I used both written and verbal means to communicate with our stakeholders."
						body4="Overall joining the club was an extremely rewarding experience, as I got to witness new students significantly improve their coding skills in the span of a few days, and knew that I played a small role in making that happen. Not to mention the connections I made, and the personal growth I felt along the way."
						imagePath="HackMelb"
					></Card>
					<Card
						title="Sustainability Tour Guide"
						body="Teaching people how to pursue a sustainable lifestyle"
						body1="As a Sustainability Guide, I took students and staff on tours around the Parkville campus showcasing how the university was progressing on it’s sustainability goals. Along the way, I told them many interesting facts, and gave them ways they could get more involved in the community and pursue sustainability themselves. "
						body2="This volunteering experience enabled me to learn more about a topic that I was passionate about, while simultaneously helping me improve my confidence and public speaking abilities. As someone who had never done a customer-facing job before, if was a daunting experience to talk to a large group of people. With practise and support from the sustainability team however, I was able to overcome this challenge and deliver excellent customer experiences to our participants. "
						imagePath="slawn"
					></Card>
					<Card
						title="Peer Mentor"
						body="Organising events and engaging students in fun activities"
						body1="Ever since I was a mentee in my first year, I knew I wanted to become a Peer Mentor myself. This decision was fueled by the profound impact my mentor had on my university experience, providing me with invaluable support during my initial days on campus when I felt disoriented and uncertain. The assistance I received not only helped me academically but also played a crucial role in enhancing my mental health and overall well-being. Witnessing firsthand the transformative effect that mentorship had on my university journey, I felt a strong desire to pay it forward and contribute positively to the experiences of incoming students."
						body2="In my role as a Peer Mentor, I actively engaged with first-year students, guiding them through the challenges and stresses of university life. Facilitating bi-weekly meetings with my group of mentees, I organized a variety of engaging and team-building activities to foster a sense of community and support. These sessions provided a platform for open discussions, allowing mentees to share their concerns and experiences. Offering practical tips and tricks, I aimed to equip them with the tools necessary to maintain a healthy balance between academic and personal life. Through this volunteering experience, I not only learned the importance of empathy and active listening but also developed effective communication and leadership skills."
						body3="The volunteering experience was immensely valuable, as it allowed me to contribute to the well-being of my peers while honing my own interpersonal and mentoring abilities. Witnessing the positive transformations in my mentees' lives, much like the impact my mentor had on me, reinforced the significance of creating a supportive community within the university environment. This experience not only enriched my understanding of the diverse challenges students face but also instilled in me a sense of responsibility to contribute positively to the broader university community"
						imagePath="unimelbLogo"
					></Card>
				</div>
			</div>
		</>
	);
}
