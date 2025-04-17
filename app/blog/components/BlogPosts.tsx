"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Discover medical innovation at the Corsica Medical Summit 2024!",
    subtitle: "à l'évènement CMS 2024",
    date: "21 et 22 juin 2024",
    location: "Le Palais des Congrès d'Ajaccio",
    author: "NextMotion",
    image: "/blog/blog_1.png",
    excerpt:
      "Ajaccio, the pearl of the Mediterranean, will host the Corsica Medical Summit (CMS) on June 21st and 22nd, 2024, at...",
    category: "Events",
  },
  {
    id: 2,
    title:
      "Robotics and Augmented Reality: Highlights from Dr. Elard's Presentation at the AIME 2024 Conference",
    subtitle: "at the AIME 2024 event",
    date: "May 30th and 31st",
    author: "NextMotion",
    image: "/blog/blog_1.png",
    excerpt:
      "The AIME 2024 conference, held in Paris on May 30th and 31st, was a resounding success, bringing together aesthetic...",
    category: "Events",
  },
];

const popularPosts = [
  {
    id: 1,
    title: "Discover medical innovation at the Corsica Medical Summit 2024!",
    image: "/blog/blog_1.png",
  },
  {
    id: 2,
    title:
      "Robotics and Augmented Reality: Highlights from Dr. Elard's Presentation at the AIME 2024 Conference",
    image: "/blog/blog_1.png",
  },
  {
    id: 3,
    title: "Join the AIME Congress 2024 with NextMotion!",
    image: "/blog/blog_1.png",
  },
  {
    id: 4,
    title: "FME Congress 2024: Were we there, and you?",
    image: "/blog/blog_1.png",
  },
  {
    id: 5,
    title: "FME 2024 Congress: witness the future of aesthetic medicine",
    image: "/blog/blog_1.png",
  },
];

export default function BlogPosts() {
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
                        NextMotion
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
                        Read More
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
                Subscribe to our newsletter
              </h2>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                />
                <button className="w-full bg-[#1650EF] text-white py-2.5 rounded-lg hover:bg-[#1345D1] transition-colors flex items-center justify-center gap-2">
                  Join the business revolution
                  <span role="img" aria-label="sparkles">
                    ✨
                  </span>
                </button>
              </div>
            </div>

            {/* Most Popular */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <h2 className="text-[#1650EF] text-xl font-semibold mb-4">
                Most Popular
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
                Post By Topic
              </h2>
              <div className="space-y-2">
                <Link
                  href="/blog/topic/events"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • Events (8)
                </Link>
                <Link
                  href="/blog/topic/before-after"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • Before & After (2)
                </Link>
                <Link
                  href="/blog/topic/digital-consultation"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • Digital Consultation (2)
                </Link>
                <Link
                  href="/blog/topic/e-learning"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • E-learning (2)
                </Link>
                <Link
                  href="/blog/topic/case-studies"
                  className="block text-sm hover:text-[#1650EF]"
                >
                  • Case studies (1)
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
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
