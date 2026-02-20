/**
 * Accessibility utilities for GL7 Roof Quotes
 * Improves keyboard navigation and screen reader support
 */

/**
 * Focus management utilities
 */
export const focusUtils = {
  /**
   * Focus the first focusable element in a container
   */
  focusFirstElement: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    if (firstElement) {
      firstElement.focus();
    }
  },

  /**
   * Trap focus within a modal or dialog
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  },

  /**
   * Skip link for keyboard navigation
   */
  createSkipLink: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = 'auto';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';
    skipLink.style.zIndex = '9999';
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.left = '1rem';
      skipLink.style.width = 'auto';
      skipLink.style.height = 'auto';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.left = '-9999px';
      skipLink.style.width = '1px';
      skipLink.style.height = '1px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

/**
 * ARIA utilities
 */
export const ariaUtils = {
  /**
   * Set aria-live region for dynamic content updates
   */
  setLiveRegion: (element: HTMLElement, politeness: 'polite' | 'assertive' = 'polite') => {
    element.setAttribute('aria-live', politeness);
    element.setAttribute('aria-atomic', 'true');
  },

  /**
   * Announce messages to screen readers
   */
  announce: (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', politeness);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-9999px';
    liveRegion.textContent = message;
    document.body.appendChild(liveRegion);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);
  },

  /**
   * Set proper ARIA attributes for form elements
   */
  setFormAttributes: (input: HTMLInputElement, label: string, description?: string) => {
    input.setAttribute('aria-label', label);
    if (description) {
      const id = `desc-${Math.random().toString(36).substr(2, 9)}`;
      input.setAttribute('aria-describedby', id);
      const descElement = document.createElement('div');
      descElement.id = id;
      descElement.className = 'sr-only';
      descElement.textContent = description;
      input.parentNode?.appendChild(descElement);
    }
  }
};

/**
 * Screen reader only utility class
 */
export const srOnlyStyle = {
  position: 'absolute' as const,
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap' as const,
  border: '0'
};

/**
 * Initialize accessibility features
 */
export const initAccessibility = () => {
  // Create skip link
  focusUtils.createSkipLink();
  
  // Add focus outline for keyboard users
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
};