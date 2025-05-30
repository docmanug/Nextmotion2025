"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
	id: string;
	title: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	category: string;
	createdAt: string;
	readTime?: number;
	image?: string;
	imageAlt?: string;
	metaTitle?: string;
	metaDescription?: string;
	slug: string;
	categories: string[];
	sections?: {
		id: string;
		title: string;
	}[];
	date: string;
	_embedded?: {
		"wp:featuredmedia"?: Array<{
			source_url: string;
		}>;
		"wp:author"?: Array<{
			name: string;
		}>;
	};
}

export default function BlogPosts() {
	const [messages, setMessages] = useState<any>(null);
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [categories, setCategories] = useState<any[]>([]);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();

		const fetchData = async () => {
			const response = await fetch("/api/posts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const result = await response.json();
			setPosts(result);
		};
		fetchData();

		const fetchCategories = async () => {
			const response = await fetch("/api/categories", {
				method: "GET",
			});
			const result = await response.json();

			setCategories(result);
		};
		fetchCategories();
	}, [currentLocale]);

	const t = useTranslations(messages?.blog || {});

	if (!messages) return null;

	const popularPosts = posts.slice(0, 5);

	return (
		<section className='py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8'>
					{/* Main Posts - Left Side */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{posts.map((post) => (
							<article
								key={post.id}
								className='bg-[#EAF0F6] rounded-2xl h-fit'
							>
								<div className='relative aspect-[16/9]'>
									<Image
										src={
											post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
											""
										}
										alt={post.title.rendered}
										fill
										className='rounded-t-2xl object-cover'
									/>
								</div>
								<div className='space-y-4 px-4 py-6'>
									<Link href={`/blog/${post.slug}`} className='block'>
										<h2
											className='text-xl font-semibold hover:text-[#1650EF] transition-colors'
											dangerouslySetInnerHTML={{
												__html: post.title.rendered,
											}}
										/>
									</Link>
									<div className='flex items-center gap-2'>
										{post.category && (
											<span className='bg-white px-3 py-1 rounded-full text-sm flex items-center gap-1'>
												<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.44001 4.50743C3.44001 4.50743 3.49233 4.45511 3.59696 4.35048C3.70159 4.24585 3.75391 4.04565 3.75391 3.7499C3.75391 3.45414 3.64927 3.20163 3.44001 2.99236C3.23075 2.7831 2.97824 2.67847 2.68248 2.67847C2.38672 2.67847 2.13421 2.7831 1.92494 2.99236C1.71568 3.20163 1.61105 3.45414 1.61105 3.7499C1.61105 4.04565 1.71568 4.29817 1.92494 4.50743C2.13421 4.71669 2.38672 4.82132 2.68248 4.82132C2.97824 4.82132 3.23075 4.71669 3.44001 4.50743ZM12.6853 8.57132C12.6853 8.86708 12.582 9.1182 12.3756 9.32467L8.26562 13.443C8.04799 13.6494 7.79408 13.7527 7.50391 13.7527C7.20815 13.7527 6.95703 13.6494 6.75056 13.443L0.765625 7.44967C0.553571 7.2432 0.373605 6.96139 0.225725 6.60425C0.077846 6.24711 0.00390625 5.92065 0.00390625 5.6249V2.14275C0.00390625 1.85257 0.109933 1.60146 0.321987 1.3894C0.53404 1.17735 0.785156 1.07132 1.07533 1.07132H4.55748C4.85324 1.07132 5.17969 1.14526 5.53683 1.29314C5.89397 1.44102 6.17857 1.62099 6.39062 1.83304L12.3756 7.80961C12.582 8.02724 12.6853 8.28115 12.6853 8.57132ZM15.8996 8.57132C15.8996 8.86708 15.7963 9.1182 15.5898 9.32467L11.4799 13.443C11.2623 13.6494 11.0084 13.7527 10.7182 13.7527C10.5173 13.7527 10.3527 13.7136 10.2243 13.6355C10.096 13.5574 9.9481 13.4318 9.78069 13.2588L13.7148 9.32467C13.9213 9.1182 14.0246 8.86708 14.0246 8.57132C14.0246 8.28115 13.9213 8.02724 13.7148 7.80961L7.72991 1.83304C7.51786 1.62099 7.23326 1.44102 6.87612 1.29314C6.51897 1.14526 6.19252 1.07132 5.89676 1.07132H7.77176C8.06752 1.07132 8.39397 1.14526 8.75112 1.29314C9.10826 1.44102 9.39286 1.62099 9.60491 1.83304L15.5898 7.80961C15.7963 8.02724 15.8996 8.28115 15.8996 8.57132Z" fill="#B3B2B2" />
												</svg>
												{t(`categories.${post.category}`)}
											</span>
										)}
										<Link href='/author/nextmotion' className='text-sm flex items-center gap-1'>
											<svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.7182 11.7103C10.7182 12.3185 10.5438 12.8403 10.195 13.2756C9.84626 13.7108 9.42634 13.9285 8.93527 13.9285H1.78683C1.29576 13.9285 0.875837 13.7108 0.527065 13.2756C0.178292 12.8403 0.00390625 12.3185 0.00390625 11.7103C0.00390625 11.2359 0.0276228 10.7881 0.0750558 10.3668C0.122489 9.94549 0.210379 9.52138 0.338728 9.09448C0.467076 8.66759 0.630301 8.30207 0.828404 7.99794C1.02651 7.69381 1.28878 7.44549 1.61523 7.25296C1.94169 7.06044 2.31696 6.96418 2.74107 6.96418C3.4721 7.67847 4.34542 8.03561 5.36105 8.03561C6.37667 8.03561 7.25 7.67847 7.98103 6.96418C8.40513 6.96418 8.78041 7.06044 9.10686 7.25296C9.43331 7.44549 9.69559 7.69381 9.89369 7.99794C10.0918 8.30207 10.255 8.66759 10.3834 9.09448C10.5117 9.52138 10.5996 9.94549 10.647 10.3668C10.6945 10.7881 10.7182 11.2359 10.7182 11.7103ZM7.63365 2.01301C7.63365 2.01301 7.7906 2.16996 8.10449 2.48385C8.41839 2.79775 8.57533 3.39833 8.57533 4.28561C8.57533 5.17289 8.26144 5.93042 7.63365 6.55821C7.00586 7.186 6.24833 7.4999 5.36105 7.4999C4.47377 7.4999 3.71624 7.186 3.08845 6.55821C2.46066 5.93042 2.14676 5.17289 2.14676 4.28561C2.14676 3.39833 2.46066 2.6408 3.08845 2.01301C3.71624 1.38522 4.47377 1.07132 5.36105 1.07132C6.24833 1.07132 7.00586 1.38522 7.63365 2.01301Z" fill="#B3B2B2" />
											</svg>
											{t("posts.author")}
										</Link>
									</div>
									<p
										className='text-gray-600 text-sm'
										dangerouslySetInnerHTML={{
											__html: post.excerpt.rendered,
										}}
									/>
									<div className='pt-2'>
										<Link
											href={`/blog/${post.slug}`}
											className='text-[#1650EF] text-sm font-medium hover:underline'
										>
											{t("posts.readMore")}
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>

					{/* Sidebar - Right Side */}
					<div className='space-y-8'>
						{/* Newsletter Subscription */}
						<div className='bg-[#EAF0F6] rounded-2xl p-6'>
							<h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
								{t("sidebar.newsletter.title")}
							</h2>
							<div className='space-y-3'>
								<input
									type='email'
									placeholder={t("sidebar.newsletter.placeholder")}
									className='w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none'
								/>
								<button className='w-full bg-[#1650EF] text-white py-2.5 rounded-lg hover:bg-[#1345D1] transition-colors flex items-center justify-center gap-2'>
									{t("sidebar.newsletter.button")}
									<span role='img' aria-label='sparkles'>
										✨
									</span>
								</button>
							</div>
						</div>

						{/* Most Popular */}
						<div>
							<h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
								{t("sidebar.popular.title")}
							</h2>
							<div className='space-y-4'>
								{popularPosts.map((post) => (
									<div key={post.id} className='flex gap-3 group bg-[#EAF0F6] rounded-2xl py-4 pr-4'>
										<Link href={`/blog/${post.slug}`} className='flex gap-3'>
											<Image
												src={
													post._embedded?.["wp:featuredmedia"]?.[0]
														?.source_url || ""
												}
												alt={post.title.rendered}
												width={80}
												height={60}
												className='object-cover flex-shrink-0'
											/>
											<h3
												className='text-sm group-hover:text-[#1650EF] transition-colors'
												dangerouslySetInnerHTML={{
													__html: post.title.rendered,
												}}
											/>
										</Link>
									</div>
								))}
							</div>
						</div>

						{/* Post By Topic */}
						<div>
							<h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
								{t("sidebar.topics.title")}
							</h2>
							<div className='space-y-2'>
								<Link
									href='/blog/topic/events'
									className='block text-sm hover:text-[#1650EF]'
								>
									• {t("sidebar.topics.events")} (
									{t("sidebar.topics.count.events")})
								</Link>
								<Link
									href='/blog/topic/before-after'
									className='block text-sm hover:text-[#1650EF]'
								>
									• {t("sidebar.topics.beforeAfter")} (
									{t("sidebar.topics.count.beforeAfter")})
								</Link>
								<Link
									href='/blog/topic/digital-consultation'
									className='block text-sm hover:text-[#1650EF]'
								>
									• {t("sidebar.topics.digitalConsultation")} (
									{t("sidebar.topics.count.digitalConsultation")})
								</Link>
								<Link
									href='/blog/topic/e-learning'
									className='block text-sm hover:text-[#1650EF]'
								>
									• {t("sidebar.topics.eLearning")} (
									{t("sidebar.topics.count.eLearning")})
								</Link>
								<Link
									href='/blog/topic/case-studies'
									className='block text-sm hover:text-[#1650EF]'
								>
									• {t("sidebar.topics.caseStudies")} (
									{t("sidebar.topics.count.caseStudies")})
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Pagination */}
				<div className='flex justify-center gap-2 mt-12'>
					<span className='w-8 h-8 flex items-center justify-center bg-[#1650EF] text-white rounded'>
						1
					</span>
				</div>
			</div>
		</section>
	);
}
