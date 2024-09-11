// Отримуємо всі посилання з класом nav-link
const navLinks = document.querySelectorAll('.nav__link');
// Отримуємо всі посилання з класом section-main
const pages = document.querySelectorAll('.section__main');

// Додаємо обробник події для кожного посилання
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Видаляємо клас 'nav-link-active' з усіх посилань
    navLinks.forEach((link) => link.classList.remove('nav__link-active'));

    // Додаємо клас 'nav-link-active' до поточного посилання
    this.classList.add('nav__link-active');

    // Видаляємо активний клас з усіх сторінок і додаємо неактивний
    pages.forEach((page) => {
      page.classList.remove('section__main-active');
      page.classList.add('section__main-inactive');
    });

    // Отримуємо клас поточного лінку, щоб активувати відповідну сторінку
    const linkClass = Array.from(this.classList).find(
      (cls) => cls !== 'nav__link' && cls !== 'nav__link-active'
    );

    // Активуємо відповідну сторінку на основі класу посилання
    pages.forEach((page) => {
      if (page.classList.contains(linkClass)) {
        page.classList.remove('section__main-inactive');
        page.classList.add('section__main-active');
      }
    });
  });
});
