"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { carProps } from "@/types";

interface carDetailProps {
	openState: boolean;
	closeModal: () => void;
	car: carProps;
}
const CarDetails = ({ openState, closeModal, car }: carDetailProps) => {
	return (
		<>
			<Transition appear show={openState} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto ">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel
									className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto 
								transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5"
								>
									<button
										type="button"
										onClick={closeModal}
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
									>
										<Image
											src="/close.svg"
											alt="close"
											height={20}
											width={20}
											className="object-contain"
										/>
									</button>
									<div className="flex-1 flex flex-col gap-3">
										<div className="relative w-full h-40 bg-pattern bg-cover bg-center rounder-lg">
											<Image
												src="/hero.png"
												alt="dialog_panel-img"
												fill
												priority
												className="object-contain"
											/>
										</div>
										<div className="flex gap-3">
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="dialog_panel-img"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="dialog_panel-img"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="dialog_panel-img"
													fill
													priority
													className="object-contain"
												/>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;
