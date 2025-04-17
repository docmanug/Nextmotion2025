"use client";

const teamMembers = [
  {
    firstName: "yasmina",
    name: "Yasmina",
    role: "Customer success manager - France",
    linkedin: "https://www.linkedin.com",
  },
  {
    firstName: "santiago",
    name: "Santiago",
    role: "Customer success manager - International",
    linkedin: "https://www.linkedin.com/in/santiago-estrada-nicol-5a9b50143/",
  },
  {
    firstName: "romain",
    name: "Romain",
    role: "Production Manager",
    linkedin: "https://www.linkedin.com/in/romain-buisson-6229aa114/",
  },
  {
    firstName: "david",
    name: "David",
    role: "Stratégie commerciale",
    linkedin: "https://www.linkedin.com/in/david-m-41300021/",
  },
  {
    firstName: "anastasia",
    name: "Anastasia",
    role: "Marketing",
    linkedin: "https://www.linkedin.com/in/aseguigoldenberg/",
  },
];

export default function TeamMembers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[#051238] text-3xl md:text-4xl text-center mb-16 font-bold">
          In the field, <span className="text-[#284fe6]">experts</span> at your
          service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.firstName}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={`/about/about_${member.firstName}.png`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center items-center">
                <h3 className="text-[#051238] text-2xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-[#051238] text-2xl font-light text-center">
                  {member.role}
                </p>
                <div className="mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 inline-block"
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
          ))}
        </div>
      </div>
    </section>
  );
}
