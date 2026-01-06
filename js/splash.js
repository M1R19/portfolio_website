// Splash Screen Animation
function openPortfolio() {
  const splash = document.getElementById('splashScreen');
  const mainWrapper = document.getElementById('mainWrapper');
  const themeToggle = document.querySelector('.theme-toggle');
  
  splash.classList.add('hidden');
  
  setTimeout(() => {
    mainWrapper.classList.add('visible');
    themeToggle.classList.add('visible');
  }, 300);
  
  // Store that user has seen splash in this session
  sessionStorage.setItem('splashSeen', 'true');
}

// Check if splash was already seen in this session
function initSplash() {
  if (sessionStorage.getItem('splashSeen') === 'true') {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('mainWrapper').classList.add('visible');
    document.querySelector('.theme-toggle').classList.add('visible');
  }
}

// Initialize splash on page load
document.addEventListener('DOMContentLoaded', initSplash);
