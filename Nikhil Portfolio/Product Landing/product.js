document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Attach click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target section's ID from the href attribute (e.g., '#features')
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smoothly scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Example for form submission handling
    const emailForm = document.getElementById('form');
    emailForm.addEventListener('submit', (e) => {
        // e.preventDefault(); // Uncomment this line to stop the default form submission to the action URL
        
        const emailInput = document.getElementById('email').value;
        console.log(`Email submitted: ${emailInput}`);
        
        // In a real application, you would send this data to a server here.
        // For this project, we let it submit to the freeCodeCamp URL as required by their challenge (if applicable).
    });
});