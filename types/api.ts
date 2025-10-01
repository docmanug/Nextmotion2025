import type { BlogPost, Category } from "./blog";
import type { ContactFormValidation, FormSubmissionResponse } from "./forms";
import type { ApiResponse, ApiError, Pagination } from "./common";

// WordPress API types
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "draft" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, any>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      date: string;
      slug: string;
      type: string;
      link: string;
      title: {
        rendered: string;
      };
      author: number;
      caption: {
        rendered: string;
      };
      alt_text: string;
      media_type: string;
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        file: string;
        sizes: Record<
          string,
          {
            file: string;
            width: number;
            height: number;
            mime_type: string;
            source_url: string;
          }
        >;
      };
      source_url: string;
      _links: Record<string, any>;
    }>;
    "wp:author"?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: Record<string, string>;
      _links: Record<string, any>;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        link: string;
        name: string;
        slug: string;
        taxonomy: string;
        _links: Record<string, any>;
      }>
    >;
  };
  _links: Record<string, any>;
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: Record<string, any>;
  _links: Record<string, any>;
}

// API Request types
export interface PostsApiRequest {
  page?: number;
  per_page?: number;
  fields?: string[];
  category?: string;
  search?: string;
  orderby?: "date" | "title" | "id" | "include" | "relevance";
  order?: "asc" | "desc";
}

export interface CategoriesApiRequest {
  page?: number;
  per_page?: number;
  hide_empty?: boolean;
  parent?: number;
  post?: number;
  slug?: string;
}

export interface ContactFormApiRequest {
  lng: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_country: string;
  phone: string;
  profession?: string;
  practitioners?: string[];
  country: string;
  interestedIn?: string[];
  additionalInfo?: string;
}

// API Response types
export interface PostsApiResponse extends ApiResponse<BlogPost[]> {
  pagination?: Pagination;
}

export interface PostApiResponse extends ApiResponse<BlogPost> {}

export interface CategoriesApiResponse extends ApiResponse<Category[]> {
  pagination?: Pagination;
}

export interface ContactFormApiResponse extends FormSubmissionResponse {
  data?: {
    id?: string;
    submittedAt?: string;
    reference?: string;
  };
}

// Monday.com API types
export interface MondayFormSubmission {
  formId: string;
  data: {
    email: string;
    "name[first]": string;
    "name[last]": string;
    phone?: string;
    status1?: string; // profession
    status8?: string; // practitioners
    status2?: string; // country
    status6?: string; // interestedIn
    longText?: string; // additionalInfo
  };
}

export interface MondayFormResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    id?: string;
    status?: string;
  };
}

// Sitemap types
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapIndex {
  sitemaps: Array<{
    loc: string;
    lastmod?: string;
  }>;
}

// API Error handling
export interface ApiErrorResponse {
  error: ApiError;
  status: number;
  timestamp: string;
  path: string;
  method: string;
}

// API Rate limiting
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

export interface RateLimitedResponse extends ApiErrorResponse {
  rateLimit: RateLimitInfo;
}

// API Caching
export interface CacheHeaders {
  "Cache-Control"?: string;
  ETag?: string;
  "Last-Modified"?: string;
  Expires?: string;
}

// API Authentication
export interface ApiAuth {
  token?: string;
  apiKey?: string;
  sessionId?: string;
}

// API Request context
export interface ApiRequestContext {
  userAgent?: string;
  ipAddress?: string;
  timestamp: string;
  requestId: string;
  auth?: ApiAuth;
  headers: Record<string, string>;
}

// API Response metadata
export interface ApiResponseMetadata {
  requestId: string;
  timestamp: string;
  processingTime: number;
  cacheStatus?: "HIT" | "MISS" | "STALE";
  rateLimit?: RateLimitInfo;
}

// Enhanced API Response with metadata
export interface EnhancedApiResponse<T> extends ApiResponse<T> {
  metadata?: ApiResponseMetadata;
}

// API Endpoint configuration
export interface ApiEndpoint {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  auth?: boolean;
  rateLimit?: {
    windowMs: number;
    max: number;
  };
  cache?: {
    ttl: number;
    key?: string;
  };
  validation?: any; // Zod schema
}

// API Route handlers
export interface ApiRouteHandler<TRequest = any, TResponse = any> {
  (req: TRequest, context?: ApiRequestContext): Promise<TResponse>;
}

// API Middleware types
export interface ApiMiddleware {
  (req: any, res: any, next: () => void): void | Promise<void>;
}

// API Validation error
export interface ValidationError {
  field: string;
  message: string;
  code: string;
  value?: any;
}

export interface ValidationErrorResponse extends ApiErrorResponse {
  errors: ValidationError[];
}
