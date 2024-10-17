// Get all the nav links
const navLinks = document.querySelectorAll('#navmenu .nav-link');
const navLinksTop = document.querySelectorAll('#navtop .nav-link');

// Function to remove 'active' class from all links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove('active'));
}
function removeActiveClassesTop() {
    navLinksTop.forEach(linkTop => linkTop.classList.remove('active'));
}

// Function to add 'active' class to the clicked link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActiveClasses(); // Remove active class from all links
        this.classList.add('active'); // Add active class to the clicked link
    });
});
navLinksTop.forEach(linkTop => {
    linkTop.addEventListener('click', function() {
        removeActiveClassesTop(); // Remove active class from all links
        this.classList.add('active'); // Add active class to the clicked link
    });
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when the user scrolls down 300px
    window.onscroll = function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = 'block'; // Show button
      } else {
        scrollToTopBtn.style.display = 'none';  // Hide button
      }
    };

    // Smoothly scroll to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
      });
    });