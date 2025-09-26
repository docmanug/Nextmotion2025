import { Metadata } from "next";
import { getMessages, useTranslations } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, TrendingUp, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Nextmotion Consult v2 - Gestion des patients basée sur l'IA",
  description:
    "Système révolutionnaire de gestion des consultations basé sur l'IA pour les cliniques esthétiques. Optimisez la prise en charge des patients, automatisez la documentation et optimisez l'efficacité.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/consulter",
  },
};

export default async function ConsultPage() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages?.consult);

  const contactFormLink = "/fr/formulaire_contact";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-[120px] sm:pt-[160px] lg:pt-[200px] px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />

        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-tight text-gray-900 mb-6">
                {t("hero.h1")}
              </h1>

              <p className="text-lg sm:text-xl font-bold leading-relaxed text-gray-700 mb-8">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={contactFormLink}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 h-auto rounded-full"
                  >
                    {t("hero.ctaPrimary")}
                  </Button>
                </Link>
                <Link
                  href="https://youtu.be/5ppBRo2iFYg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-8 py-3 h-auto rounded-full"
                  >
                    {t("hero.ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/consult.webp"
                alt="Nextmotion Consult Dashboard"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {t("problems.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t("problems.items").map((item: string, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {t("features.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t("features.items").map((feature: string, index: number) => {
              const featureImages = [
                "/assistant/assistant_1.webp",
                "/contact/contact_1.webp",
                "/medical.webp",
                "/second/showcase.webp",
                "/login_1.webp",
                "/marketing.webp",
                "/assistant/assistant_2.webp",
              ];

              const gradientColors = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-green-500 to-emerald-500",
                "from-orange-500 to-red-500",
                "from-indigo-500 to-purple-500",
                "from-teal-500 to-blue-500",
                "from-rose-500 to-pink-500",
              ];

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={featureImages[index]}
                      alt={`Feature ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${gradientColors[index]} opacity-20`}
                    />

                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-gray-800 font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-start">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradientColors[index]} mr-3 mt-2 flex-shrink-0`}
                      />
                      <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                        {feature}
                      </p>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${gradientColors[index]} group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Stats */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {t("benefits.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Temps économisé */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {t("benefits.timeSaved")}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-3">15h30</div>
              <p className="text-gray-700 text-sm">
                {t("benefits.timeSavedDescription")}
              </p>
            </div>

            {/* Taux de conversion */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {t("benefits.conversionRate")}
              </div>
              <div className="text-3xl font-bold text-green-600 mb-3">+35%</div>
              <p className="text-gray-700 text-sm">
                {t("benefits.conversionRateDescription")}
              </p>
            </div>

            {/* Réduction administrative */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {t("benefits.adminTasks")}
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-3">
                -70%
              </div>
              <p className="text-gray-700 text-sm">
                {t("benefits.adminTasksDescription")}
              </p>
            </div>

            {/* Satisfaction patient */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {t("benefits.patientSatisfaction")}
              </div>
              <div className="text-3xl font-bold text-amber-600 mb-3">95%</div>
              <p className="text-gray-700 text-sm">
                {t("benefits.patientSatisfactionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                  {t("scalability.title")}
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  {t("scalability.description1")}
                </p>
                <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                  {t("scalability.description2")}
                </p>

                {/* Integration Cards - Aligned in 4 columns */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-white mb-1">
                        Agenda
                      </span>
                      <p className="text-blue-100 text-xs">
                        {t("scalability.agenda")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-white mb-1">
                        Capture
                      </span>
                      <p className="text-blue-100 text-xs">
                        {t("scalability.capture")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-white mb-1">
                        {t("scalability.portal")}
                      </span>
                      <p className="text-blue-100 text-xs">
                        {t("scalability.partage")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-white mb-1">API</span>
                      <p className="text-blue-100 text-xs">
                        {t("scalability.api")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Single CTA Button */}
                <div className="flex justify-center">
                  <Link href={contactFormLink}>
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 h-auto rounded-xl"
                    >
                      {t("scalability.button")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-6xl text-blue-100 font-serif mb-4">
                &quot;
              </div>

              <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                {t("testimonials.quote")}
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <OptimizedImage
                    src="/about/about_jean_paul.webp"
                    alt={t("testimonials.author")}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {t("testimonials.author")}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t("testimonials.author")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {t("faq.title")}
            </h2>
          </div>

          <div className="space-y-6">
            {t("faq.items").map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                  {faq.q}
                </h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg leading-relaxed text-blue-100 mb-8 max-w-3xl mx-auto">
              {t("cta.text")}
            </p>
            <Link href={contactFormLink}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 h-auto rounded-xl"
              >
                {t("cta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
