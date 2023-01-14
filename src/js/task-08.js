const refs = {
  loginForm: document.querySelector(".login-form"),
  labelEmail: document.querySelector('[type="email"]'),
  labelPassword: document.querySelector('[type="password"]'),
};

refs.loginForm.addEventListener("submit", onLoginformSubmit);

function onLoginformSubmit(event) {
  event.preventDefault();
  const {
    elements: { labelPassword, labelEmail },
  } = event.currentTarget;
  if (refs.labelEmail.value === "" || refs.labelPassword.value === "") {
    alert(`Увага! Всі поля мають бути заповнені!`);
  } else {
    console.log(
      `Email: ${refs.labelEmail.value}, Password: ${refs.labelPassword.value}`
    );
  }
  event.currentTarget.reset();
}
