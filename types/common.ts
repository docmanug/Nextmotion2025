// Common types used throughout the application

export interface Country {
  name: string;
  dial_code: string;
  code: string;
}

export type Locale = 'en' | 'fr';

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface VideoAsset {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
}

export interface Link {
  href: string;
  label: string;
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Theme and styling types
export type Theme = 'light' | 'dark' | 'system';

export type BackgroundVariant = 'white' | 'gray' | 'blue';

export type PaddingSize = 'sm' | 'md' | 'lg';

export type GapSize = 'sm' | 'md' | 'lg';

export type ColumnCount = 1 | 2 | 3 | 4;

// Animation and interaction types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  stagger?: number;
}

export interface InteractionState {
  isHovered: boolean;
  isFocused: boolean;
  isPressed: boolean;
  isDisabled: boolean;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type NonNullableFields<T, K extends keyof T> = T & {
  [P in K]: NonNullable<T[P]>;
};

// Event types
export interface FormEvent {
  target: {
    name: string;
    value: string | boolean | string[];
  };
}

export interface FileUploadEvent {
  file: File;
  preview?: string;
  progress?: number;
}

// Status and state types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export type SubmitStatus = {
  success: boolean;
  message: string;
} | null; 