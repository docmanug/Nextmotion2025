"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogPosts() {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages?.blog || {});

  if (!messages) return null;

  const posts = [
    {
      id: 1,
      title: t("articles.cms2024.title"),
      subtitle: t("articles.cms2024.subtitle"),
      date: t("articles.cms2024.date"),
      location: t("articles.cms2024.location"),
      author: t("posts.author"),
      image: "/blog/blog_1.png",
      excerpt: t("articles.cms2024.excerpt"),
      category: t("posts.category"),
    },
    {
      id: 2,
      title: t("articles.aime2024.title"),
      subtitle: t("articles.aime2024.subtitle"),
      date: t("articles.aime2024.date"),
      author: t("posts.author"),
      image: "/blog/blog_1.png",
      excerpt: t("articles.aime2024.excerpt"),
      category: t("posts.category"),
    },
  ];

  const popularPosts = [
    {
      id: 1,
      title: t("articles.cms2024.title"),
      image: "/blog/blog_1.png",
    },
    {
      id: 2,
      title: t("articles.aime2024.title"),
      image: "/blog/blog_1.png",
    },
    {
      id: 3,
      title: t("articles.popularTitles.1"),
      image: "/blog/blog_1.png",
    },
    {
      id: 4,
      title: t("articles.popularTitles.2"),
      image: "/blog/blog_1.png",
    },
    {
      id: 5,
      title: t("articles.popularTitles.3"),
      image: "/blog/blog_1.png",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8">
          {/* Main Posts - Left Side */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-[#F8F9FF] rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                      <Link href="/author/nextmotion" className="text-sm">
                        {post.author}
                      </Link>
                    </div>
                    <Link href={`/blog/${post.id}`} className="block">
                      <h2 className="text-xl font-semibold hover:text-[#1650EF] transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    <div className="pt-2">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#1650EF] text-sm font-medium hover:underline"
                      >
                        {t("posts.readMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-8">
            {/* Newsletter Subscription */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
                {t("sidebar.newsletter.title")}
              </h2>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder={t("sidebar.newsletter.placeholder")}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                />
                <button className="w-full bg-[#1650EF] text-white py-2.5 rounded-lg hover:bg-[#1345D1] transition-colors flex items-center justify-center gap-2">
                  {t("sidebar.newsletter.button")}
                  <span role="img" aria-label="sparkles">
                    ✨
                  </span>
                </button>
              </div>
            </div>

            {/* Most Popular */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
                {t("sidebar.popular.title")}
              </h2>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 group">
                    <Link href={`/blog/${post.id}`} className="flex gap-3">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover flex-shrink-0"
                      />
                      <h3 className="text-sm group-hover:text-[#1650EF] transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Post By Topic */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
                {t("sidebar.topics.title")}
              </h2>
              <div className="space-y-2">
                <Link
                  href="/blog/topic/events"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • {t("sidebar.topics.events")} (
                  {t("sidebar.topics.count.events")})
                </Link>
                <Link
                  href="/blog/topic/before-after"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • {t("sidebar.topics.beforeAfter")} (
                  {t("sidebar.topics.count.beforeAfter")})
                </Link>
                <Link
                  href="/blog/topic/digital-consultation"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • {t("sidebar.topics.digitalConsultation")} (
                  {t("sidebar.topics.count.digitalConsultation")})
                </Link>
                <Link
                  href="/blog/topic/e-learning"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • {t("sidebar.topics.eLearning")} (
                  {t("sidebar.topics.count.eLearning")})
                </Link>
                <Link
                  href="/blog/topic/case-studies"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • {t("sidebar.topics.caseStudies")} (
                  {t("sidebar.topics.count.caseStudies")})
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="w-8 h-8 flex items-center justify-center bg-[#1650EF] text-white rounded">
            1
          </span>
        </div>
      </div>
    </section>
  );
}
