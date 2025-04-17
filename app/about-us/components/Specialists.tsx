"use client";

const specialists = [
  {
    firstName: "per",
    name: "Per Heden",
    credentials: "MD, PhD",
    description:
      "Associate Professor in Plastic Surgery at the Karolinska University. Founder of Akademikliniken, Europe's largest plastic surgery hospital. Inventor of a new technology for simplified segmental fat grafting. One of the earliest users of botulinum toxin (1994) and HA fillers (1996), he has held numerous international workshops and demonstrations relating to the optimal use of these products.",
    linkedin: "https://www.linkedin.com/in/per-hedén-98607742/",
    isInstagram: false,
  },
  {
    firstName: "constantin",
    name: "Constantin Stan",
    credentials: "MD, PhD",
    description:
      "Certified Plastic and Reconstructive Surgeon and Head and Neck Surgeon at UMF Bucharest. Member of the Romanian Society of Plastic and Reconstructive Surgery, and of the International Society of Aesthetic Plastic Surgery (ISAPS and IPRAS). Active educating plastic surgeon.",
    linkedin: "https://www.linkedin.com/in/constantin-stan-md-phd-84961615a/",
    isInstagram: false,
  },
  {
    firstName: "jean_paul",
    name: "Jean-Paul Meningaud",
    credentials: "MD, PhD",
    description:
      "Maxillofacial Surgeon, Head of Department of plastic surgery, France. Member of National Academy of Surgery. Author of numerous scientific publications.",
    linkedin: "https://www.linkedin.com/in/jean-paul-meningaud-8a9a8469/",
    isInstagram: false,
  },
  {
    firstName: "nabila",
    name: "Dr. Nabila Azib",
    credentials: "MD, PhD",
    description:
      "International speaker and coauthor of several books. She has been Scientific Director of the AMWC Congress in Dubai for several years, Scientific Coordinator of the FACE Congress in Cannes, and she is now Scientific Director of the Expert2Expert Meeting in Cosmetics in Istanbul. As a Plastic Surgeon, she is able to provide in-depth insights into anatomy and the related aesthetic treatments.",
    linkedin: "https://www.instagram.com/azib_nabila/",
    isInstagram: false,
  },
  {
    firstName: "ali",
    name: "Ali Pirayesh",
    credentials: "MD, PhD",
    description:
      "Plastic, Reconstructive and Aesthetic Surgeon. President of the Dutch Society for Aesthetic Plastic Surgery. Member of the Royal College of Surgeons of England and Ireland. International expert in Aesthetic Plastic Surgery, pioneer of artificial skin.",
    linkedin: "https://www.linkedin.com/in/alipirayesh/",
    isInstagram: false,
  },
];

export default function Specialists() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-[#051238] text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-16 font-bold">
          Developed by <span className="text-[#284fe6]">specialists</span> for
          their colleagues
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {specialists.map((specialist, index) => (
            <div
              key={specialist.firstName}
              className={`bg-white md:bg-[#F3F8FD] rounded-lg md:rounded-2xl shadow-sm md:shadow-lg overflow-hidden ${
                index === specialists.length - 1
                  ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto"
                  : ""
              }`}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="relative w-full h-[400px]">
                  <img
                    src={`/about/about_${specialist.firstName}.png`}
                    alt={specialist.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#051238] text-base mb-6">
                    {specialist.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#051238] font-bold text-lg">
                        {specialist.name}
                      </h3>
                      <p className="text-[#051238] text-sm">
                        {specialist.credentials}
                      </p>
                    </div>
                    <a
                      href={specialist.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/about/icons/${
                          specialist.isInstagram
                            ? "about_instagram.png"
                            : "about_link.png"
                        }`}
                        alt={specialist.isInstagram ? "Instagram" : "LinkedIn"}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row h-full">
                <div className="w-[45%] relative">
                  <img
                    src={`/about/about_${specialist.firstName}.png`}
                    alt={specialist.name}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="w-[55%] p-8 flex flex-col">
                  <p className="text-[#051238] text-lg leading-relaxed mb-8">
                    {specialist.description}
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-[#051238] text-[38px] font-bold leading-tight">
                      {specialist.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[#051238] text-2xl">
                        {specialist.credentials}
                      </p>
                      <a
                        href={specialist.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8"
                      >
                        <img
                          src={`/about/icons/${
                            specialist.isInstagram
                              ? "about_instagram.png"
                              : "about_link.png"
                          }`}
                          alt={
                            specialist.isInstagram ? "Instagram" : "LinkedIn"
                          }
                          className="w-full h-full object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
