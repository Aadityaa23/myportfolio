import Image from "next/image";
import capImage from "./team2.jpg";

export default function Card(props) {
	const body = "";
	const title = "";
	const imagePath = "";

	return (
		<>
			<div className="block rounded-lg bg-emerald-900 m-8 p-1 shadow-md">
				<div
					className="flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<Image
						className="rounded-t-lg w-auto h-56"
						src={require(`../../public/${props.imagePath}.jpg`)}
						alt=""
					/>
					<a href="#!">
						<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-emerald-100 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
					</a>
				</div>
				<div className="p-3">
					<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
						{props.title}
					</h5>
					<p className="mb-3 text-base text-neutral-600 dark:text-neutral-200">
						{props.body}
					</p>
					<button
						type="button"
						className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-md focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						Button
					</button>
				</div>
			</div>
		</>
	);
}
