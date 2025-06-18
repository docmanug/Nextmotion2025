import { BlogPost } from "@/types/blog";

interface BlogPostingSchemaProps {
  post: BlogPost;
}

export const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({ post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title.rendered,
    "description": post.metaDescription || post.excerpt.rendered.replace(/<[^>]*>/g, ''),
    "image": post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    "author": {
      "@type": "Person",
      "name": "Nextmotion Author Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nextmotion",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/_next/image?url=%2Flogo.webp&w=256&q=75`
      }
    },
    "datePublished": post.date,
    "dateModified": post.modified || post.date
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BlogPostingSchema; 