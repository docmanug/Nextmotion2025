import type { ReactNode } from 'react';
import type { 
  BackgroundVariant, 
  PaddingSize, 
  GapSize, 
  ColumnCount,
  ImageAsset,
  VideoAsset,
  Link,
  AnimationConfig,
  InteractionState
} from './common';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Layout component props
export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: PaddingSize;
  centered?: boolean;
}

export interface GridProps extends BaseComponentProps {
  cols?: ColumnCount;
  gap?: GapSize;
  responsive?: boolean;
}

export interface FlexProps extends BaseComponentProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: GapSize;
  wrap?: boolean;
}

// Section component props
export interface SectionProps extends BaseComponentProps {
  background?: BackgroundVariant;
  padding?: PaddingSize;
  fullWidth?: boolean;
  animate?: boolean;
  animationConfig?: AnimationConfig;
}

export interface SectionHeaderProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

// Card component props
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'interactive';
  padding?: PaddingSize;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export interface CardHeaderProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export interface CardContentProps extends BaseComponentProps {
  padding?: PaddingSize;
}

export interface CardFooterProps extends BaseComponentProps {
  padding?: PaddingSize;
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

// Form component props
export interface FormProps extends BaseComponentProps {
  onSubmit?: (data: any) => void;
  onReset?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export interface FormFieldProps extends BaseComponentProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'search';
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  autoComplete?: string;
}

export interface TextareaProps extends FormFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  maxLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export interface SelectProps extends FormFieldProps {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  multiple?: boolean;
  placeholder?: string;
}

export interface CheckboxProps extends FormFieldProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
}

export interface RadioGroupProps extends FormFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
}

// Media component props
export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export interface VideoProps extends BaseComponentProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

// Navigation component props
export interface NavigationProps extends BaseComponentProps {
  items: Array<{
    label: string;
    href: string;
    external?: boolean;
    children?: Array<{
      label: string;
      href: string;
      external?: boolean;
    }>;
  }>;
  variant?: 'horizontal' | 'vertical' | 'mobile';
  activeItem?: string;
}

export interface BreadcrumbProps extends BaseComponentProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  separator?: ReactNode;
}

// Content component props
export interface HeroProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: ImageAsset;
  video?: VideoAsset;
  cta?: {
    primary?: Link;
    secondary?: Link;
  };
  background?: BackgroundVariant;
  layout?: 'left' | 'center' | 'right';
}

export interface FeatureProps extends BaseComponentProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: ImageAsset;
  link?: Link;
  variant?: 'default' | 'card' | 'minimal';
}

export interface TestimonialProps extends BaseComponentProps {
  content: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  image?: ImageAsset;
  video?: VideoAsset;
}

export interface FAQProps extends BaseComponentProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

// Stats component props
export interface StatProps extends BaseComponentProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down';
    period?: string;
  };
}

// Pricing component props
export interface PricingPlanProps extends BaseComponentProps {
  name: string;
  price: {
    amount: number;
    currency: string;
    period?: string;
  };
  description?: string;
  features: string[];
  cta: Link;
  popular?: boolean;
  badge?: string;
}

// Modal component props
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface DrawerProps extends ModalProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
}

// Toast component props
export interface ToastProps extends BaseComponentProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: ReactNode;
  onClose?: () => void;
}

// Carousel component props
export interface CarouselProps extends BaseComponentProps {
  items: ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  infinite?: boolean;
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

// Chart component props
export interface ChartProps extends BaseComponentProps {
  data: any[];
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter';
  xAxis?: string;
  yAxis?: string;
  color?: string;
  height?: number;
  width?: number;
}

// Table component props
export interface TableProps extends BaseComponentProps {
  data: any[];
  columns: Array<{
    key: string;
    header: string;
    render?: (value: any, row: any) => ReactNode;
    sortable?: boolean;
    width?: number;
  }>;
  sortable?: boolean;
  pagination?: {
    page: number;
    perPage: number;
    total: number;
    onPageChange: (page: number) => void;
  };
  loading?: boolean;
  emptyMessage?: string;
}

// Progress component props
export interface ProgressProps extends BaseComponentProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
}

// Badge component props
export interface BadgeProps extends BaseComponentProps {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

// Avatar component props
export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: ReactNode;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

// Tooltip component props
export interface TooltipProps extends BaseComponentProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  disabled?: boolean;
}

// Popover component props
export interface PopoverProps extends BaseComponentProps {
  trigger: ReactNode;
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// Accordion component props
export interface AccordionProps extends BaseComponentProps {
  items: Array<{
    title: string;
    content: ReactNode;
    disabled?: boolean;
  }>;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
}

// Tabs component props
export interface TabsProps extends BaseComponentProps {
  items: Array<{
    value: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
  }>;
  defaultValue?: string;
  orientation?: 'horizontal' | 'vertical';
}

// Switch component props
export interface SwitchProps extends BaseComponentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

// Slider component props
export interface SliderProps extends BaseComponentProps {
  value?: number | number[];
  onChange?: (value: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  marks?: Array<{
    value: number;
    label: string;
  }>;
}

// Calendar component props
export interface CalendarProps extends BaseComponentProps {
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  locale?: string;
}

// File upload component props
export interface FileUploadProps extends BaseComponentProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onUpload?: (files: File[]) => void;
  onError?: (error: string) => void;
  dragAndDrop?: boolean;
  preview?: boolean;
}

// Search component props
export interface SearchProps extends BaseComponentProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  loading?: boolean;
  suggestions?: string[];
  onSuggestionSelect?: (suggestion: string) => void;
}

// Pagination component props
export interface PaginationProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
} 