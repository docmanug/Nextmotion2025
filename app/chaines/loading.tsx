import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <Skeleton className="h-10 w-1/2 mb-6" />
      <Skeleton className="h-24 w-2/3" />
    </main>
  );
} 