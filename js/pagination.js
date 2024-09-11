document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll(
    '.pagination__button:not(#prev):not(#next)'
  ); // Всі кнопки, окрім стрілок
  let currentPage = 2; // початкова активна сторінка (номер 2)

  // Функція для оновлення активного класу
  function updateActivePage(newPage) {
    // Видаляємо клас active з поточної активної кнопки
    buttons.forEach((btn) => btn.classList.remove('active'));

    // Знаходимо кнопку за новим номером сторінки та додаємо клас active
    const newActiveButton = Array.from(buttons).find(
      (btn) => btn.textContent.trim() === String(newPage)
    );
    if (newActiveButton) {
      newActiveButton.classList.add('active');
    }

    // Оновлюємо номер поточної сторінки
    currentPage = newPage;
  }

  // Обробка кліку на кнопки з цифрами
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const pageNumber = parseInt(this.textContent);

      // Якщо кнопка — це цифра, то оновлюємо активну сторінку
      if (!isNaN(pageNumber)) {
        updateActivePage(pageNumber);
      }
    });
  });

  // Обробка кліку на стрілки "вліво" і "вправо"
  document.getElementById('prev').addEventListener('click', function () {
    if (currentPage > 1) {
      updateActivePage(currentPage - 1);
    }
  });

  document.getElementById('next').addEventListener('click', function () {
    if (currentPage < 40) {
      updateActivePage(currentPage + 1);
    }
  });
});
