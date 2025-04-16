"use client";

export default function Timeline() {
  const timelineData = [
    {
      year: "2015",
      icon: "/about/icons/about_1_icon.png",
      description:
        "Launch of the first NextMotion face & body. Two international patents.",
    },
    {
      year: "2016",
      icon: "/about/icons/about_2_icon.png",
      description:
        "Implementation of NextMotion Connect with innovative digital tools.",
    },
    {
      year: "2017",
      icon: "/about/icons/about_3_icon.png",
      description: "45 units installed in 15 countries. Raise of 575 K€.",
    },
    {
      year: "2018",
      icon: "/about/icons/about_4_icon.png",
      description:
        "AR and mixed reality. Considered as most innovative company in aesthetics.",
    },
    {
      year: "2019",
      icon: "/about/icons/about_5_icon.png",
      description:
        "Worldwide presence. Release of NextMotion Revolution. 3D and simulation features. Raise of 1 million €.",
    },
    {
      year: "2020",
      icon: "/about/icons/about_6_icon.png",
      description:
        "NextMotion achieves a world first with the development of an injector robot managed by AI",
    },
    {
      year: "2021",
      icon: "/about/icons/about_7_icon.png",
      description:
        "NextMotion V2.0: New interface, release of NextMotion Consult with accounting video-consultation, electronic signature",
    },
  ];

  const cardClasses =
    "bg-white rounded-lg p-5 flex flex-col items-center text-center relative max-w-[200px] mx-auto w-full min-h-[240px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[#051238] text-2xl md:text-3xl text-center max-w-5xl mx-auto mb-20 leading-normal font-normal">
          Since being established in 2015, NextMotion has become the world's
          fastest growing and most{" "}
          <span className="text-[#284fe6]">innovative technology company</span>{" "}
          dedicated to the aesthetic industry. We create cutting edge{" "}
          <span className="text-[#284fe6]">technology assets</span> that solve
          problems within the industry.
        </h2>

        <div className="space-y-16">
          {/* First row */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {timelineData.slice(0, 4).map((item) => (
                <div key={item.year} className={cardClasses}>
                  <div className="w-14 h-14 mb-2 flex items-center justify-center relative z-10 bg-white">
                    <img
                      src={item.icon}
                      alt={`${item.year} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#284fe6] text-[32px] font-bold mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[#051238] text-[15px] leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {timelineData.slice(4).map((item) => (
                <div key={item.year} className={cardClasses}>
                  <div className="w-14 h-14 mb-2 flex items-center justify-center relative z-10 bg-white">
                    <img
                      src={item.icon}
                      alt={`${item.year} icon`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#284fe6] text-[32px] font-bold mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[#051238] text-[15px] leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
