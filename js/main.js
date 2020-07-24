const changeNavbar = document.querySelector('.change-nav-color');

const changeNavbarBtn = document.querySelector('.button-nav-color');

changeNavbarBtn.addEventListener('click', (e) => {
    changeNavbar.classList.toggle('navbar-dark');
    changeNavbar.classList.toggle('bg-dark');
    console.log('change navbar');
});
