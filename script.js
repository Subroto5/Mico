

        document.addEventListener("DOMContentLoaded", function () { });
        const socialLinks = document.querySelectorAll(".list-group-item a");

        socialLinks.forEach((link) => {link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = link.getAttribute("href");
            window.open(url, "_blank");
        })});
       
   
   
 
        document.addEventListener("DOMContentLoaded", function () { });
        const slideTexts = document.querySelectorAll(".slide-text");

        // Add a delay to start the animation
        let delay = 0;
        slideTexts.forEach((text) => {text.style.animationDelay = delay + "s"});
        delay += 5; // Delay between each slide (in seconds)
       
   
  
    // script.js

        document.addEventListener("DOMContentLoaded", function () { });
        const contactForm = document.getElementById("contact-form");

        contactForm.addEventListener("submit", function (e) {e.preventDefault()});

        // You can add your form submission logic here
        // For this example, we'll just log the form data
        const formData = new FormData(contactForm);
        formData.forEach((value, key) => {console.log(`${key}: ${value}`)});
        

        // Optionally, you can clear the form fields after submission
        contactForm.reset();
       
 

    


$(document).ready(function () {
    // Initialize variables
    let currentSlide = 0;
    const slides = $('.text-slide');

    // Function to show a specific slide
    function showSlide(index) {
        slides.hide(); // Hide all slides
        slides.eq(index).show(); // Show the selected slide
    }

    // Initial slide display
    showSlide(currentSlide);

    // Automatic slide change
    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // Change slide every 3 seconds
});




