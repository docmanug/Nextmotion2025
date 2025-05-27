"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useParams, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost } from "@/types/blog";
import { EnhancedBlogPost } from "./components/BlogPost";

export default function BlogPostPage() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
	const params = useParams();
	const slug = params?.slug as string;
	const [post, setPost] = useState<BlogPost | null>(null);
	const [posts, setPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();
	}, [currentLocale]);

	useEffect(() => {
		const fetchPostData = async () => {
			const fetchedPost = await fetch(`/api/post?slug=${slug}`);
			const fetchedPostData = await fetchedPost.json();
			console.log("Fetched Post Data:", fetchedPostData);
			setPost(fetchedPostData);
		};

		const fetchPostsData = async () => {
			const fetchedPosts = await fetch(`/api/posts`);
			const fetchedPostsData = await fetchedPosts.json();
			setPosts(fetchedPostsData);
		};

		fetchPostData();
		fetchPostsData();
	}, [slug]);

	const t = useTranslations(messages?.footer || {});

	console.log("Post:", post);
	if (!messages) return null;

	return (
		<main className='min-h-screen bg-white'>
			<Navbar />
			{post && <EnhancedBlogPost post={post} posts={posts} />}
			<Footer
				professional={{
					title: t("professional.title"),
					description: t("professional.description"),
					button: t("professional.button"),
				}}
				platform={{
					title: t("platform.title"),
					links: {
						home: t("platform.links.home"),
						capture: t("platform.links.capture"),
						revolution: t("platform.links.revolution"),
						"3d": t("platform.links.3d"),
						consult: t("platform.links.consult"),
						agenda: t("platform.links.agenda"),
						classes: t("platform.links.classes"),
						robotics: t("platform.links.robotics"),
					},
				}}
				company={{
					title: t("company.title"),
					links: {
						about: t("company.links.about"),
						contact: t("company.links.contact"),
						contents: t("company.links.contents"),
						cases: t("company.links.cases"),
						blog: t("company.links.blog"),
						events: t("company.links.events"),
						podcast: t("company.links.podcast"),
						releases: t("company.links.releases"),
					},
				}}
				help={{
					title: t("help.title"),
					links: {
						login: t("help.links.login"),
						demo: t("help.links.demo"),
						privacy: t("help.links.privacy"),
						legal: t("help.links.legal"),
					},
				}}
				newsletter={{
					title: t("newsletter.title"),
					highlight: t("newsletter.highlight"),
					placeholder: t("newsletter.placeholder"),
					button: t("newsletter.button"),
				}}
			/>
		</main>
	);
}
