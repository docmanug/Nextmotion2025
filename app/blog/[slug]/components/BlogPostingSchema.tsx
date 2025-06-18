import { BlogPost } from "@/types/blog";

interface BlogPostingSchemaProps {
  post: BlogPost;
}

export const BlogPostingSchema: React.FC<BlogPostingSchemaProps> = ({ post }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // Get author name if available
  const authorName = post._embedded?.["wp:author"]?.[0]?.name || "Nextmotion Author Team";

  // Get featured image URL if available
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || post.image || "";

  // Use direct logo URL (should be a real image, not Next.js proxy)
  const logoUrl = `${baseUrl}/public/logos/logo.webp`;

  // Ensure date fields are in ISO 8601 format
  const datePublished = new Date(post.date).toISOString();
  const dateModified = post.modified ? new Date(post.modified).toISOString() : datePublished;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title.rendered,
    "description": post.metaDescription || post.excerpt.rendered.replace(/<[^>]*>/g, ''),
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nextmotion",
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    // Optional fields for better SEO
    ...(post.content?.rendered && { "articleBody": post.content.rendered.replace(/<[^>]*>/g, '') }),
    ...(post.categories && post.categories.length > 0 && { "keywords": post.categories.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BlogPostingSchema; 