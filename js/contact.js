// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                service: document.getElementById('service').value,
                message: document.getElementById('message').value.trim()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in a real app, this would send to a server)
            // You can replace this with actual AJAX/fetch call to your backend
            showMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send the data to a server:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                } else {
                    showMessage('Something went wrong. Please try again.', 'error');
                }
            })
            .catch(error => {
                showMessage('Something went wrong. Please try again.', 'error');
            });
            */
        });
    }

    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = 'form-message ' + type;
            formMessage.style.display = 'block';
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});
