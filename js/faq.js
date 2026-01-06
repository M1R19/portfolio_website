// FAQ toggle functionality - only one open at a time
function toggleFaq(element) {
  // Check if this element is already open
  const isOpen = element.classList.contains('open');
  
  // Close all other FAQ items first
  const allFaqItems = document.querySelectorAll('.faq-item');
  allFaqItems.forEach(item => {
    item.classList.remove('open');
  });
  
  // If it wasn't open before, open it now
  if (!isOpen) {
    element.classList.add('open');
  }
}
