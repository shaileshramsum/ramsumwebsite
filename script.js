// Function to handle course registration form submission
function handleCourseFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // You can perform additional validation here if needed

    // Example: Send form data to a backend service or API
    // Replace 'submit_form.php' with your actual endpoint for handling form submissions
    fetch('submit_course_form.php', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success message or redirect to thank you page
            alert('Thank you for your interest! We will contact you shortly.');
            event.target.reset(); // Reset the form after successful submission
        } else {
            // Handle error case
            alert('Oops! Something went wrong. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
}

// Function to handle contact form submission
function handleContactFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const contactName = formData.get('contactName');
    const contactEmail = formData.get('contactEmail');
    const message = formData.get('message');

    // You can perform additional validation here if needed

    // Example: Send form data to a backend service or API
    // Replace 'submit_form.php' with your actual endpoint for handling form submissions
    fetch('submit_contact_form.php', {
        method: 'POST',
        body: JSON.stringify({ contactName, contactEmail, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success message or redirect to thank you page
            alert('Your message has been sent successfully!');
            event.target.reset(); // Reset the form after successful submission
        } else {
            // Handle error case
            alert('Oops! Something went wrong. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
}

// Add event listeners to the forms for submission
document.addEventListener('DOMContentLoaded', function() {
    const courseForm = document.querySelector('#courseForm');
    const contactForm = document.querySelector('#contactForm');
    
    if (courseForm) {
        courseForm.addEventListener('submit', handleCourseFormSubmission);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
});
