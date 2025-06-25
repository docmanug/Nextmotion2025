import type { Locale, Link, SEO } from './common';

// Navigation menu types
export interface MenuItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  icon?: string;
  badge?: {
    text: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  };
  children?: MenuItem[];
  disabled?: boolean;
  hidden?: boolean;
}

export interface MenuGroup {
  id: string;
  title?: string;
  items: MenuItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

export interface NavigationMenu {
  id: string;
  name: string;
  items: (MenuItem | MenuGroup)[];
  locale: Locale;
}

// Route types
export interface Route {
  path: string;
  name: string;
  component: string;
  layout?: string;
  meta?: RouteMeta;
  children?: Route[];
  redirect?: string;
  dynamic?: boolean;
}

export interface RouteMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  requiresAuth?: boolean;
  roles?: string[];
  layout?: string;
  breadcrumb?: boolean;
  sitemap?: boolean;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Page types
export interface Page {
  id: string;
  slug: string;
  title: string;
  description?: string;
  content?: string;
  seo?: SEO;
  locale: Locale;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
  template?: string;
  layout?: string;
  meta?: Record<string, any>;
}

export interface PageTemplate {
  id: string;
  name: string;
  description?: string;
  fields: PageField[];
  layout?: string;
  preview?: string;
}

export interface PageField {
  name: string;
  type: 'text' | 'textarea' | 'rich-text' | 'image' | 'file' | 'select' | 'checkbox' | 'number' | 'date' | 'color' | 'url' | 'email' | 'tel';
  label: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: any;
  options?: Array<{
    value: string;
    label: string;
  }>;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
  };
}

// Breadcrumb types
export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  icon?: string;
}

export interface Breadcrumb {
  items: BreadcrumbItem[];
  separator?: string;
  showHome?: boolean;
  homeLabel?: string;
  homeIcon?: string;
}

// Sitemap types
export interface SitemapItem {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
  news?: {
    publication: {
      name: string;
      language: string;
    };
    publication_date: string;
    title: string;
    keywords?: string;
    stock_tickers?: string;
  };
  videos?: Array<{
    thumbnail_loc: string;
    title: string;
    description: string;
    content_loc: string;
    duration?: number;
    expiration_date?: string;
    rating?: number;
    view_count?: number;
    family_friendly?: boolean;
    restriction?: string;
    gallery_loc?: string;
    price?: string;
    requires_subscription?: boolean;
    uploader?: string;
    live?: boolean;
  }>;
}

export interface Sitemap {
  items: SitemapItem[];
  xmlns?: Record<string, string>;
}

// URL and routing utilities
export interface URLParams {
  [key: string]: string | string[];
}

export interface QueryParams {
  [key: string]: string | string[] | number | boolean;
}

export interface ParsedURL {
  pathname: string;
  search: string;
  hash: string;
  query: QueryParams;
  params: URLParams;
}

// Navigation state
export interface NavigationState {
  currentPath: string;
  previousPath?: string;
  history: string[];
  breadcrumbs: BreadcrumbItem[];
  menu: NavigationMenu;
  locale: Locale;
}

// Navigation actions
export interface NavigationActions {
  navigate: (href: string, options?: NavigationOptions) => void;
  goBack: () => void;
  goForward: () => void;
  refresh: () => void;
  setLocale: (locale: Locale) => void;
}

export interface NavigationOptions {
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  locale?: Locale;
}

// Page transitions
export interface PageTransition {
  name: string;
  duration: number;
  easing: string;
  enter?: string;
  exit?: string;
  enterActive?: string;
  exitActive?: string;
}

export interface TransitionState {
  isTransitioning: boolean;
  direction: 'forward' | 'backward';
  from: string;
  to: string;
}

// Internationalization routing
export interface I18nRoute {
  path: string;
  locales: Locale[];
  defaultLocale: Locale;
  localeDetection?: boolean;
}

export interface LocaleConfig {
  code: Locale;
  name: string;
  flag?: string;
  dir?: 'ltr' | 'rtl';
  dateFormat?: string;
  numberFormat?: {
    currency: string;
    decimal: string;
    thousands: string;
  };
}

// Search and filtering
export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  author?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: 'date' | 'title' | 'relevance' | 'popularity';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'page' | 'post' | 'product' | 'category';
  score: number;
  highlights?: Array<{
    field: string;
    snippet: string;
  }>;
  meta?: Record<string, any>;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  suggestions?: string[];
  facets?: Record<string, Array<{
    value: string;
    count: number;
  }>>;
}

// Analytics and tracking
export interface PageView {
  url: string;
  title: string;
  referrer?: string;
  timestamp: string;
  sessionId: string;
  userId?: string;
  locale: Locale;
  userAgent?: string;
  ipAddress?: string;
  duration?: number;
}

export interface NavigationEvent {
  type: 'pageview' | 'click' | 'scroll' | 'form_submit';
  element?: string;
  url: string;
  timestamp: string;
  sessionId: string;
  userId?: string;
  data?: Record<string, any>;
} 