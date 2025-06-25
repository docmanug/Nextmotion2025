'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: 'default' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
  max?: number;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, variant = 'default', size = 'md', showLabel, animated, max = 100, ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-2',
      md: 'h-4',
      lg: 'h-6',
    };

    const variantClasses = {
      default: 'bg-primary',
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
    };

    const percentage = value ? (value / max) * 100 : 0;

    return (
      <div className="w-full">
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            'relative w-full overflow-hidden rounded-full bg-secondary',
            sizeClasses[size],
            className
          )}
          value={value}
          max={max}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              'h-full w-full flex-1 transition-all',
              variantClasses[variant],
              animated && 'animate-pulse'
            )}
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </ProgressPrimitive.Root>
        {showLabel && (
          <div className="mt-1 text-xs text-muted-foreground text-center">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
