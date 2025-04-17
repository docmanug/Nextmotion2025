"use client";

export default function Founder() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-[#051238] text-2xl sm:text-3xl md:text-4xl text-center max-w-5xl mx-auto mb-8 sm:mb-16 font-bold">
          Innovation at the service of{" "}
          <span className="text-[#284fe6]">physicians</span> and their{" "}
          <span className="text-[#284fe6]">patients</span>
        </h2>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm max-w-sm mx-auto">
            <div className="relative w-full h-[360px]">
              <img
                src="/about/about_emmanuel.png"
                alt="Dr Emmanuel Elard"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="text-[#051238] text-base mb-6">
                Since our beginnings, we invested most of our time and money in
                R&D. We are now a fast growing company with industrial processes
                ready to conquer the world. Thanks to our experts board that
                invested €1 million in 2019, our roadmap is constantly enriched
                with disruptive solutions and updates for our clients.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#051238] font-bold text-lg">
                    Dr Emmanuel Elard
                  </h3>
                  <p className="text-[#051238] text-sm">Founder & CEO</p>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6"
                >
                  <img
                    src="/about/icons/about_link.png"
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="bg-[#F3F8FD] rounded-2xl overflow-hidden shadow-lg max-h-[420px]">
            <div className="flex flex-row h-full">
              <div className="w-[35%] h-full">
                <img
                  src="/about/about_emmanuel.png"
                  alt="Dr Emmanuel Elard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[65%] p-12 flex flex-col">
                <p className="text-[#051238] text-lg leading-[1.6] font-normal">
                  Since our beginnings, we invested most of our time and money
                  in R&D. We are now a fast growing company with industrial
                  processes ready to conquer the world. Thanks to our experts
                  board that invested €1 million in 2019, our roadmap is
                  constantly enriched with disruptive solutions and updates for
                  our clients.
                </p>
                <div className="flex items-center justify-between mt-auto pt-8">
                  <div>
                    <h3 className="text-[#051238] text-[42px] font-bold leading-[1.1]">
                      Dr Emmanuel Elard
                    </h3>
                    <p className="text-[#051238] text-[28px] font-light">
                      Founder & CEO
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11"
                  >
                    <img
                      src="/about/icons/about_link.png"
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
