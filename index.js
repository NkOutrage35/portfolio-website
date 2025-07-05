document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const navLinks = document.getElementById('navLinks');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        toggleButton.classList.toggle('active'); // Add this line to toggle the button's active state
    });
});
if (document.querySelector('.typed')) {
        var typed = new Typed('.typed', {
            strings: ["I'm Ayemang Kwame Antwi.", "A Junior Web Developer.", "A Student at AAMUST."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }