import { Metadata } from "next";
import { getMessages, useTranslations } from "@/utils/i18n";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import CaptureSection from "@/components/CaptureSection";
import ConsultSection from "@/components/ConsultSection";
import ThreeDSection from "@/components/ThreeDSection";
import RevolutionSection from "@/components/RevolutionSection";
import LogoSlider from "@/components/LogoSlider";
import ApprovalSection from "@/components/ApprovalSection";
import CommunitySection from "@/components/CommunitySection";
import ReviewsSection from "@/components/ReviewsSection";
import CountryRedirect from "./components/CountryRedirect";
import { OrganizationSchema } from "./components/shared/OrganizationSchema";
import { SoftwareApplicationSchema } from "./components/shared/SoftwareApplicationSchema";

export const metadata: Metadata = {
  title:
    "Management software for aesthetic clinics: simplify your appointments and cash management.",
  description:
    "Optimize the management of your aesthetic clinic with our software dedicated to physicians, aesthetic surgeons, and managers. Simplify appointment scheduling, cash management, and much more.",
  alternates: {
    canonical: "https://www.nextmotion.net",
  },
};

export default async function Home() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <CountryRedirect />
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        demoButton={t("hero.demoButton")}
        watchButton={t("hero.watchButton")}
      />
      <SolutionsSection
        title={t("solutions.title")}
        subtitle={t("solutions.subtitle")}
        individuals={t("solutions.individuals")}
        clinics={t("solutions.clinics")}
        chains={t("solutions.chains")}
        marketing={t("solutions.marketing")}
      />
      <CaptureSection
        title={t("capture.title")}
        subtitle={t("capture.subtitle")}
        description={t("capture.description")}
        features={{
          standardization: {
            title: t("capture.features.standardization.title"),
            description: t("capture.features.standardization.description"),
          },
          experience: {
            title: t("capture.features.experience.title"),
            description: t("capture.features.experience.description"),
          },
          automation: {
            title: t("capture.features.automation.title"),
            description: t("capture.features.automation.description"),
          },
        }}
        learnMore={t("capture.learnMore")}
      />
      <ConsultSection
        title={t("consult.title")}
        subtitle={t("consult.subtitle")}
        description={t("consult.description")}
        features={{
          management: {
            title: t("consult.features.management.title"),
            description: t("consult.features.management.description"),
          },
          agenda: {
            title: t("consult.features.agenda.title"),
            description: t("consult.features.agenda.description"),
          },
          workflow: {
            title: t("consult.features.workflow.title"),
            description: t("consult.features.workflow.description"),
          },
          api: {
            title: t("consult.features.api.title"),
            description: t("consult.features.api.description"),
          },
          cloud: {
            title: t("consult.features.cloud.title"),
            description: t("consult.features.cloud.description"),
          },
        }}
        learnMore={t("consult.learnMore")}
      />
      <ThreeDSection
        title={t("threeD.title")}
        subtitle={t("threeD.subtitle")}
        description={t("threeD.description")}
        features={{
          simulation: {
            title: t("threeD.features.simulation.title"),
            description: t("threeD.features.simulation.description"),
          },
          visualization: {
            title: t("threeD.features.visualization.title"),
            description: t("threeD.features.visualization.description"),
          },
          planning: {
            title: t("threeD.features.planning.title"),
            description: t("threeD.features.planning.description"),
          },
        }}
        learnMore={t("threeD.learnMore")}
      />
      <RevolutionSection
        title={t("revolution.title")}
        subtitle={t("revolution.subtitle")}
        description={t("revolution.description")}
        features={{
          innovation: {
            title: t("revolution.features.innovation.title"),
            description: t("revolution.features.innovation.description"),
          },
          integration: {
            title: t("revolution.features.integration.title"),
            description: t("revolution.features.integration.description"),
          },
          results: {
            title: t("revolution.features.results.title"),
            description: t("revolution.features.results.description"),
          },
        }}
        learnMore={t("revolution.learnMore")}
      />
      <LogoSlider title={t("logos.title")} subtitle={t("logos.subtitle")} />
      <ReviewsSection />
      <CommunitySection
        title={t("community.title")}
        subtitle={t("community.subtitle")}
      />
      <ApprovalSection
        title={t("approval.title")}
        subtitle={t("approval.subtitle")}
        description={t("approval.description")}
        certifications={{
          medical: t("approval.certifications.medical"),
          security: t("approval.certifications.security"),
          quality: t("approval.certifications.quality"),
        }}
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
    </main>
  );
}
