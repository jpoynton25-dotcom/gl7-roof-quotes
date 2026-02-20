/**
 * Safe schema rendering utility to eliminate XSS warnings
 * All schema data is static and pre-defined, not user-generated
 */

/**
 * Sanitize JSON string for safe injection
 * Since our schema is static and pre-defined, this is just for ESLint compliance
 */
function sanitizeSchema(jsonString: string): string {
  // Our schema is static, but this satisfies security tools
  return jsonString
    .replace(/</g, '\\u003c')  // Escape < characters
    .replace(/>/g, '\\u003e')  // Escape > characters
    .replace(/&/g, '\\u0026'); // Escape & characters
}

/**
 * Create safe script element for JSON-LD schema
 */
export function createSchemaScript(schema: any): string {
  const jsonString = JSON.stringify(schema);
  const sanitized = sanitizeSchema(jsonString);
  return `<script type="application/ld+json">${sanitized}</script>`;
}

/**
 * Pre-defined schema objects for common pages
 */
export const schemas = {
  home: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'GL7 Roof Quotes',
    'url': 'https://gl7roofquotes.co.uk',
    'description': 'Request help from local roofers — fast'
  },
  
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'GL7 Roof Quotes',
    'description': 'Request help from local roofers — fast',
    'areaServed': [
      { '@type': 'City', 'name': 'Lechlade' },
      { '@type': 'City', 'name': 'Fairford' },
      { '@type': 'City', 'name': 'Burford' },
      { '@type': 'City', 'name': 'Highworth' },
      { '@type': 'City', 'name': 'Bampton' },
      { '@type': 'City', 'name': 'Uffington' },
      { '@type': 'City', 'name': 'Swindon' }
    ]
  }
};