import { Metadata } from "next";
import Hero from "../../before-after/components/Hero";
import SolutionsSection from "../../before-after/components/SolutionsSection";
import CaptureSection from "../../before-after/components/CaptureSection";
import ConsultSection from "../../before-after/components/ConsultSection";
import ThreeDSection from "../../before-after/components/ThreeDSection";
import RevolutionSection from "../../before-after/components/RevolutionSection";
import SimpleSection from "../../before-after/components/SimpleSection";
import LogoSlider from "../../before-after/components/LogoSlider";
import EngageSection from "../../before-after/components/EngageSection";
import ComparisonSection from "../../before-after/components/ComparisonSection";
import DiscoverSection from "../../before-after/components/DiscoverSection";
import FaqSection from "../../before-after/components/FaqSection";
import ReviewsSection from "../../before-after/components/ReviewsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMessages } from "@/utils/i18n";
import ImageSection from "../../before-after/components/ImageSection";
export const metadata: Metadata = {
  title: "Des photos et vidéos avant-après parfaitement standardisées",
  description:
    "Utilisez NM Capture pour des photos esthétiques professionnelles. Standardisez les photos de vos patients, comparez chaque détail et partagez vos résultats !",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/photos-avant-apres",
  },
};

export default async function BeforeAfterPage() {
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
      <SolutionsSection />
      <CaptureSection />
      <ConsultSection />
      <ThreeDSection />
      <RevolutionSection />
      <SimpleSection />
      <LogoSlider />
      <ReviewsSection />
      <EngageSection />
      <ComparisonSection />
      <DiscoverSection />
      <FaqSection />
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
