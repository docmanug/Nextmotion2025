"use client";

import { useState } from "react";
import Link from "next/link";

interface Episode {
  id: number;
  title: string;
  description: string;
  image: string;
  type: "featured" | "regular";
  category: string;
}

export default function Episodes() {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isTopicOpen, setIsTopicOpen] = useState(false);

  const categories = [
    "All",
    "Sales enablement",
    "Marketing",
    "Operational",
    "Imaging",
    "Customer Success",
  ];

  const episodes: Episode[] = [
    {
      id: 1,
      title:
        "Transform Your Practice into a Thriving Business: Best Practices to Attract and Retain Patients in Medical Aesthetics 🚀",
      description:
        "In this episode, Lisa and Adam dive into practical tips for aesthetic doctors and surgeons on how to grow their practice and build patient loyalty. They discuss strategies for converting leads, attracting new clients, and creating a personalized patient experience. They also highlight the importance of staying at\nthe cutting edge of innovation and using tech tools like Nextmotion Capture to enhance treatment results and transparency.",
      image: "/podcast/podcast_hero.png",
      type: "featured",
      category: "Marketing",
    },
    {
      id: 2,
      title:
        "Digital Transformation in Aesthetic Medicine: A Deep Dive with NextMotion",
      description:
        "Welcome to the NextMotion podcast, where Sam and Lisa explore the world of digital transformation in aesthetic medicine. NextMotion is a comprehensive platform tailored specifically for aesthetic clinics, offering tools to manage patient records, schedule appointments, capture before-and-after photos, handle finances, and much more.",
      image: "/podcast/podcast_hero.png",
      type: "regular",
      category: "Operational",
    },
    {
      id: 3,
      title:
        "Growing Your Aesthetic Practice: Patient Acquisition vs. Retention",
      description:
        "In this episode, we dive into two essential strategies for aesthetic medical clinics: acquiring new patients and retaining existing ones. Sam and Lisa discuss the pros and cons of each approach, including the associated costs and the impact on clinic growth.",
      image: "/podcast/podcast_hero.png",
      type: "regular",
      category: "Sales enablement",
    },
    {
      id: 4,
      title:
        "Digital Photography in Aesthetics: Elevating Patient Documentation",
      description:
        "In this episode, Sam and Lisa delve into the impact of digital photography in medical aesthetics, emphasizing its role in documenting, analyzing, and presenting treatment outcomes. They discuss the advantages of digital photography, including superior image quality, instant visualization, and simplified storage.",
      image: "/podcast/podcast_hero.png",
      type: "regular",
      category: "Imaging",
    },
    {
      id: 5,
      title: "Building Patient Loyalty in Aesthetic Clinics: Top Strategies",
      description:
        "In this episode, Sam and Lisa dive into effective strategies for patient retention in aesthetic clinics. They explore three key approaches: enhancing the patient experience, implementing loyalty programs, and developing a targeted communication strategy.",
      image: "/podcast/podcast_hero.png",
      type: "regular",
      category: "Customer Success",
    },
  ];

  const handleEpisodeClick = (episodeId: number) => {
    setSelectedEpisode(selectedEpisode === episodeId ? null : episodeId);
  };

  const featuredEpisode = episodes.find(
    (episode) => episode.type === "featured"
  );
  const regularEpisodes = episodes
    .filter((episode) => episode.type === "regular")
    .filter(
      (episode) =>
        selectedCategory === "All" || episode.category === selectedCategory
    );

  // Helper to group episodes into rows of 4
  const groupIntoRows = (episodes: Episode[]) => {
    const rows: Episode[][] = [];
    for (let i = 0; i < episodes.length; i += 4) {
      rows.push(episodes.slice(i, i + 4));
    }
    return rows;
  };

  const regularEpisodeRows = groupIntoRows(regularEpisodes);

  return (
    <section className="bg-[#F8FAFF] py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Desktop Topic Section */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-medium text-gray-900 mb-1">Topic</h3>
              <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-sm">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-3 text-left text-sm transition-colors ${
                      category === selectedCategory
                        ? "bg-[#1650EF] text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Episodes Section */}
          <div className="flex-grow">
            {/* Featured Episode */}
            {featuredEpisode && (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8 sm:mb-12">
                <div className="flex flex-col">
                  <div className="bg-[#1650EF] text-white text-xs font-medium px-3 py-1 w-fit rounded m-4 mb-0">
                    FEATURED EPISODE
                  </div>
                  <div className="p-4 sm:p-8 flex flex-col lg:flex-row gap-4 sm:gap-8">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1C39] mb-4">
                        {featuredEpisode.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {featuredEpisode.description}
                      </p>
                      <div className="flex gap-4 mt-6">
                        <a
                          href="https://creators.spotify.com/pod/profile/nextmotion/episodes/Transform-Your-Practice-into-a-Thriving-Business-Best-Practices-to-Attract-and-Retain-Patients-in-Medical-Aesthetics-e2q9l9n"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-[#1650EF] text-white hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF] font-semibold px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#1650EF] rounded-md transition-all text-sm sm:text-base"
                        >
                          <svg
                            className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 5.14v14.72a1 1 0 001.5.87l11-7.36a1 1 0 000-1.74l-11-7.36a1 1 0 00-1.5.87z"
                              fill="currentColor"
                            />
                          </svg>
                          Listen now
                        </a>
                        {featuredEpisode.title
                          .toLowerCase()
                          .includes("demo") && (
                          <Link
                            href="/contact_form"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-transparent text-[#1650EF] hover:bg-[#1650EF] hover:text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#1650EF] rounded-md transition-all text-sm sm:text-base"
                          >
                            Request a Demo
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-[256px]">
                      <img
                        src={featuredEpisode.image}
                        alt={featuredEpisode.title}
                        className="w-full h-[200px] lg:h-[256px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Topic Dropdown */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsTopicOpen(!isTopicOpen)}
                className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Topic:
                  </span>
                  <span className="text-sm text-gray-600">
                    {selectedCategory}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    isTopicOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isTopicOpen && (
                <div className="absolute z-10 mt-1 w-[calc(100%-2rem)] bg-white rounded-lg shadow-lg overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsTopicOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                        category === selectedCategory
                          ? "bg-[#1650EF] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Episodes Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="mb-4">
                <p className="text-[#0B1C39] text-base sm:text-lg">
                  Showing{" "}
                  <span className="font-medium">{regularEpisodes.length}</span>{" "}
                  of{" "}
                  <span className="font-medium">{regularEpisodes.length}</span>
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {regularEpisodes.map((episode) => (
                  <div key={episode.id} className="contents">
                    <div
                      className={`bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-transform duration-200 ${
                        selectedEpisode === episode.id ? "scale-[1.02]" : ""
                      }`}
                      onClick={() => handleEpisodeClick(episode.id)}
                    >
                      <div className="flex flex-col h-full">
                        <div className="aspect-square">
                          <img
                            src={episode.image}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-base sm:text-lg font-semibold text-[#0B1C39] mb-3 line-clamp-2">
                            {episode.title}
                          </h3>
                          <button className="text-[#1650EF] font-medium text-sm sm:text-base">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details - Shows right after the clicked card */}
                    {selectedEpisode === episode.id && (
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm col-span-full">
                        <div className="p-4 sm:p-8 flex flex-col lg:flex-row gap-4 sm:gap-8">
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1C39] mb-4">
                              {episode.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              {episode.description}
                            </p>
                            <div className="flex gap-4 mt-6">
                              <a
                                href="https://creators.spotify.com/pod/profile/nextmotion/episodes/Transform-Your-Practice-into-a-Thriving-Business-Best-Practices-to-Attract-and-Retain-Patients-in-Medical-Aesthetics-e2q9l9n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#1650EF] text-white hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF] font-semibold px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#1650EF] rounded-md transition-all text-sm sm:text-base"
                              >
                                <svg
                                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 5.14v14.72a1 1 0 001.5.87l11-7.36a1 1 0 000-1.74l-11-7.36a1 1 0 00-1.5.87z"
                                    fill="currentColor"
                                  />
                                </svg>
                                Listen now
                              </a>
                              {episode.title.toLowerCase().includes("demo") && (
                                <Link
                                  href="/contact_form"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-transparent text-[#1650EF] hover:bg-[#1650EF] hover:text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#1650EF] rounded-md transition-all text-sm sm:text-base"
                                >
                                  Request a Demo
                                </Link>
                              )}
                            </div>
                          </div>
                          <div className="flex-shrink-0 w-full lg:w-[256px]">
                            <img
                              src={episode.image}
                              alt={episode.title}
                              className="w-full h-[200px] lg:h-[256px] object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
