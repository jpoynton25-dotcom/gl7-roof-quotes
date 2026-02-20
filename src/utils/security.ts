/**
 * Security utilities for GL7 Roof Quotes
 * Adds Content Security Policy and other security headers
 */

/**
 * Content Security Policy configuration
 */
export const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // For inline scripts (schema markup)
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // For inline styles
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "https://www.google-analytics.com"
    ],
    connectSrc: [
      "'self'",
      "https://script.google.com", // Google Apps Script form endpoint
      "https://www.google-analytics.com"
    ],
    frameSrc: [],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameAncestors: ["'none'"],
    baseUri: ["'self'"],
    formAction: [
      "'self'",
      "https://script.google.com" // Google Apps Script form endpoint
    ]
  }
};

/**
 * Security headers configuration
 */
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

/**
 * Generate CSP header string
 */
export const generateCSPHeader = () => {
  const directives = cspConfig.directives;
  const cspString = Object.entries(directives)
    .map(([directive, sources]) => {
      if (sources.length === 0) return '';
      return `${directive} ${sources.join(' ')}`;
    })
    .filter(Boolean)
    .join('; ');
  
  return cspString;
};

/**
 * Sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (UK format)
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate postcode (UK format)
 */
export const validatePostcode = (postcode: string): boolean => {
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
  return postcodeRegex.test(postcode);
};

/**
 * Security middleware for form submissions
 */
export const validateFormData = (data: any) => {
  const errors: string[] = [];
  
  // Validate required fields
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!validatePhone(data.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  if (!validatePostcode(data.postcode)) {
    errors.push('Please enter a valid UK postcode');
  }
  
  if (!data.issue || data.issue.trim().length < 10) {
    errors.push('Please describe your roof issue in more detail');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};