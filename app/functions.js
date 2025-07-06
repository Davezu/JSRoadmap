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

class PortfolioExperience {
  constructor() {
    this.isExperienceActive = false;
    this.button = document.querySelector('#animateBtn');
    this.tunnel = document.querySelector('.simple-modal');
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isExperienceActive) {
        this.endExperience();
      }
    });

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

    this.isExperienceActive = true;
    this.button.classList.add('loading');
    this.button.disabled = true;
    this.tunnel.classList.add('active');

    await this.delay(2000);
    this.endExperience();
  }

  endExperience() {
    this.isExperienceActive = false;
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

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
      delay: 100,
      disable: false,
      startEvent: 'DOMContentLoaded',
    });
  }

  try {
    const experience = new PortfolioExperience();

    window.addEventListener('beforeunload', () => {
      experience.destroy();
    });
  } catch (error) {}
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
  }
});

window.PortfolioExperience = PortfolioExperience;
