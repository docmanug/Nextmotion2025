// Translation message types for internationalization

export interface ContactFormMessages {
  title: string;
  description: string;
  features: {
    beforeAfter: string;
    clinicManagement: string;
    simulation: string;
    patientServices: string;
  };
  fields: {
    firstName: {
      label: string;
      placeholder: string;
    };
    lastName: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    clientType: {
      label: string;
      placeholder: string;
    };
    specialty: {
      label: string;
      placeholder: string;
    };
    interest: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
  };
  submit: string;
}

export interface HeroMessages {
  title: string;
  subtitle?: string;
  description?: string;
  demoButton?: string;
  watchButton?: string;
  videoButton?: string;
  button?: string;
  label?: string;
}

export interface FeatureSectionMessages {
  title?: string;
  subtitle?: string;
  description?: string;
  sections?: Array<{
    title: string;
    description: string;
    icon?: string;
    image?: string;
  }>;
}

export interface FaqMessages {
  title?: string;
  subtitle?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface PricingMessages {
  title?: string;
  subtitle?: string;
  description?: string;
  plans?: Array<{
    name: string;
    price: string;
    features: string[];
    button: string;
    popular?: boolean;
  }>;
}

export interface TestimonialMessages {
  title?: string;
  subtitle?: string;
  items?: Array<{
    content: string;
    author: string;
    title?: string;
    company?: string;
  }>;
}

export interface AboutMessages {
  title?: string;
  subtitle?: string;
  description?: string;
  team?: Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
  }>;
  timeline?: Array<{
    year: string;
    title: string;
    description: string;
  }>;
}

export interface BlogMessages {
  title?: string;
  subtitle?: string;
  readMore?: string;
  categories?: Array<{
    name: string;
    count: number;
  }>;
}

export interface NavigationMessages {
  home: string;
  about: string;
  services: string;
  contact: string;
  blog?: string;
  login?: string;
  signup?: string;
}

export interface FooterMessages {
  company: {
    name: string;
    description: string;
  };
  links: {
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }[];
  social: {
    title: string;
    items: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
  };
  copyright: string;
}

export interface CommonMessages {
  loading: string;
  error: string;
  success: string;
  submit: string;
  cancel: string;
  save: string;
  delete: string;
  edit: string;
  view: string;
  close: string;
  next: string;
  previous: string;
  search: string;
  filter: string;
  sort: string;
  all: string;
  none: string;
  select: string;
  required: string;
  optional: string;
}

export interface AppMessages {
  common: CommonMessages;
  navigation: NavigationMessages;
  footer: FooterMessages;
  contact?: {
    form: ContactFormMessages;
    hero: HeroMessages;
  };
  hero?: HeroMessages;
  features?: FeatureSectionMessages;
  faq?: FaqMessages;
  pricing?: PricingMessages;
  testimonials?: TestimonialMessages;
  about?: AboutMessages;
  blog?: BlogMessages;
  [key: string]: unknown;
}

export type TranslationMessages = AppMessages;

// Type guard to check if an object is a valid translation message
export function isTranslationMessages(obj: unknown): obj is TranslationMessages {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

// Type guard to check if an object is a valid hero message
export function isHeroMessages(obj: unknown): obj is HeroMessages {
  return typeof obj === 'object' && obj !== null && 'title' in obj;
}

// Type guard to check if an object is a valid contact form message
export function isContactFormMessages(obj: unknown): obj is ContactFormMessages {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'title' in obj &&
    'fields' in obj &&
    typeof (obj as any).fields === 'object'
  );
} 