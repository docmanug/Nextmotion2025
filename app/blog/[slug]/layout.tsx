import { Metadata } from "next";
import he from "he";
import { ResolvingMetadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';
  const post = await fetch(`${baseUrl}/api/post?slug=${resolvedParams.slug}`).then(res => res.json());
  
  return {
    title: he.decode(post.metaTitle || post.title.rendered),
    description: he.decode(post.metaDescription || post.excerpt.rendered.replace(/<[^>]*>/g, '')),
    alternates: {
      canonical: `${baseUrl}/blog/${resolvedParams.slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
  params,
}: Props) {
  return children;
} 