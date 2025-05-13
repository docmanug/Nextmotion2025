import { Metadata } from "next";
import Hero from "../../revolution/components/Hero";
import SolutionsSection from "../../revolution/components/SolutionsSection";
import DiscoverSection from "../../revolution/components/DiscoverSection";
import FaqSection from "../../revolution/components/FaqSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSection from "../../revolution/components/ImageSection";
import NewOffer from "../../revolution/components/NewOffer";
import Feature1 from "../../revolution/components/Feature1";
import Feature2 from "../../revolution/components/Feature2";
import Feature3 from "../../revolution/components/Feature3";
import Feature4 from "../../revolution/components/Feature4";
import Feature5 from "../../revolution/components/Feature5";
import Feature6 from "../../revolution/components/Feature6";
import Feature7 from "../../revolution/components/Feature7";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Des photos esthétiques inégalées",
  description:
    "Découvrez comment la machine Nextmotion Revolution, combinée à l'application NM Capture, peut transformer vos prises de photos et vidéos avant/après.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/revolution",
  },
};

export default async function RevolutionLandingPage() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);

  return (
    <main>
      <Navbar />
      <Hero />
      <ImageSection />
      <SolutionsSection />
      {/* <NewOffer /> */}
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <FaqSection />
      {/* <NewOffer /> */}
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
