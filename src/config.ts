// Platform configuration
// Change these values to customise the platform

export const CONFIG = {
  // Platform branding
  platformName: "GL7 Roof Quotes",
  tagline: "Request help from local roofers — fast",
  
  // Contact details
  phone: "",
  phoneE164: "",
  email: "",
  
  // Primary location
  primaryArea: "Lechlade",
  primaryPostcode: "GL7",
  
  // Service areas
  areas: [
    "Lechlade",
    "Fairford", 
    "Burford",
    "Highworth",
    "Bampton",
    "Uffington",
    "Swindon",
  ],
  
  // Form submission endpoint — Google Apps Script web app (v2 — Drive photo upload)
  formEndpoint: "https://script.google.com/macros/s/AKfycbz3x7Qhe1_CTg6UdgaiexGbY4TAedGRf--l8jqA7l1wvjncqa_9xgzNKUrOa7iC273E/exec",
  
  // Operator (for legal pages only)
  operator: {
    name: "GL7 Roof Quotes",
    address: "Lechlade, Gloucestershire GL7",
    dataControllerEmail: "",
  },
} as const;

export default CONFIG;
