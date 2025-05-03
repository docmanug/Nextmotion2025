import { Metadata } from "next";
import Hero from "../../en/3d-aesthetic-simulation/components/Hero";
import StandardSection from "../../en/3d-aesthetic-simulation/components/StandardSection";
import Standard2Section from "../../en/3d-aesthetic-simulation/components/Standard2Section";
import Standard3Section from "../../en/3d-aesthetic-simulation/components/Standard3Section";
import FaqSection from "../../en/3d-aesthetic-simulation/components/FaqSection";
import DiscoverSection from "../../en/3d-aesthetic-simulation/components/DiscoverSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMessages } from "@/utils/i18n";
import ImageSection from "../../en/3d-aesthetic-simulation/components/ImageSection";

export const metadata: Metadata = {
  title:
    "Nextmotion 3D - L'application révolutionnaire pour la médecine esthétique",
  description:
    "En quelques secondes, réalisez des scans 3D hyper réalistes du visage de vos patients. Proposez des simulations 3D des procédures durant la consultation.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/3d-simulation-esthetique",
  },
};

export default async function ThreeDAestheticSimulationPage() {
  const messages = await getMessages("fr");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <ImageSection />
      <StandardSection />
      <Standard2Section />
      <Standard3Section />
      <FaqSection />
      <DiscoverSection />
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
      />
    </main>
  );
}
