"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { countries } from "../../lib/countries";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormPage() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
	const { toast } = useToast();
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isIframeLoaded, setIsIframeLoaded] = useState(false);

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();
	}, [currentLocale]);

	// Listen for messages from Monday's iframe
	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			// Check if the message is from Monday's form
			if (
				event.data &&
				typeof event.data === "string" &&
				event.data.includes("monday-form-submit-success")
			) {
				toast({
					title: t("contactForm.success.title") || "Success!",
					description:
						t("contactForm.success.message") ||
						"Your message has been sent successfully.",
					variant: "default",
				});

				// Reset the iframe visibility to allow for another submission
				setIsFormVisible(false);
				setTimeout(() => setIsFormVisible(true), 300);
			}
		};

		window.addEventListener("message", handleMessage);
		return () => {
			window.removeEventListener("message", handleMessage);
		};
	}, []);

	useEffect(() => {
		// Show the form once the component is mounted
		setIsFormVisible(true);
	}, []);

	const t = useTranslations(messages || {});

	if (!messages) return null;

	return (
		<main className='bg-white min-h-screen'>
			<Navbar />
			<section className='pt-20 pb-8 md:pt-32 md:pb-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
					<div className='grid grid-cols-1 lg:grid-cols-[45%,55%] gap-0 items-center relative'>
						{/* Form Section */}
						<div className='bg-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:mr-[-120px] relative z-20'>
							<h1 className='text-2xl sm:text-[28px] font-bold text-[#081F4D] mb-6 sm:mb-8'>
								{t("contactForm.title")}
							</h1>

							{/* Monday.com embedded form */}
							<div className='relative' style={{ minHeight: "500px" }}>
								{!isIframeLoaded && (
									<div className='absolute inset-0 flex items-center justify-center'>
										<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1650EF]'></div>
									</div>
								)}

								{isFormVisible && (
									<iframe
										src='https://forms.monday.com/forms/73df764e54603807815f0f0c516bfa65?r=use1'
										width='100%'
										height='1000px'
										style={{
											border: "0",
											opacity: isIframeLoaded ? 1 : 0,
											transition: "opacity 0.3s ease",
										}}
										onLoad={() => setIsIframeLoaded(true)}
									></iframe>
								)}
							</div>
						</div>

						{/* Image Section */}
						<div className='hidden lg:block relative z-10'>
							<div className='relative max-w-[420px] drop-shadow-2xl lg:ml-[120px]'>
								<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1650EF]/20 to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)]' />
								<Image
									src='/contact_form/contact_form_1.png'
									alt='Contact Form'
									width={420}
									height={525}
									className='rounded-2xl object-contain relative z-10 shadow-[0_20px_50px_rgba(8,31,77,0.2)]'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer
				professional={{
					title: t("footer.professional.title"),
					description: t("footer.professional.description"),
					button: t("footer.professional.button"),
				}}
				platform={{
					title: t("footer.platform.title"),
					links: {
						home: t("footer.platform.links.home"),
						capture: t("footer.platform.links.capture"),
						revolution: t("footer.platform.links.revolution"),
						"3d": t("footer.platform.links.3d"),
						consult: t("footer.platform.links.consult"),
						agenda: t("footer.platform.links.agenda"),
						classes: t("footer.platform.links.classes"),
						robotics: t("footer.platform.links.robotics"),
					},
				}}
				company={{
					title: t("footer.company.title"),
					links: {
						about: t("footer.company.links.about"),
						contact: t("footer.company.links.contact"),
						contents: t("footer.company.links.contents"),
						cases: t("footer.company.links.cases"),
						blog: t("footer.company.links.blog"),
						events: t("footer.company.links.events"),
						podcast: t("footer.company.links.podcast"),
						releases: t("footer.company.links.releases"),
					},
				}}
				help={{
					title: t("footer.help.title"),
					links: {
						login: t("footer.help.links.login"),
						demo: t("footer.help.links.demo"),
						privacy: t("footer.help.links.privacy"),
						legal: t("footer.help.links.legal"),
					},
				}}
				newsletter={{
					title: t("footer.newsletter.title"),
					highlight: t("footer.newsletter.highlight"),
					placeholder: t("footer.newsletter.placeholder"),
					button: t("footer.newsletter.button"),
				}}
			/>
		</main>
	);
}
