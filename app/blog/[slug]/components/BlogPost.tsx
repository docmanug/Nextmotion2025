"use client";

import React, { useEffect, useState } from "react";
import { BlogPost } from "@/types/blog";
import { ReadingProgress } from "./ReadingProgress";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
interface EnhancedBlogPostProps {
  post: BlogPost;
  posts: BlogPost[];
}

export const EnhancedBlogPost: React.FC<EnhancedBlogPostProps> = ({ post, posts }) => {
  const [messages, setMessages] = useState<any>(null);
  const t = useTranslations(messages?.article || {});
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const popularPosts = posts.filter((p: BlogPost) => p.id !== post.id).slice(0, 5);

  return (
    <div className="min-h-screen pt-20">
      <ReadingProgress />

      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8'>
            {/* Main Posts - Left Side */}
            <article
              key={post.id}
            >
              <div className='relative aspect-[16/9]'>
                <Image
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    ""
                  }
                  alt={post.title.rendered}
                  fill
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
                  <Image src="/blog/nextmotion.png" alt="Author" width={80} height={80} />
                  <p className="text-neutral-500">
                    Posted by <span className="text-neutral-900">{t("author")}</span> on {new Date(post.date).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: true
                    })}
                  </p>
                </div>
                <p
                  className='font-bold text-zinc-800 text-lg'
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
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
                Topics: <span className="text-zinc-800 font-bold">{t(`topics.Events`)}</span>
              </p>
              <form className="space-y-4">
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
            <div className='space-y-8'>
              {/* Newsletter Subscription */}
              <div className='bg-[#EAF0F6] rounded-2xl p-6'>
                <h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
                  {t("newsletter.title")}
                </h2>
                <div className='space-y-3'>
                  <input
                    type='email'
                    placeholder={t("newsletter.placeholder")}
                    className='w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none'
                  />
                  <button className='w-full bg-[#1650EF] text-white py-2.5 rounded-lg hover:bg-[#1345D1] transition-colors flex items-center justify-center gap-2'>
                    {t("newsletter.button")}
                    <span role='img' aria-label='sparkles'>
                      ✨
                    </span>
                  </button>
                </div>
              </div>

              {/* Most Popular */}
              <div>
                <h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
                  {t("popular.title")}
                </h2>
                <div className='space-y-4'>
                  {popularPosts.map((post) => (
                    <div key={post.id} className='flex gap-3 group bg-[#EAF0F6] rounded-2xl py-4 pr-4'>
                      <Link href={`/blog/${post.slug}`} className='flex gap-3'>
                        <Image
                          src={
                            post._embedded?.["wp:featuredmedia"]?.[0]
                              ?.source_url || ""
                          }
                          alt={post.title.rendered}
                          width={80}
                          height={60}
                          className='object-cover flex-shrink-0'
                        />
                        <h3
                          className='text-sm group-hover:text-[#1650EF] transition-colors'
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post By Topic */}
              <div>
                <h2 className='text-[#1650EF] text-xl font-semibold mb-4'>
                  {t("topics.title")}
                </h2>
                <div className='space-y-2'>
                  <Link
                    href='/blog/topic/events'
                    className='block text-sm hover:text-[#1650EF]'
                  >
                    • {t("topics.Events")} (6)
                  </Link>
                  <Link
                    href='/blog/topic/before-after'
                    className='block text-sm hover:text-[#1650EF]'
                  >
                    • {t("topics.BeforeAfter")} (4)
                  </Link>
                  <Link
                    href='/blog/topic/digital-consultation'
                    className='block text-sm hover:text-[#1650EF]'
                  >
                    • {t("topics.DigitalConsultation")} (2)
                  </Link>
                  <Link
                    href='/blog/topic/e-learning'
                    className='block text-sm hover:text-[#1650EF]'
                  >
                    • {t("topics.ELearning")} (3)
                  </Link>
                  <Link
                    href='/blog/topic/case-studies'
                    className='block text-sm hover:text-[#1650EF]'
                  >
                    • {t("topics.CaseStudies")} (1)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedBlogPost;