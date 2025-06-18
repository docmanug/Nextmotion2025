"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import React from "react";

interface BlogSidebarProps {
  t: (key: string) => string;
  categories: any[];
  popularPosts: any[];
  selectedCategoryId?: string | null;
  handleCategoryClick?: (categoryId: string) => void;
  topicsKey?: string; // e.g. 'categories' or 'topics' for translation keys
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  t,
  categories,
  popularPosts,
  selectedCategoryId,
  handleCategoryClick,
  topicsKey = "categories",
}) => (
  <div className="space-y-8">
    {/* Newsletter Subscription */}
    <div className="bg-[#EAF0F6] rounded-2xl p-6">
      <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
        {t("sidebar.newsletter.title") || t("newsletter.title")}
      </h2>
      <div className="space-y-3">
        <input
          type="email"
          placeholder={t("sidebar.newsletter.placeholder") || t("newsletter.placeholder")}
          className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
        />
        <button className="w-full bg-[#1650EF] text-white py-2.5 rounded-lg hover:bg-[#1345D1] transition-colors flex items-center justify-center gap-2">
          {t("sidebar.newsletter.button") || t("newsletter.button")}
          <span role="img" aria-label="sparkles">✨</span>
        </button>
      </div>
    </div>

    {/* Most Popular */}
    <div>
      <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
        {t("sidebar.popular.title") || t("popular.title")}
      </h2>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="flex gap-3 group bg-[#EAF0F6] rounded-2xl py-4 pr-4">
            <Link href={`/blog/${post.slug}`} className="flex gap-3">
              <OptimizedImage
                src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                alt={post.title.rendered}
                width={80}
                height={60}
                className="object-cover flex-shrink-0 w-auto"
              />
              <h3
                className="text-sm group-hover:text-[#1650EF] transition-colors"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* Post By Topic */}
    <div>
      <h2
        className="text-[#1650EF] text-xl font-semibold mb-4 cursor-pointer"
        onClick={handleCategoryClick ? () => handleCategoryClick("all") : undefined}
      >
        {t("sidebar.topics.title") || t("topics.title")}
      </h2>
      <div className="divide-y divide-gray-200">
        {categories && categories.length > 0 ? (
          categories.sort((a, b) => Number(a.id) - Number(b.id)).map((category) => (
            <div
              key={category.id}
              onClick={handleCategoryClick ? () => handleCategoryClick(category.id) : undefined}
              className={`block py-3 text-sm ${
                handleCategoryClick
                  ? selectedCategoryId === category.id
                    ? "text-[#1650EF] font-medium cursor-pointer"
                    : "hover:text-[#1650EF] cursor-pointer"
                  : "hover:text-[#1650EF]"
              }`}
            >
              • {t(`${topicsKey}.${category.name}`)} ({category.count})
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500">Loading categories...</div>
        )}
      </div>
    </div>
  </div>
);

export default BlogSidebar; 