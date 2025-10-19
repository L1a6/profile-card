// Live Time Update (Milliseconds)

function updateTime() {
  const timeElement = document.getElementById('userTime');
  if (timeElement) {
    timeElement.textContent = Date.now(); 
  }
}
updateTime();
setInterval(updateTime, 1000);

// Subtle Hover Glow for Social Icons Only

const socialIcons = document.querySelectorAll('.social-link');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.boxShadow = '0 6px 24px rgba(56,189,248,0.35)';
    icon.style.transform = 'scale(1.1)';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.boxShadow = '';
    icon.style.transform = '';
  });

});
