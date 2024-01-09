"use client"; // This is a client component 👈🏽

import Image from "next/image";
import { useState } from "react"; // Import useState

export default function Card(props) {
	const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State for PopUp visibility

	const openPopUp = () => {
		setIsPopUpOpen(true);
	};

	const closePopUp = () => {
		setIsPopUpOpen(false);
	};

	return (
		<>
			<div className="block rounded-lg bg-emerald-900 m-8 p-1 shadow-md">
				<div
					className="flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat w-full h-44"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<Image
						className="rounded-lg w-full object-fill "
						src={require(`../../public/${props.imagePath}.jpg`)}
						alt=""
					/>
					<a href="#!" onClick={openPopUp}>
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
						className="inline-block rounded-lg px-6 py-2 text-xs font-medium  text-white shadow-sm transition duration-150 ease-in-out hover:bg-emerald-950 hover:shadow-lg focus:bg-emerald-950 focus:shadow-lg focus:outline-none focus:ring focus:ring-green-300"
						data-te-ripple-init
						data-te-ripple-color="light"
						onClick={openPopUp}
					>
						Learn More
					</button>
				</div>
			</div>

			{/* PopUp */}

			{isPopUpOpen && (
				<div
					className="relative z-10"
					aria-labelledby={props.title}
					role="dialog"
					aria-modal="true"
				>
					{/*
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  */}
					<div className="fixed inset-0 bg-white bg-opacity-30 transition-opacity"></div>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							{/*
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      */}
							<div className="relative transform overflow-hidden rounded-lg bg-emerald-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-emerald-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="text-center">
											<h3
												className="text-white font-semibold text-xl pb-2 "
												id="modal-title"
											>
												{props.title}
											</h3>
											<p className="text-sm text-gray-100 pb-1">
												{props.body1}
											</p>
											<p className="text-sm text-gray-100 pb-1">
												{props.body2}
											</p>
											<p className="text-sm text-gray-100 pb-1">
												{props.body3}
											</p>
											<p className="text-sm text-gray-100 pb-1 ">
												{props.body4}
											</p>
										</div>
									</div>
								</div>
								<div className="bg-emerald-900 px-4 py-3 flex items-center justify-center sm:px-6">
									<button
										type="button"
										aria-label="Close Pop Up"
										className="mt-3 inline-flex justify-center rounded-md bg-green-300 px-3 py-2 text-sm text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-white w-auto focus:bg-white"
										onClick={closePopUp}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
