const navbar = document.querySelector('.navbar');

this.addEventListener('scroll', function () {
    if (this.scrollY > 0) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});