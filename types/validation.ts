import { z } from 'zod';
import type { 
  ContactFormValidation, 
  NewsletterFormValidation, 
  LoginFormValidation, 
  RegistrationFormValidation,
  ProfessionalInfoValidation 
} from './forms';

// Base validation schemas
export const emailSchema = z.string().email('Invalid email address');

export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number');

export const phoneSchema = z.string()
  .min(1, 'Phone number is required')
  .regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number format');

export const urlSchema = z.string().url('Invalid URL format');

export const dateSchema = z.string().datetime('Invalid date format');

// Name validation schemas
export const firstNameSchema = z.string()
  .min(1, 'First name is required')
  .max(50, 'First name is too long')
  .regex(/^[a-zA-Z\s\-']+$/, 'First name contains invalid characters');

export const lastNameSchema = z.string()
  .min(1, 'Last name is required')
  .max(50, 'Last name is too long')
  .regex(/^[a-zA-Z\s\-']+$/, 'Last name contains invalid characters');

// Address validation schemas
export const addressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State/Province is required'),
  zipCode: z.string().min(1, 'ZIP/Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

// Company validation schemas
export const companySchema = z.object({
  name: z.string().min(1, 'Company name is required'),
  website: urlSchema.optional(),
  industry: z.string().optional(),
  size: z.enum(['1-10', '11-50', '51-200', '201-1000', '1000+']).optional(),
});

// File validation schemas
export const fileSchema = z.object({
  name: z.string(),
  size: z.number().max(10 * 1024 * 1024, 'File size must be less than 10MB'), // 10MB limit
  type: z.string().refine((type) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    return allowedTypes.includes(type);
  }, 'File type not allowed'),
});

export const imageSchema = fileSchema.refine((file) => {
  const imageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  return imageTypes.includes(file.type);
}, 'File must be an image');

// API request validation schemas
export const paginationSchema = z.object({
  page: z.number().int().min(1, 'Page must be at least 1').default(1),
  perPage: z.number().int().min(1, 'Per page must be at least 1').max(100, 'Per page cannot exceed 100').default(10),
});

export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required').max(100, 'Search query is too long'),
  filters: z.record(z.any()).optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

// Form validation schemas
export const contactFormValidationSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  countryCode: z.string().min(1, 'Country code is required'),
  profession: z.string().optional(),
  practitioners: z.array(z.string()).optional(),
  country: z.string().min(1, 'Country is required'),
  interestedIn: z.array(z.string()).optional(),
  additionalInfo: z.string().max(1000, 'Message is too long').optional(),
});

export const newsletterFormValidationSchema = z.object({
  email: emailSchema,
  firstName: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to receive newsletters'),
  preferences: z.object({
    categories: z.array(z.string()).optional(),
    frequency: z.enum(['daily', 'weekly', 'monthly']).default('weekly'),
  }).optional(),
});

export const loginFormValidationSchema = z.object({
  email: emailSchema,
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
  captcha: z.string().optional(),
});

export const registrationFormValidationSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
  newsletter: z.boolean().optional(),
  company: companySchema.optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const professionalInfoValidationSchema = z.object({
  profession: z.string().min(1, 'Profession is required'),
  specialty: z.array(z.string()).min(1, 'At least one specialty is required'),
  experience: z.enum(['beginner', 'intermediate', 'expert']),
  practiceType: z.enum(['private', 'clinic', 'hospital', 'academic']),
  practitioners: z.number().min(1, 'Number of practitioners is required'),
  certifications: z.array(z.string()).optional(),
  education: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number().int().min(1900).max(new Date().getFullYear()),
  })).optional(),
});

// Blog validation schemas
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title is too long'),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().max(500, 'Excerpt is too long').optional(),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
  seo: z.object({
    title: z.string().max(60, 'SEO title is too long').optional(),
    description: z.string().max(160, 'SEO description is too long').optional(),
    keywords: z.array(z.string()).optional(),
  }).optional(),
});

export const blogCommentSchema = z.object({
  content: z.string().min(1, 'Comment is required').max(1000, 'Comment is too long'),
  author: z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
    email: emailSchema,
    website: urlSchema.optional(),
  }),
  parentId: z.string().optional(),
});

// API response validation schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
  timestamp: z.string().optional(),
});

export const errorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  code: z.string().optional(),
  details: z.record(z.any()).optional(),
  timestamp: z.string(),
});

// Validation utilities
export const validateEmail = (email: string): boolean => {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  try {
    passwordSchema.parse(password);
    return { isValid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, errors: error.errors.map(e => e.message) };
    }
    return { isValid: false, errors: ['Invalid password'] };
  }
};

export const validatePhone = (phone: string): boolean => {
  try {
    phoneSchema.parse(phone);
    return true;
  } catch {
    return false;
  }
};

export const validateUrl = (url: string): boolean => {
  try {
    urlSchema.parse(url);
    return true;
  } catch {
    return false;
  }
};

// Form validation helpers
export const validateForm = <T>(schema: z.ZodSchema<T>, data: unknown): { isValid: boolean; errors: Record<string, string[]>; data?: T } => {
  try {
    const validatedData = schema.parse(data);
    return { isValid: true, errors: {}, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(err.message);
      });
      return { isValid: false, errors };
    }
    return { isValid: false, errors: { _form: ['Validation failed'] } };
  }
};

// Async validation helpers
export const validateAsync = async <T>(schema: z.ZodSchema<T>, data: unknown): Promise<{ isValid: boolean; errors: Record<string, string[]>; data?: T }> => {
  try {
    const validatedData = await schema.parseAsync(data);
    return { isValid: true, errors: {}, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(err.message);
      });
      return { isValid: false, errors };
    }
    return { isValid: false, errors: { _form: ['Validation failed'] } };
  }
};

// Custom validation functions
export const validateFileSize = (file: File, maxSize: number): boolean => {
  return file.size <= maxSize;
};

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};

export const validateImageDimensions = (file: File, maxWidth: number, maxHeight: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width <= maxWidth && img.height <= maxHeight);
    };
    img.onerror = () => {
      resolve(false);
    };
    img.src = URL.createObjectURL(file);
  });
};

// Validation error formatters
export const formatValidationErrors = (errors: Record<string, string[]>): string[] => {
  return Object.values(errors).flat();
};

export const getFieldError = (errors: Record<string, string[]>, field: string): string | undefined => {
  return errors[field]?.[0];
};

export const hasFieldError = (errors: Record<string, string[]>, field: string): boolean => {
  return !!errors[field]?.length;
};

// Type guards
export const isValidationError = (error: unknown): error is z.ZodError => {
  return error instanceof z.ZodError;
};

export const isApiError = (error: unknown): error is { success: false; error: string } => {
  return typeof error === 'object' && error !== null && 'success' in error && error.success === false;
};

// Export all validation types
export type ValidationResult<T> = {
  isValid: boolean;
  errors: Record<string, string[]>;
  data?: T;
};

export type AsyncValidationResult<T> = Promise<ValidationResult<T>>;

// Re-export form validation types for convenience
export type {
  ContactFormValidation,
  NewsletterFormValidation,
  LoginFormValidation,
  RegistrationFormValidation,
  ProfessionalInfoValidation,
}; 