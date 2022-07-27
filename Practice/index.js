// getElementById, getElementsByTagName

// input 안의 값(value)를 취득해보자
let userName = document.getElementById("inputName");
let clickBtn = document.getElementById("buttonSubmit");

// setTimeout
clickBtn.onClick = function nameReturn() {
  setTimeout(() => alert(`${userName.value} 님 환영합니다!`), 2000);
};
