import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton({
  titleWidth = "w-1/3",
  subtitleWidth = "w-1/4",
  contentBlocks = 3,
  contentHeight = "h-32",
  contentWidth = "w-full",
  className = "min-h-screen bg-white p-8"
}: {
  titleWidth?: string;
  subtitleWidth?: string;
  contentBlocks?: number;
  contentHeight?: string;
  contentWidth?: string;
  className?: string;
} = {}) {
  return (
    <main className={className}>
      <div className="mb-8">
        <Skeleton className={`h-12 ${titleWidth} mb-4`} />
        <Skeleton className={`h-6 ${subtitleWidth}`} />
      </div>
      <div className="space-y-6">
        {Array.from({ length: contentBlocks }).map((_, i) => (
          <Skeleton key={i} className={`${contentHeight} ${contentWidth}`} />
        ))}
      </div>
    </main>
  );
} 