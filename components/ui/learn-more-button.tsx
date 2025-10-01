import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LearnMoreButtonProps {
  text: string;
  defaultPath: string;
  frenchPath?: string;
  className?: string;
}

export function LearnMoreButton({
  text,
  defaultPath,
  frenchPath,
  className,
}: LearnMoreButtonProps) {
  const [link, setLink] = useState(defaultPath);

  useEffect(() => {
    setLink(
      window.location.pathname.startsWith("/fr")
        ? frenchPath || defaultPath
        : defaultPath
    );
  }, [defaultPath, frenchPath]);

  return (
    <Link href={link}>
      <Button
        variant="outline"
        size="lg"
        className={cn(
          "w-full sm:w-auto border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-6 sm:px-8 py-3 text-[14px] sm:text-[16px] font-semibold h-auto",
          className
        )}
      >
        {text}
      </Button>
    </Link>
  );
} 