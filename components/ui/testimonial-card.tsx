import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
  animate?: boolean;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className,
  animate = true,
}: TestimonialCardProps) {
  const content = (
    <div className={cn(
      "bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100",
      "hover:shadow-md transition-shadow duration-300",
      className
    )}>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400"/>
        ))}
      </div>

      <blockquote className="text-gray-600 text-lg mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        {avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Icon
              src={avatar}
              alt={author}
              size="md"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          {(role || company) && (
            <div className="text-sm text-gray-500">
              {role && <span>{role}</span>}
              {role && company && <span> at </span>}
              {company && <span>{company}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
} 