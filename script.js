// Welcome overlay logic
window.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('welcomeOverlay');
  if (overlay) {
    setTimeout(() => {
      overlay.classList.add('fade-out');
    }, 1600); // Overlay stays for 1.6 seconds, then fades out
    overlay.onclick = () => overlay.classList.add('fade-out');
  }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Telugu Forex Community! We will get back to you soon.');
});