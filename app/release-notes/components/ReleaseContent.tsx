"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Release {
	id: string;
	date: string;
	image: string;
	content: {
		title: string;
		description: string;
		link?: {
			text: string;
			url: string;
		};
	}[];
}

const releases: Release[] = [
	{
		id: "oct-2024",
		date: "1er Octobre 2024",
		image: "/release/release_1.jpg",
		content: [
			{
				title: "Parrainage",
				description:
					"il est maintenant possible d'ajouter un parrain (ou un filleul) depuis la création du dossier patient, vous pourrez suivre l'ensemble des patients recommandés depuis l'onglet \"informations\"",
			},
			{
				title: "",
				description:
					'Ajout de la catégorie "parrainages" depuis les paramètres de la solution. Depuis cette partie vous aurez une synthèse de tous les patients qui ont parrainé quelqu\'un, vous verrez également le montant total dépensé par les filleuls de chaque parrain',
			},
			{
				title: "Video explicative",
				description: "",
				link: {
					text: "ICI",
					url: "#",
				},
			},
		],
	},
	// Add more releases here as needed
];

export default function ReleaseContent() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<section className='py-12 sm:py-24'>
			<div className='container max-w-[1280px] mx-auto'>
				<div className='mx-4 sm:mx-6 lg:mx-12'>
					{/* Mobile Dropdown */}
					<div className='lg:hidden mb-8'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='w-full flex items-center justify-between bg-white rounded-lg border border-gray-200 px-4 py-3'
						>
							<span className='text-[#1650EF] font-bold'>1er Octobre 2024</span>
							<ChevronDown
								className={`w-5 h-5 text-[#1650EF] transition-transform ${
									isOpen ? "transform rotate-180" : ""
								}`}
							/>
						</button>
						{isOpen && (
							<div className='absolute z-20 mt-2 w-[calc(100%-2rem)] bg-white rounded-lg border border-gray-200 shadow-lg'>
								{releases.map((release) => (
									<a
										key={release.id}
										href={`#${release.id}`}
										className='block px-4 py-3 text-[#1650EF] hover:bg-gray-50 font-bold'
										onClick={() => setIsOpen(false)}
									>
										{release.date}
									</a>
								))}
							</div>
						)}
					</div>

					{/* Introduction text */}
					<div className='max-w-4xl mb-8 sm:mb-16 text-[#081F4D]/80 space-y-3 sm:space-y-4 text-sm sm:text-base'>
						<p>
							Bienvenue sur notre page Release Notes ! Ici, vous retrouverez
							toutes les dernières mises à jour et nouveautés concernant nos
							produits. Nous mettons régulièrement à jour cette section pour
							vous tenir informés des nouvelles fonctionnalités, des
							améliorations et des optimisations.
						</p>
						<p>
							Restez connectés pour ne rien manquer des évolutions qui vous
							aideront à tirer le meilleur parti de nos services.
						</p>
						<p className='text-[#1650EF]'>
							N'hésitez pas à cliquer sur les liens présents dans les
							descriptifs afin de voir ces nouveautés en action!
						</p>
					</div>

					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Desktop Sticky navigation */}
						<div className='hidden lg:block w-64 flex-shrink-0'>
							<div className='sticky top-24 bg-white z-10 py-4'>
								{releases.map((release) => (
									<a
										key={release.id}
										href={`#${release.id}`}
										className='block text-[#1650EF] hover:underline mb-4 font-bold'
									>
										{release.date}
									</a>
								))}
							</div>
						</div>

						{/* Release content */}
						<div className='flex-1'>
							{releases.map((release) => (
								<div
									key={release.id}
									id={release.id}
									className='space-y-6 sm:space-y-8 mb-12 sm:mb-16'
								>
									<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1650EF]'>
										{release.date}
									</h2>

									<div className='relative w-full aspect-[16/9] mb-8 sm:mb-12'>
										<img
											src={release.image}
											alt={`Release update illustration for ${release.date}`}
											className='w-full h-full object-cover rounded-xl sm:rounded-2xl'
										/>
									</div>

									<ul className='list-disc space-y-3 sm:space-y-4 text-[#081F4D]/80 ml-4 sm:ml-5 text-sm sm:text-base'>
										<li>
											Ajout de la fonctionnalité{" "}
											<span className='text-[#1650EF]'>"Parrainage"</span> :{" "}
											{release.content[0].description
												.split('"informations"')
												.map((part, i, arr) =>
													i === arr.length - 1 ? (
														part
													) : (
														<React.Fragment key={i}>
															{part}
															<span className='text-[#1650EF]'>
																"informations"
															</span>
														</React.Fragment>
													)
												)}
										</li>
										<li>
											{release.content[1].description
												.split('"parrainages"')
												.map((part, i, arr) =>
													i === arr.length - 1 ? (
														part
															.split("montant total dépensé")
															.map((subPart, j, subArr) =>
																j === subArr.length - 1 ? (
																	subPart
																) : (
																	<>
																		{subPart}
																		<span className='text-[#1650EF]'>
																			montant total dépensé
																		</span>
																	</>
																)
															)
													) : (
														<>
															{part}
															<span className='text-[#1650EF]'>
																"parrainages"
															</span>
														</>
													)
												)}
										</li>
										<li>
											Video explicative{" "}
											<a
												href='/contact_form'
												target='_blank'
												rel='noopener noreferrer'
												className='text-[#1650EF] hover:underline'
											>
												ICI
											</a>
										</li>
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
