import { BlogPost, Category } from "@/types/blog";
import BlogPostingSchema from "./components/BlogPostingSchema";
import { EnhancedBlogPost } from "./components/BlogPost";
import { Metadata, ResolvingMetadata } from "next";

async function getPost(slug: string): Promise<BlogPost> {
	const res = await fetch(`https://www.nextmotion.net/api/post?slug=${slug}`, { cache: "no-store" });
	return res.json();
}

async function getPosts(): Promise<BlogPost[]> {
	const res = await fetch(`https://www.nextmotion.net/api/posts`, { cache: "no-store" });
	return res.json();
}

async function getCategories(): Promise<Category[]> {
	const res = await fetch(`https://www.nextmotion.net/api/categories`, { cache: "no-store" });
	return res.json();
}

type Props = {
	params: Promise<{ slug: string }>
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const resolvedParams = await params;
	const post = await getPost(resolvedParams.slug);
	
	return {
		title: post.title.rendered,
		description: post.excerpt.rendered,
	};
}

export default async function BlogPostPage({ params }: Props) {
	const resolvedParams = await params;
	const post = await getPost(resolvedParams.slug);
	const [posts, categories] = await Promise.all([
		getPosts(),
		getCategories(),
	]);

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