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

// Contact Form Validation

const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

if (form && successMsg) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      document.getElementById('error-name').textContent = 'Full name is required';
      valid = false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Valid email required';
      valid = false;
    }

    if (!subject) {
      document.getElementById('error-subject').textContent = 'Subject is required';
      valid = false;
    }

    if (!message || message.length < 10) {
      document.getElementById('error-message').textContent = 'Message must be at least 10 characters';
      valid = false;
    }

    if (valid) {
      successMsg.textContent = 'Your message has been sent successfully!';
      form.reset();
    } else {
      successMsg.textContent = '';
    }
  });
}