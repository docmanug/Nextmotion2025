import { z } from 'zod';
import type { Country } from './common';

// Base form field types
export interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export interface TextField extends FormField {
  type: 'text' | 'email' | 'tel' | 'password' | 'url';
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface SelectField extends FormField {
  type: 'select';
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  multiple?: boolean;
}

export interface CheckboxField extends FormField {
  type: 'checkbox';
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
}

export interface TextareaField extends FormField {
  type: 'textarea';
  rows?: number;
  maxLength?: number;
}

export interface FileField extends FormField {
  type: 'file';
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
}

export type FormFieldType = TextField | SelectField | CheckboxField | TextareaField | FileField;

// Contact form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  profession: string;
  practitioners: string[];
  country: string;
  interestedIn: string[];
  additionalInfo: string;
}

export interface ContactFormState {
  data: ContactFormData;
  isSubmitting: boolean;
  submitStatus: {
    success: boolean;
    message: string;
  } | null;
}

// Zod schemas for form validation
export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  countryCode: z.string().min(1, 'Country code is required'),
  profession: z.string().optional(),
  practitioners: z.array(z.string()).optional(),
  country: z.string().min(1, 'Country is required'),
  interestedIn: z.array(z.string()).optional(),
  additionalInfo: z.string().max(1000, 'Message is too long').optional(),
});

export const newsletterFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to receive newsletters'),
});

export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

export const registrationFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
  newsletter: z.boolean().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Form validation types
export type ContactFormValidation = z.infer<typeof contactFormSchema>;
export type NewsletterFormValidation = z.infer<typeof newsletterFormSchema>;
export type LoginFormValidation = z.infer<typeof loginFormSchema>;
export type RegistrationFormValidation = z.infer<typeof registrationFormSchema>;

// Form submission types
export interface FormSubmissionRequest {
  formType: 'contact' | 'newsletter' | 'login' | 'registration';
  data: ContactFormValidation | NewsletterFormValidation | LoginFormValidation | RegistrationFormValidation;
  metadata?: {
    userAgent?: string;
    ipAddress?: string;
    timestamp?: string;
    source?: string;
  };
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  data?: any;
}

// Form field validation types
export interface FieldValidation {
  isValid: boolean;
  error?: string;
  isDirty: boolean;
  isTouched: boolean;
}

export interface FormValidation {
  isValid: boolean;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  dirty: Record<string, boolean>;
}

// Form state management types
export interface FormState<T> {
  values: T;
  errors: Record<keyof T, string[]>;
  touched: Record<keyof T, boolean>;
  dirty: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

export interface FormActions<T> {
  setValue: (field: keyof T, value: T[keyof T]) => void;
  setError: (field: keyof T, error: string) => void;
  setTouched: (field: keyof T, touched: boolean) => void;
  reset: () => void;
  submit: () => Promise<void>;
}

// Country and phone validation
export const phoneValidationSchema = z.object({
  countryCode: z.string().min(1, 'Country code is required'),
  phone: z.string().min(1, 'Phone number is required').regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number format'),
});

export const countryValidationSchema = z.object({
  country: z.string().min(1, 'Country is required'),
});

// Professional information types
export interface ProfessionalInfo {
  profession: string;
  specialty: string[];
  experience: 'beginner' | 'intermediate' | 'expert';
  practiceType: 'private' | 'clinic' | 'hospital' | 'academic';
  practitioners: number;
}

export const professionalInfoSchema = z.object({
  profession: z.string().min(1, 'Profession is required'),
  specialty: z.array(z.string()).min(1, 'At least one specialty is required'),
  experience: z.enum(['beginner', 'intermediate', 'expert']),
  practiceType: z.enum(['private', 'clinic', 'hospital', 'academic']),
  practitioners: z.number().min(1, 'Number of practitioners is required'),
});

export type ProfessionalInfoValidation = z.infer<typeof professionalInfoSchema>; 