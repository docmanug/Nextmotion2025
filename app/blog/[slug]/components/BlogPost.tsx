"use client";

import React, { useEffect, useState } from "react";
import { BlogPost, Category } from "@/types/blog";
import { ReadingProgress } from "./ReadingProgress";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import BlogSidebar from "../../components/BlogSidebar";

interface EnhancedBlogPostProps {
  post: BlogPost;
  posts: BlogPost[];
  categories: Category[];
}

export const EnhancedBlogPost: React.FC<EnhancedBlogPostProps> = ({ post, posts, categories }) => {
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<any>(null);
  const t = useTranslations(messages?.article || {});
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    setMounted(true);
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const categoryMap = categories ? new Map(categories.map((category) => [category.id, category.name])) : new Map();
  const category = post.categories.map((id) => categoryMap.get(id));

  const popularPosts = posts.filter((p: BlogPost) => p.id !== post.id).slice(0, 5);

  return (
    <div className="min-h-screen pt-20">
      <ReadingProgress />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8'>
          {/* Main Posts - Left Side */}
          <article key={post.id}>
            <div className='relative aspect-[16/9]'>
              <OptimizedImage
                src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""}
                alt={post.title.rendered}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-t-2xl object-cover'
              />
            </div>
            <div className='space-y-4 py-6'>
              <h1
                className='text-3xl font-bold text-[#255FAB]'
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />
              <div className='text-sm flex items-center gap-4'>
                <OptimizedImage src="/blog/nextmotion.webp" alt="Author" width={80} height={80} />
                <p className="text-neutral-500">
                  Posted by <span className="text-neutral-900">{t("author")}</span> on {new Date(post.date).toISOString().split('T')[0]}
                </p>
              </div>
              <p
                className='font-bold text-zinc-800 text-lg'
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered,
                }}
              />
              <div
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
              <div className='space-y-6 flex flex-col justify-center items-center'>
                <div>
                  <h2 className="font-bold text-center">
                    {t("appointment.title")}
                  </h2>
                  <h2 className="font-bold text-center">
                    {t("appointment.subtitle")}
                  </h2>
                </div>
                <Button className="bg-[#1650EF] text-white hover:bg-[#1345D1]">
                  {t("appointment.button")}
                </Button>
              </div>
            </div>
            <p className="text-lg text-stone-500 py-12">
              Topics: <span className="text-zinc-800 font-bold">{t(`topics.${category}`)}</span>
            </p>
            <form className="space-y-4 pb-10">
              <div>
                <label htmlFor="firstName" className="text-xs text-stone-500">{t("contact.firstName")}</label>
                <Input type="text" id="firstName" name="firstName" className="focus-visible:ring-0 focus-visible:ring-offset-0" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-xs text-stone-500">{t("contact.lastName")}</label>
                <Input type="text" id="lastName" name="lastName" className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-stone-500" >{t("contact.email")}</label>
                <Input type="email" id="email" name="email" className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
              </div>
              <div>
                <label htmlFor="website" className="text-xs text-stone-500">{t("contact.website")}</label>
                <Input type="text" id="website" name="website" className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
              </div>
              <div>
                <label htmlFor="comment" className="text-xs text-stone-500">{t("contact.comment")}</label>
                <Textarea id="comment" name="comment" className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
              </div>
              <Button type="submit" className="w-full text-sm font-bold">{t("contact.submit")}</Button>
            </form>
          </article>

          {/* Sidebar - Right Side */}
          <BlogSidebar
            t={t}
            categories={categories}
            popularPosts={popularPosts}
            topicsKey="topics"
          />
        </div>
      </div>
    </div>
  );
};

export default EnhancedBlogPost;