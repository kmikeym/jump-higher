// Form validation and submission for Jump Higher

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

// Handle form submission
function handleFormSubmit(event) {
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

  // TODO: Submit to email service (Mailchimp, ConvertKit, etc.)
  // For now, just redirect to thank-you page
  console.log('Email submitted:', email);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  submitButton.textContent = 'Processing...';
  submitButton.disabled = true;

  // Simulate API call (replace with actual email service integration)
  setTimeout(() => {
    // Redirect to thank-you page
    window.location.href = 'thank-you.html';
  }, 1000);

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

// Mailchimp integration example (uncomment and configure when ready)
/*
function submitToMailchimp(email) {
  const MAILCHIMP_ACTION_URL = 'YOUR_MAILCHIMP_FORM_ACTION_URL';

  // Create form data
  const formData = new FormData();
  formData.append('EMAIL', email);

  // Submit to Mailchimp
  fetch(MAILCHIMP_ACTION_URL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
  .then(() => {
    // Redirect to thank-you page
    window.location.href = 'thank-you.html';
  })
  .catch(error => {
    console.error('Mailchimp submission error:', error);
    alert('There was an error. Please try again.');
  });
}
*/

// ConvertKit integration example (uncomment and configure when ready)
/*
async function submitToConvertKit(email) {
  const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID';
  const CONVERTKIT_API_KEY = 'YOUR_API_KEY';

  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: email
      })
    });

    if (response.ok) {
      window.location.href = 'thank-you.html';
    } else {
      throw new Error('Subscription failed');
    }
  } catch (error) {
    console.error('ConvertKit submission error:', error);
    alert('There was an error. Please try again.');
  }
}
*/
