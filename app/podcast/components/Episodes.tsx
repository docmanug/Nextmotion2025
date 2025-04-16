"use client";

import { useState } from "react";

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
    <section className="bg-[#F8FAFF] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Topic Section - Sticky on the left */}
          <div className="w-full lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-24">
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

          {/* Episodes Section - Right side */}
          <div className="flex-grow">
            {/* Featured Episode */}
            {featuredEpisode && (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-12">
                <div className="flex flex-col">
                  <div className="bg-[#1650EF] text-white text-xs font-medium px-3 py-1 w-fit rounded m-4 mb-0">
                    FEATURED EPISODE
                  </div>
                  <div className="p-8 flex gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#0B1C39] mb-4">
                        {featuredEpisode.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                        {featuredEpisode.description}
                      </p>
                      <a
                        href="https://creators.spotify.com/pod/profile/nextmotion/episodes/Transform-Your-Practice-into-a-Thriving-Business-Best-Practices-to-Attract-and-Retain-Patients-in-Medical-Aesthetics-e2q9l9n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center bg-[#1650EF] text-white hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF] font-semibold px-6 py-2.5 border-2 border-[#1650EF] rounded-md transition-all"
                      >
                        <svg
                          className="mr-2 w-5 h-5"
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
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={featuredEpisode.image}
                        alt={featuredEpisode.title}
                        className="w-[256px] h-[256px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Episodes Section */}
            <div className="space-y-6">
              <div className="mb-4">
                <p className="text-[#0B1C39] text-lg">
                  Showing{" "}
                  <span className="font-medium">{regularEpisodes.length}</span>{" "}
                  of{" "}
                  <span className="font-medium">{regularEpisodes.length}</span>
                </p>
              </div>
              {regularEpisodeRows.map((row, rowIndex) => (
                <div key={rowIndex} className="space-y-6">
                  {/* Row of Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {row.map((episode) => (
                      <div
                        key={episode.id}
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
                            <h3 className="text-lg font-semibold text-[#0B1C39] mb-3 line-clamp-2">
                              {episode.title}
                            </h3>
                            <button className="text-[#1650EF] font-medium">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  {row.some((episode) => episode.id === selectedEpisode) && (
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                      {row.map((episode) => {
                        if (episode.id === selectedEpisode) {
                          return (
                            <div key={episode.id} className="p-8 flex gap-8">
                              <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-[#0B1C39] mb-4">
                                  {episode.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                  {episode.description}
                                </p>
                                <a
                                  href="https://creators.spotify.com/pod/profile/nextmotion/episodes/Transform-Your-Practice-into-a-Thriving-Business-Best-Practices-to-Attract-and-Retain-Patients-in-Medical-Aesthetics-e2q9l9n"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-6 inline-flex items-center bg-[#1650EF] text-white hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF] font-semibold px-6 py-2.5 border-2 border-[#1650EF] rounded-md transition-all"
                                >
                                  <svg
                                    className="mr-2 w-5 h-5"
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
                              </div>
                              <div className="flex-shrink-0">
                                <img
                                  src={episode.image}
                                  alt={episode.title}
                                  className="w-[256px] h-[256px] object-cover rounded-lg"
                                />
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
