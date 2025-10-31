// Form validation and submission for Jump Higher

// ConvertKit Configuration
const CONVERTKIT_FORM_UID = '98bfe26c53';
const CONVERTKIT_FORM_URL = `https://tremendous-originator-5677.kit.com/${CONVERTKIT_FORM_UID}/index.js`;

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Submit email to ConvertKit using form action
async function submitToConvertKit(email) {
  try {
    const formData = new FormData();
    formData.append('email_address', email);
    formData.append('first_name', ''); // Optional

    const response = await fetch(`https://app.convertkit.com/forms/${CONVERTKIT_FORM_UID}/subscriptions`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      }
    });

    if (response.ok) {
      // Success! Redirect to thank-you page
      window.location.href = 'thank-you.html';
      return true;
    } else {
      const data = await response.json();
      throw new Error(data.message || 'Subscription failed');
    }
  } catch (error) {
    console.error('ConvertKit submission error:', error);
    return false;
  }
}

// Handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  // Validate email
  if (!email) {
    alert('Please enter your email address');
    emailInput.focus();
    return false;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    emailInput.focus();
    return false;
  }

  // Store email in sessionStorage for thank-you page
  sessionStorage.setItem('userEmail', email);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = 'Processing...';
  submitButton.disabled = true;

  // Submit to ConvertKit
  const success = await submitToConvertKit(email);

  if (success) {
    console.log('Email successfully submitted to ConvertKit:', email);
    // Redirect happens in submitToConvertKit function
  } else {
    // Re-enable button on error
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;
    alert('There was an error subscribing. Please try again or contact support.');
  }

  return false;
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add submit handlers to all forms
  const forms = document.querySelectorAll('.email-form');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });

  // Track scroll depth for analytics
  let maxScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = Math.round(scrollPercent);
      // TODO: Send to analytics (Google Analytics, Plausible, etc.)
      console.log('Max scroll depth:', maxScroll + '%');
    }
  });
});
