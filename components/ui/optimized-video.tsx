import { useEffect, useRef, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  lazyLoad?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const OptimizedVideo = forwardRef<HTMLVideoElement, OptimizedVideoProps>(({
  src,
  poster,
  className,
  lazyLoad = true,
  autoplay = false,
  loop = false,
  muted = false,
  playsInline = true,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!lazyLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (ref && 'current' in ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazyLoad, ref]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn("relative", className)}>
      <video
        ref={ref}
        src={isVisible ? src : undefined}
        poster={poster}
        className={cn(
          "w-full h-full object-cover",
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100",
          "transition-opacity duration-300"
        )}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoadedData={handleLoadedData}
        {...props}
      />
    </div>
  );
});

OptimizedVideo.displayName = 'OptimizedVideo'; 