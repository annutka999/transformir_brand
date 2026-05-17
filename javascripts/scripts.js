//все скрипты для всех html-страниц

burgerMenu();
// formModalWindow();
// formatPhoneInput();

// function formatPhoneInput() {
//   let phoneInput = document.querySelector('input[name="phone"]');

//   phoneInput.addEventListener('keypress', (event) => {
//     if (!/[0-9]/.test(event.key)) {
//       event.preventDefault();
//     }
//   });

//   phoneInput.addEventListener('input', function () {
//     let numbers = this.value.replace(/\D/g, '');
//     numbers = numbers.substring(0, 10);

//     let formatted = '';

//     if (numbers.length > 0) {
//       // formatted = formatted + '(' + numbers.substring(0, 3)
//       formatted += '(' + numbers.substring(0, 3);
//     }
//     if (numbers.length >= 4) {
//       formatted += ') ' + numbers.substring(3, 6);
//     }
//     if (numbers.length >= 7) {
//       formatted += '-' + numbers.substring(6, 8);
//     }
//     if (numbers.length >= 9) {
//       formatted += '-' + numbers.substring(8, 10);
//     }

//     this.value = formatted;
//   });
// }

// function formModalWindow() {
//   let form = document.querySelector('form');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let userName = form.userName.value;

//     if (userName == '') {
//       alert(`Спасибо, неизвестный пользователь! Данные сохранены.`);
//     } else {
//       alert(`Спасибо, ${userName}! Данные сохранены.`);
//     }
//   });
// }

function burgerMenu() {
  let burger = document.querySelector('#burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
  });
}
