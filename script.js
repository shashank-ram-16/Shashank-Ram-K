// Menu Toggle
document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('nav-ul').classList.add('show');
});
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('nav-ul').classList.remove('show');
});

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('naam');
    const textArray = ["Shashank Ram K"];
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textArray[arrayIndex];
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            arrayIndex = (arrayIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    }

    type();
});

// Tabs (About Section)
document.querySelectorAll('.tab-links').forEach(link => {
    link.addEventListener('click', function () {
        const target = this.getAttribute('data-target');

        document.querySelectorAll('.tab-links').forEach(tab => tab.classList.remove('active-link'));
        this.classList.add('active-link');

        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active-content'));
        document.getElementById(target).classList.add('active-content');
    });
});
