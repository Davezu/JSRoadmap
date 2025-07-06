let typedName = new Typed('.typed-name', {
  strings: ['Davezu'],
  typeSpeed: 200,
  showCursor: false,
  loop: false,
  onComplete: function () {
    let typedPlayground = new Typed('.typed-playground', {
      strings: ['Playground'],
      typeSpeed: 200,
      showCursor: false,
      loop: false,
    });
  },
});

// Removed conflicting click handler to allow redirect

// Professional Portfolio Animation System
class PortfolioExperience {
  constructor() {
    this.isExperienceActive = false;
    this.button = document.querySelector('#animateBtn');
    this.tunnel = document.querySelector('.simple-modal');

    console.log('PortfolioExperience initialized');
    console.log('Button element:', this.button);
    console.log('Modal element:', this.tunnel);

    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Removed button click handler to allow redirect functionality

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isExperienceActive) {
        this.endExperience();
      }
    });

    // Close modal when clicking outside
    if (this.tunnel) {
      this.tunnel.addEventListener('click', (e) => {
        if (e.target === this.tunnel && this.isExperienceActive) {
          this.endExperience();
        }
      });
    }
  }

  async startExperience() {
    if (this.isExperienceActive) return;

    console.log('Starting simple experience');
    this.isExperienceActive = true;
    this.button.classList.add('loading');
    this.button.disabled = true;

    // Show simple modal
    this.tunnel.classList.add('active');

    // Simple delay and then hide
    await this.delay(2000);
    this.endExperience();
  }

  endExperience() {
    console.log('Ending experience');
    this.isExperienceActive = false;

    // Hide modal
    this.tunnel.classList.remove('active');
    this.button.classList.remove('loading');
    this.button.disabled = false;
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  destroy() {
    this.isExperienceActive = false;
  }
}

// Simple button enhancement
class ButtonEnhancer {
  constructor(button) {
    this.button = button;
    this.init();
  }

  init() {
    this.setupHoverEffects();
  }

  setupHoverEffects() {
    this.button.addEventListener('mouseenter', () => {
      this.button.style.transform = 'translateY(-1px)';
    });

    this.button.addEventListener('mouseleave', () => {
      if (!this.button.disabled) {
        this.button.style.transform = 'translateY(0)';
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing portfolio experience');

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // Slightly faster animation
      easing: 'ease-out', // Smoother easing
      once: true, // Only animate once
      offset: 50, // Trigger earlier
      delay: 100, // Small delay to prevent flash
      disable: false, // Always enabled
      startEvent: 'DOMContentLoaded',
    });
    console.log('AOS initialized successfully');
  } else {
    console.warn('AOS not loaded');
  }

  try {
    // Initialize main experience
    const experience = new PortfolioExperience();

    // Button enhancer removed to prevent interference with redirect

    // Global cleanup on page unload
    window.addEventListener('beforeunload', () => {
      experience.destroy();
    });

    console.log('Portfolio experience fully initialized');
  } catch (error) {
    console.error('Failed to initialize portfolio experience:', error);

    // Fallback handlers removed to allow redirect functionality
  }
});

// Error handling for uncaught errors
window.addEventListener('error', (event) => {
  console.error('Uncaught error in portfolio experience:', event.error);
});

// Handle visibility changes (tab switching)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause intensive animations when tab is not visible
    console.log('Tab hidden, optimizing performance');
  } else {
    console.log('Tab visible, resuming full experience');
  }
});

// Export for potential external use
window.PortfolioExperience = PortfolioExperience;
