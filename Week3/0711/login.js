const form = document.querySelector(".login-form");
const feedback = document.querySelector(".feedback");

const regexp = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  // preventDefault :: submit이 전송을 하는 것이기 때문에 어떤 이벤트를 명시적으로 처리하지 않은 경우
  // 동작되는 기본 동작을 막음

  e.preventDefault();
  console.log(form.username.value);
  const username = form.username.value;

  //   if (regexp.test(username)) {
  //     feedback.textContent = "환영합니다 여러분!";
  //   } else {
  //     feedback.textContent = "영문 6~12자로 적어주셔야 합니다.";
  //   }
});

form.username.addEventListener("keyup", (e) => {
  if (regexp.test(e.target.value)) {
    feedback.textContent = "환영합니다 여러분!";
  } else {
    feedback.textContent = "영문 6~12자로 적어주셔야 합니다.";
  }
});
