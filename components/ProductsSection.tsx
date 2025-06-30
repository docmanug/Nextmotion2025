"use client";

import { Section } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

interface Product {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

interface ProductsSectionProps {
  title: string;
  products: Product[];
  className?: string;
}

export default function ProductsSection({
  title,
  products,
  className,
}: ProductsSectionProps) {
  return (
    <Section className={cn("py-16 sm:py-20", className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-2xl">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {product.image && (
              <div className="mt-auto relative rounded-lg overflow-hidden shadow-md">
                <OptimizedImage
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}