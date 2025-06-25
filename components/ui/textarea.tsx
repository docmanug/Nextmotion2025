import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  maxLength?: number;
  showCharacterCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, resize = 'vertical', maxLength, showCharacterCount, value, ...props }, ref) => {
    const characterCount = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full">
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            resize === 'none' && 'resize-none',
            resize === 'vertical' && 'resize-y',
            resize === 'horizontal' && 'resize-x',
            resize === 'both' && 'resize',
            className
          )}
          ref={ref}
          maxLength={maxLength}
          {...props}
        />
        {(error || helperText || (showCharacterCount && maxLength)) && (
          <div className="mt-1 flex justify-between items-center text-xs">
            <div>
              {error && <p className="text-destructive">{error}</p>}
              {helperText && !error && <p className="text-muted-foreground">{helperText}</p>}
            </div>
            {showCharacterCount && maxLength && (
              <span className="text-muted-foreground">
                {characterCount}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
