const toggleButton = (button) => {
  // Перевірка поточного класу і зміна його на активний/неактивний
  if (button.classList.contains('btn-inactive')) {
    button.classList.remove('btn-inactive');
    button.classList.add('btn-active');
    button.textContent = 'Active'; // Зміна тексту на "Active"
  } else {
    button.classList.remove('btn-active');
    button.classList.add('btn-inactive');
    button.textContent = 'Inactive'; // Зміна тексту на "Inactive"
  }
};



