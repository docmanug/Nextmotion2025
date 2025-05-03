import Hero from "../../clinic-management-software/components/Hero";
import SolutionsSection from "../../clinic-management-software/components/SolutionsSection";
import Feature2 from "../../clinic-management-software/components/Feature2";
import Feature1 from "../../clinic-management-software/components/Feature1";
import Feature3 from "../../clinic-management-software/components/Feature3";
import Feature4 from "../../clinic-management-software/components/Feature4";
import Feature5 from "../../clinic-management-software/components/Feature5";
import Feature6 from "../../clinic-management-software/components/Feature6";
import Feature7 from "../../clinic-management-software/components/Feature7";
import Feature8 from "../../clinic-management-software/components/Feature8";
import Feature9 from "../../clinic-management-software/components/Feature9";
import TryNextmotion from "../../clinic-management-software/components/TryNextmotion";
import DiscoverSection from "../../clinic-management-software/components/DiscoverSection";
import ReviewsSection from "../../clinic-management-software/components/ReviewsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMessages } from "@/utils/i18n";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logiciel Clinique Esthétique : Simplifiez la Gestion",
  description:
    "Optimisez la gestion de votre clinique esthétique avec notre solution tout-en-un",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/logiciel-consultation-esthetique",
  },
};

export default async function ClinicManagementSoftwarePage() {
  const messages = await getMessages("fr");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <Feature8 />
      <Feature9 />
      <TryNextmotion />
      <DiscoverSection />
      <ReviewsSection />
      <Footer
        professional={{
          title: t("footer.professional.title"),
          description: t("footer.professional.description"),
          button: t("footer.professional.button"),
        }}
        platform={{
          title: t("footer.platform.title"),
          links: {
            home: t("footer.platform.links.home"),
            capture: t("footer.platform.links.capture"),
            revolution: t("footer.platform.links.revolution"),
            "3d": t("footer.platform.links.3d"),
            consult: t("footer.platform.links.consult"),
            agenda: t("footer.platform.links.agenda"),
            classes: t("footer.platform.links.classes"),
            robotics: t("footer.platform.links.robotics"),
          },
        }}
        company={{
          title: t("footer.company.title"),
          links: {
            about: t("footer.company.links.about"),
            contact: t("footer.company.links.contact"),
            contents: t("footer.company.links.contents"),
            cases: t("footer.company.links.cases"),
            blog: t("footer.company.links.blog"),
            events: t("footer.company.links.events"),
            podcast: t("footer.company.links.podcast"),
            releases: t("footer.company.links.releases"),
          },
        }}
        help={{
          title: t("footer.help.title"),
          links: {
            login: t("footer.help.links.login"),
            demo: t("footer.help.links.demo"),
            privacy: t("footer.help.links.privacy"),
            legal: t("footer.help.links.legal"),
          },
        }}
        newsletter={{
          title: t("footer.newsletter.title"),
          highlight: t("footer.newsletter.highlight"),
          placeholder: t("footer.newsletter.placeholder"),
          button: t("footer.newsletter.button"),
        }}
      />
    </main>
  );
}
