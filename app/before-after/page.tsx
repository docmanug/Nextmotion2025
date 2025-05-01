import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import CaptureSection from "./components/CaptureSection";
import ConsultSection from "./components/ConsultSection";
import ThreeDSection from "./components/ThreeDSection";
import RevolutionSection from "./components/RevolutionSection";
import SimpleSection from "./components/SimpleSection";
import LogoSlider from "./components/LogoSlider";
import ReviewsSection from "./components/ReviewsSection";
import EngageSection from "./components/EngageSection";
import ComparisonSection from "./components/ComparisonSection";
import DiscoverSection from "./components/DiscoverSection";
import CommunitySection from "./components/CommunitySection";
import ApprovalSection from "./components/ApprovalSection";
import FaqSection from "./components/FaqSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMessages } from "@/utils/i18n";

export default async function SecondLandingPage() {
  const messages = await getMessages("en");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Navbar />
      <Hero />
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
