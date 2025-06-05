import { getMessages } from "@/utils/i18n";
import PricingContent from "./PricingContent";

export default async function PricingAestheticSolutionPage() {
  const messages = await getMessages("en");
  return <PricingContent messages={messages} />;
}
