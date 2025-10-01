import type { Locale, SEO, ImageAsset, VideoAsset, Link } from './common';

export interface BlogPost {
    id: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    category: string;
    createdAt: string;
    readTime?: number;
    image?: string;
    imageAlt?: string;
    metaTitle?: string;
    metaDescription?: string;
    slug: string;
    categories: string[];
    sections?: {
        id: string;
        title: string;
    }[];
    date: string;
    modified?: string;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
        }>;
        "wp:author"?: Array<{
            name: string;
        }>;
    };
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    count: number;
}

export interface BlogAuthor {
    id: string;
    name: string;
    email?: string;
    bio?: string;
    avatar?: string;
    website?: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
    posts?: BlogPost[];
}

export interface BlogTag {
    id: string;
    name: string;
    slug: string;
    description?: string;
    count: number;
}

export interface BlogComment {
    id: string;
    postId: string;
    author: {
        name: string;
        email: string;
        website?: string;
    };
    content: string;
    date: string;
    approved: boolean;
    parentId?: string;
    replies?: BlogComment[];
}

export interface BlogPostMeta {
    views: number;
    likes: number;
    shares: number;
    comments: number;
    readingTime: number;
    featured: boolean;
    pinned: boolean;
    seo: SEO;
    schema?: Record<string, any>;
}

export interface BlogPostContent {
    blocks: ContentBlock[];
    version: string;
}

export interface ContentBlock {
    id: string;
    type: 'paragraph' | 'heading' | 'image' | 'video' | 'quote' | 'list' | 'code' | 'table' | 'embed';
    content: any;
    attributes?: Record<string, any>;
}

export interface BlogPostTemplate {
    id: string;
    name: string;
    description?: string;
    fields: BlogPostField[];
    layout?: string;
    preview?: string;
}

export interface BlogPostField {
    name: string;
    type: 'text' | 'textarea' | 'rich-text' | 'image' | 'file' | 'select' | 'checkbox' | 'number' | 'date' | 'color' | 'url' | 'email' | 'tel' | 'author' | 'category' | 'tags';
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

export interface BlogSettings {
    title: string;
    description: string;
    postsPerPage: number;
    allowComments: boolean;
    moderateComments: boolean;
    allowGuestComments: boolean;
    defaultCategory: string;
    defaultAuthor: string;
    seo: {
        defaultTitle: string;
        defaultDescription: string;
        defaultKeywords: string[];
        defaultImage: string;
    };
    social: {
        shareButtons: string[];
        twitterHandle?: string;
        facebookAppId?: string;
    };
    analytics: {
        enabled: boolean;
        trackingId?: string;
    };
}

export interface BlogSearchFilters {
    query?: string;
    category?: string;
    tags?: string[];
    author?: string;
    dateFrom?: string;
    dateTo?: string;
    featured?: boolean;
    sortBy?: 'date' | 'title' | 'views' | 'likes' | 'comments';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}

export interface BlogSearchResult {
    id: string;
    title: string;
    excerpt: string;
    url: string;
    author: string;
    category: string;
    tags: string[];
    date: string;
    image?: string;
    score: number;
    highlights?: Array<{
        field: string;
        snippet: string;
    }>;
}

export interface BlogSearchResponse {
    results: BlogSearchResult[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
    suggestions?: string[];
    facets?: {
        categories: Array<{ value: string; count: number }>;
        tags: Array<{ value: string; count: number }>;
        authors: Array<{ value: string; count: number }>;
        dates: Array<{ value: string; count: number }>;
    };
}

export interface BlogAnalytics {
    totalPosts: number;
    totalViews: number;
    totalLikes: number;
    totalComments: number;
    averageReadingTime: number;
    popularPosts: Array<{
        id: string;
        title: string;
        views: number;
        likes: number;
    }>;
    topCategories: Array<{
        name: string;
        count: number;
        views: number;
    }>;
    topAuthors: Array<{
        name: string;
        posts: number;
        views: number;
    }>;
    monthlyStats: Array<{
        month: string;
        posts: number;
        views: number;
        likes: number;
        comments: number;
    }>;
}

export interface BlogNewsletter {
    id: string;
    title: string;
    content: string;
    subject: string;
    status: 'draft' | 'scheduled' | 'sent';
    scheduledAt?: string;
    sentAt?: string;
    recipients: number;
    opens: number;
    clicks: number;
    posts: string[];
    template?: string;
}

export interface NewsletterSubscriber {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    subscribedAt: string;
    unsubscribedAt?: string;
    status: 'active' | 'unsubscribed' | 'bounced';
    preferences: {
        categories: string[];
        frequency: 'daily' | 'weekly' | 'monthly';
    };
}

export interface BlogImportData {
    posts: BlogPost[];
    categories: Category[];
    tags: BlogTag[];
    authors: BlogAuthor[];
    comments: BlogComment[];
    settings: BlogSettings;
}

export interface BlogExportOptions {
    includeDrafts: boolean;
    includeComments: boolean;
    includeMedia: boolean;
    format: 'json' | 'xml' | 'markdown';
    dateRange?: {
        from: string;
        to: string;
    };
}

export interface BlogPostsResponse {
    posts: BlogPost[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
    categories: Category[];
    tags: BlogTag[];
}

export interface BlogPostResponse {
    post: BlogPost;
    related: BlogPost[];
    comments: BlogComment[];
    meta: BlogPostMeta;
}

export interface BlogCategoriesResponse {
    categories: Category[];
    total: number;
}

export interface BlogTagsResponse {
    tags: BlogTag[];
    total: number;
}

export interface UseBlogPostOptions {
    includeComments?: boolean;
    includeRelated?: boolean;
    includeMeta?: boolean;
    prefetch?: boolean;
}

export interface UseBlogPostsOptions {
    category?: string;
    tags?: string[];
    author?: string;
    featured?: boolean;
    limit?: number;
    page?: number;
    sortBy?: 'date' | 'title' | 'views' | 'likes' | 'comments';
    sortOrder?: 'asc' | 'desc';
}

export interface BlogEvent {
    type: 'post_created' | 'post_updated' | 'post_deleted' | 'comment_added' | 'comment_approved' | 'comment_deleted';
    postId: string;
    userId?: string;
    timestamp: string;
    data?: Record<string, any>;
}

export interface BlogPermissions {
    canCreate: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canPublish: boolean;
    canModerateComments: boolean;
    canManageSettings: boolean;
    canManageUsers: boolean;
}

export interface BlogLocalization {
    locale: Locale;
    title: string;
    description: string;
    categories: Record<string, string>;
    tags: Record<string, string>;
    authors: Record<string, string>;
    settings: BlogSettings;
}