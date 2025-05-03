import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "../../en/case-studies/components/Hero";
import CaseStudies from "../../en/case-studies/components/CaseStudies";
import Footer from "@/components/Footer";
import TestimonialSlider from "../../en/case-studies/components/TestinomialSlider";
import MoreCaseStudies from "../../en/case-studies/components/MoreCaseStudies";
import TryNextmotion from "../../en/case-studies/components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Nos clients parlent de nous et nous les en remercions",
  description:
    "La reconnaissance de nos clients nous guide afin de proposer des solutions en adéquation avec les attentes des professionnels de l'esthétique médicale.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/cas-clients",
  },
};

export default async function CaseStudiesPage() {
  const messages = await getMessages("fr");
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
