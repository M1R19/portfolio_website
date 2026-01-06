// Splash Screen Animation
function openPortfolio() {
  const splash = document.getElementById('splashScreen');
  const mainWrapper = document.getElementById('mainWrapper');
  const themeToggle = document.querySelector('.theme-toggle');
  const backBtn = document.querySelector('.back-btn');
  
  splash.classList.add('hidden');
  
  setTimeout(() => {
    mainWrapper.classList.add('visible');
    themeToggle.classList.add('visible');
    backBtn.classList.add('visible');
  }, 300);
  
  // Store that user has seen splash in this session
  sessionStorage.setItem('splashSeen', 'true');
}

// Go back to landing/splash screen
function goToLanding() {
  const splash = document.getElementById('splashScreen');
  const mainWrapper = document.getElementById('mainWrapper');
  const themeToggle = document.querySelector('.theme-toggle');
  const backBtn = document.querySelector('.back-btn');
  
  // Hide main content first
  mainWrapper.classList.remove('visible');
  themeToggle.classList.remove('visible');
  backBtn.classList.remove('visible');
  
  // Show splash after animation
  setTimeout(() => {
    splash.classList.remove('hidden');
  }, 400);
  
  // Clear session storage so splash shows again
  sessionStorage.removeItem('splashSeen');
}

// Check if splash was already seen in this session
function initSplash() {
  if (sessionStorage.getItem('splashSeen') === 'true') {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('mainWrapper').classList.add('visible');
    document.querySelector('.theme-toggle').classList.add('visible');
    document.querySelector('.back-btn').classList.add('visible');
  }
}

// Initialize splash on page load
document.addEventListener('DOMContentLoaded', initSplash);
