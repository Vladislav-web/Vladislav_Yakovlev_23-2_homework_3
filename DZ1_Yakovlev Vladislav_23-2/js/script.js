// 1) Используя регулярные выражения необходимо сделать поле для ввода эл почты(проверять на @) и пароля(проверять наличие букв больших и маленьких, цифр и наличие не менее 8 символов), а так же возможность по нажатию на кнопку увидеть пароль и поле подтвердите пароль
// получаем все необходимые элементы со страницы для настройки валидации 
const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// валидация почты
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
}

// при нажатии на иконку показываем, закрываем пароль
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); 
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Валидация пароля
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); 
  }
  passField.classList.remove("invalid"); 
}

// Подтверждение пароля и проверка 
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// запуск всех функций и проверка всех полей при нажати на кнопку отправки формы
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkEmail();
  createPass();
  confirmPass();

  if (!emailField.classList.contains("invalid") && !passField.classList.contains("invalid") && !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});


// 2) используя рекурсию необходимо заставить блок(position: absolute) двигаться по странице.
let box = document.querySelector('.box');

let position = 0
function recurseAnim() {
   position++
   if (position > document.documentElement.clientWidth - 300) return;
   box.style.left = position + 'px'
   recurseAnim();
}

recurseAnim()
