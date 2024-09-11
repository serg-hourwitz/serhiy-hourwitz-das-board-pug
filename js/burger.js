document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const sidebar = document.querySelector('.sidebar');
  const sectionMain = document.querySelector('.section-main');
  const body = document.body;

  // Відкривання сайдбару
  burgerIcon.addEventListener('click', function () {
    body.classList.add('sidebar-active');
    burgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  // Закривання сайдбару
  closeIcon.addEventListener('click', function () {
    body.classList.remove('sidebar-active');
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});
