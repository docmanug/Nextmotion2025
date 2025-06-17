import { Metadata } from "next";
import he from "he";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';
  const post = await fetch(`${baseUrl}/api/post?slug=${params.slug}`).then(res => res.json());
  
  return {
    title: he.decode(post.metaTitle || post.title.rendered),
    description: he.decode(post.metaDescription || post.excerpt.rendered.replace(/<[^>]*>/g, '')),
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 