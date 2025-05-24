"use client";

import React from "react";
import { BlogPost } from "@/types/blog";
import BlogHero from "../../components/Hero";
import { ArticleContent } from "./ArticleContent";
import { ReadingProgress } from "./ReadingProgress";
import { RecentPosts } from "./RecentPosts";

interface EnhancedBlogPostProps {
  post: BlogPost;
  posts: BlogPost[];
}

export const EnhancedBlogPost: React.FC<EnhancedBlogPostProps> = ({ post, posts }) => {
  const recentPosts = posts
    .filter((p: BlogPost) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <ReadingProgress />
      <BlogHero />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-9">
            <ArticleContent content={post.content?.rendered} />
          </div>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <RecentPosts posts={recentPosts} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBlogPost;