import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Footer from "@/components/Footer";
import TestimonialSlider from "./components/TestinomialSlider";
import MoreCaseStudies from "./components/MoreCaseStudies";
import TryNextmotion from "./components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Our customers talk about us and we thank them for that",
  description:
    "The gratitude of our customers guides us to propose solutions in adequacy with the expectations of the professionals of the medical aesthetic.",
  alternates: {
    canonical: "https://www.nextmotion.net/case-studies",
  },
};

export default async function CaseStudiesPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Navbar />
      <Hero />
      <CaseStudies />
      <TestimonialSlider />
      <MoreCaseStudies />
      <TryNextmotion />
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
