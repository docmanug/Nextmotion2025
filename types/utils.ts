import type { 
  Country, 
  Locale, 
  ApiResponse, 
  ApiError, 
  LoadingState,
  AsyncState,
  SubmitStatus
} from './common';
import type { ContactFormData } from './forms';
import type { ValidationResult } from './validation';
import { z } from 'zod';

// Type guards
export const isApiResponse = <T>(obj: unknown): obj is ApiResponse<T> => {
  return typeof obj === 'object' && obj !== null && 'success' in obj;
};

export const isApiErrorResponse = (obj: unknown): obj is ApiError => {
  return typeof obj === 'object' && obj !== null && 'code' in obj && 'message' in obj;
};

export const isCountry = (obj: unknown): obj is Country => {
  return typeof obj === 'object' && obj !== null && 
         'name' in obj && 'dial_code' in obj && 'code' in obj;
};

export const isLocale = (value: unknown): value is Locale => {
  return value === 'en' || value === 'fr';
};

// Async state helpers
export const createAsyncState = <T>(): AsyncState<T> => ({
  data: null,
  loading: false,
  error: null,
});

export const setLoading = <T>(state: AsyncState<T>): AsyncState<T> => ({
  ...state,
  loading: true,
  error: null,
});

export const setSuccess = <T>(state: AsyncState<T>, data: T): AsyncState<T> => ({
  ...state,
  data,
  loading: false,
  error: null,
});

export const setError = <T>(state: AsyncState<T>, error: string): AsyncState<T> => ({
  ...state,
  loading: false,
  error,
});

// Form helpers
export const createContactFormData = (): ContactFormData => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  countryCode: '+1',
  profession: '',
  practitioners: [],
  country: '',
  interestedIn: [],
  additionalInfo: '',
});

export const isContactFormValid = (data: ContactFormData): boolean => {
  return !!(
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.countryCode &&
    data.country
  );
};

// Validation helpers
export const createValidationResult = <T>(
  isValid: boolean,
  errors: Record<string, string[]> = {},
  data?: T
): ValidationResult<T> => ({
  isValid,
  errors,
  data,
});

export const mergeValidationErrors = (
  ...errorObjects: Record<string, string[]>[]
): Record<string, string[]> => {
  const merged: Record<string, string[]> = {};
  
  errorObjects.forEach(errors => {
    Object.entries(errors).forEach(([key, value]) => {
      if (!merged[key]) {
        merged[key] = [];
      }
      merged[key].push(...value);
    });
  });
  
  return merged;
};

// API response helpers
export const createApiResponse = <T>(
  success: boolean,
  data?: T,
  error?: string,
  message?: string
): ApiResponse<T> => ({
  success,
  data,
  error,
  message,
});

export const createSuccessResponse = <T>(data: T, message?: string): ApiResponse<T> =>
  createApiResponse(true, data, undefined, message);

export const createErrorResponse = <T>(error: string, data?: T): ApiResponse<T> =>
  createApiResponse(false, data, error);

export const createApiError = (
  code: string,
  message: string,
  details?: Record<string, any>
): ApiError => ({
  code,
  message,
  details,
});

// Country helpers
export const findCountryByCode = (countries: Country[], code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};

export const findCountryByName = (countries: Country[], name: string): Country | undefined => {
  return countries.find(country => country.name === name);
};

export const findCountryByDialCode = (countries: Country[], dialCode: string): Country | undefined => {
  return countries.find(country => country.dial_code === dialCode);
};

// Locale helpers
export const getDefaultLocale = (): Locale => 'en';

export const isValidLocale = (locale: string): locale is Locale => {
  return locale === 'en' || locale === 'fr';
};

export const getOppositeLocale = (locale: Locale): Locale => {
  return locale === 'en' ? 'fr' : 'en';
};

// Loading state helpers
export const isLoading = (state: LoadingState): boolean => state === 'loading';
export const isSuccess = (state: LoadingState): boolean => state === 'success';
export const isError = (state: LoadingState): boolean => state === 'error';
export const isIdle = (state: LoadingState): boolean => state === 'idle';

// Submit status helpers
export const createSubmitStatus = (
  success: boolean,
  message: string
): SubmitStatus => ({
  success,
  message,
});

export const isSubmitSuccess = (status: SubmitStatus): boolean => 
  status !== null && status.success;

export const isSubmitError = (status: SubmitStatus): boolean => 
  status !== null && !status.success;

// Zod schema helpers
export const createOptionalStringSchema = (minLength = 1, maxLength = 100) =>
  z.string().min(minLength).max(maxLength).optional();

export const createRequiredStringSchema = (minLength = 1, maxLength = 100) =>
  z.string().min(minLength, `Must be at least ${minLength} characters`).max(maxLength, `Must be no more than ${maxLength} characters`);

export const createEmailSchema = () =>
  z.string().email('Invalid email address');

export const createPhoneSchema = () =>
  z.string().min(1, 'Phone number is required').regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number format');

// Type assertion helpers
export const assertIsDefined = <T>(value: T | null | undefined, message?: string): T => {
  if (value === null || value === undefined) {
    throw new Error(message || 'Value is null or undefined');
  }
  return value;
};

export const assertIsString = (value: unknown, message?: string): string => {
  if (typeof value !== 'string') {
    throw new Error(message || 'Value is not a string');
  }
  return value;
};

export const assertIsNumber = (value: unknown, message?: string): number => {
  if (typeof value !== 'number') {
    throw new Error(message || 'Value is not a number');
  }
  return value;
};

export const assertIsBoolean = (value: unknown, message?: string): boolean => {
  if (typeof value !== 'boolean') {
    throw new Error(message || 'Value is not a boolean');
  }
  return value;
};

// Deep clone helper for complex objects
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as unknown as T;
  }
  
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  return obj;
};

// Debounce helper for form inputs
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle helper for API calls
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Retry helper for API calls
export const retry = async <T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

// Cache helper for API responses
export const createCache = <T>(ttl = 5 * 60 * 1000) => {
  const cache = new Map<string, { data: T; timestamp: number }>();
  
  return {
    get: (key: string): T | null => {
      const item = cache.get(key);
      if (!item) return null;
      
      if (Date.now() - item.timestamp > ttl) {
        cache.delete(key);
        return null;
      }
      
      return item.data;
    },
    
    set: (key: string, data: T): void => {
      cache.set(key, { data, timestamp: Date.now() });
    },
    
    clear: (): void => {
      cache.clear();
    },
    
    delete: (key: string): boolean => {
      return cache.delete(key);
    },
    
    has: (key: string): boolean => {
      return cache.has(key) && Date.now() - cache.get(key)!.timestamp <= ttl;
    }
  };
};

// Export all utilities
export const TypeUtils = {
  // Type guards
  isApiResponse,
  isApiErrorResponse,
  isCountry,
  isLocale,
  
  // Async state helpers
  createAsyncState,
  setLoading,
  setSuccess,
  setError,
  
  // Form helpers
  createContactFormData,
  isContactFormValid,
  
  // Validation helpers
  createValidationResult,
  mergeValidationErrors,
  
  // API response helpers
  createApiResponse,
  createSuccessResponse,
  createErrorResponse,
  createApiError,
  
  // Country helpers
  findCountryByCode,
  findCountryByName,
  findCountryByDialCode,
  
  // Locale helpers
  getDefaultLocale,
  isValidLocale,
  getOppositeLocale,
  
  // Loading state helpers
  isLoading,
  isSuccess,
  isError,
  isIdle,
  
  // Submit status helpers
  createSubmitStatus,
  isSubmitSuccess,
  isSubmitError,
  
  // Zod schema helpers
  createOptionalStringSchema,
  createRequiredStringSchema,
  createEmailSchema,
  createPhoneSchema,
  
  // Type assertion helpers
  assertIsDefined,
  assertIsString,
  assertIsNumber,
  assertIsBoolean,
  
  // Utility helpers
  deepClone,
  debounce,
  throttle,
  retry,
  createCache,
}; 