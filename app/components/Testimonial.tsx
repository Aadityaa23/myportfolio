export default function Testimonial() {
	return (
		<>
			<div className="flex flex-col items-center justify-center m-4 p-16 bg-green-100">
				<svg
					className="h-12  text-green-950"
					viewBox="0 0 24 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
						fill="currentColor"
					/>
				</svg>
				<p className="text-gray-900 p-4 text-center text-2xl md:mx-3 ">
					"Aadi was very useful resource when tasked to test out the website and
					provide insights. He was able to point out couple of user facing
					issues that we have never thought of as well as making sure the site
					is really good for accessibility. The advice he gave was clear and to
					this point and will definitely be incorporated in to the next version
					of the product."
				</p>
				<div className="flex flex-row p-4 mb-3 ">
					<p className="text-bold font-medium mr-1 text-black md:text-2xl ">
						<a href="https://www.linkedin.com/in/jasmailduck/" target="_blank">
							Jasmail Singh |
						</a>
					</p>
					<p className="text-gray-800 md:text-2xl">
						Co-founter at{" "}
						<a href="https://www.nextprep.ai/" target="_blank">
							NextPrep
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
