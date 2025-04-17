"use client";

export default function Founder() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[#051238] text-3xl md:text-4xl text-center max-w-5xl mx-auto mb-16 font-bold">
          Innovation at the service of{" "}
          <span className="text-[#284fe6]">physicians</span> and their{" "}
          <span className="text-[#284fe6]">patients</span>
        </h2>

        <div className="bg-[#F3F8FD] rounded-2xl overflow-hidden shadow-lg max-h-[420px]">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-[35%] h-full">
              <img
                src="/about/about_emmanuel.png"
                alt="Dr Emmanuel Elard"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-[65%] bg-[#F8FAFF] p-12 flex flex-col justify-between h-full">
              <p className="text-[#051238] text-lg leading-[1.6] font-normal">
                Since our beginnings, we invested most of our time and money in
                R&D. We are now a fast growing company with industrial processes
                ready to conquer the world. Thanks to our experts board that
                invested €1 million in 2019, our roadmap is constantly enriched
                with disruptive solutions and updates for our clients.
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
    </section>
  );
}
