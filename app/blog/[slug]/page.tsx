"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useParams, usePathname } from "next/navigation";
import { BlogPost, Category } from "@/types/blog";
import { EnhancedBlogPost } from "./components/BlogPost";
import BlogPostingSchema from "./components/BlogPostingSchema";

export default function BlogPostPage() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
	const params = useParams();
	const slug = params?.slug as string;
	const [post, setPost] = useState<BlogPost | null>(null);
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

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
			setPost(fetchedPostData);
		};

		const fetchPostsData = async () => {
			const fetchedPosts = await fetch(`/api/posts`);
			const fetchedPostsData = await fetchedPosts.json();
			setPosts(fetchedPostsData);
		};

		const fetchCategoriesData = async () => {
			const fetchedCategories = await fetch(`/api/categories`);
			const fetchedCategoriesData = await fetchedCategories.json();
			setCategories(fetchedCategoriesData);
		};

		fetchPostData();
		fetchPostsData();
		fetchCategoriesData();
	}, [slug]);

	const t = useTranslations(messages?.footer || {});

	if (!messages) return null;

	return (
		<main className='min-h-screen bg-white'>
			{post && (
				<>
					<BlogPostingSchema post={post} />
					<EnhancedBlogPost post={post} posts={posts} categories={categories} />
				</>
			)}
		</main>
	);
}
