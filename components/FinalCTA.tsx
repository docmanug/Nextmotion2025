"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function FinalCTA({
  title,
  description,
  buttonText,
  className,
}: FinalCTAProps) {
  const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);

  return (
    <Section className={cn("py-20 sm:py-24", className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <Link href={contactFormLink}>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 h-auto rounded-xl"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </Section>
  );
}