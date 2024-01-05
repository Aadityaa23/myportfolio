"use client"; // This is a client component 👈🏽

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	EnvelopeIcon,
	PhoneIcon,
	BriefcaseIcon,
} from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Experience", href: "/#experience", current: false },
	{ name: "Projects", href: "/#projects", current: false },
	{ name: "Education", href: "/#ducation", current: false },
	{ name: "Testimonials", href: "/#testimonials", current: false },
	{ name: "About Me", href: "/AboutMe", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	return (
		<Disclosure as="nav" className="bg-green-950">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<div className="bg-emerald-800 border border-green-100 shadow-md hover:shadow-lg text-white  h-8 w-8 rounded-full flex items-center justify-center ">
										<h1>
											<a href="/">AG</a>
										</h1>
									</div>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="text-green-300 hover:bg-green-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="relative flex items-center justify-center rounded-full bg-emerald-900 text-sm border border-white hover:ring-white hover:ring-2 focus:ring-white focus:outline-none focus:ring-2 h-8 w-20">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<h3>Contact</h3>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-emerald-950  py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="mailto:aadityaa32@gmail.com"
														className={classNames(
															active ? "bg-emerald-800 text-white" : "",
															"flex flex-row items-center justify-left px-3 py-2 text-sm text-green-300"
														)}
													>
														<EnvelopeIcon className="h-8 w-8 mr-2" />
														<h4>aadityaa32@gmail.com</h4>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="tel:+61455400559"
														className={classNames(
															active ? "bg-emerald-800 text-white" : "",
															"flex flex-row items-center justify-left px-3 py-2 text-sm text-green-300"
														)}
													>
														<PhoneIcon className="h-8 w-8 mr-6" />
														<h4>(+61) 455400559</h4>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="https://www.linkedin.com/in/aadityaagupta/"
														target="_blank"
														className={classNames(
															active ? "bg-emerald-800 text-white" : "",
															"flex flex-row items-center justify-left px-3 py-2 text-sm text-green-300"
														)}
													>
														<BriefcaseIcon className="h-8 w-8 mr-12" />
														<h4>Linkedin</h4>
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className="text-green-300 hover:bg-green-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
