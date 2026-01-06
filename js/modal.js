// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(type) {
  modalTitle.textContent = type;
  modalContent.innerHTML = modalData[type];
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
