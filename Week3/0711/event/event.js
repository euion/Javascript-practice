// event 를 발동시키기 위해서
// event 가 발생했는가? 안했는가?
// 행동을 했는가 안했는가?

// btn.addEventListener("click", (e) => {
//   console.log(e);
//   console.log("주문이 완료되었습니다.");
// });

const orders = document.querySelectorAll("li");

//orders.forEach(); // for문 돌리는 거랑 똑같음

orders.forEach((order) => {
  order.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(order);
    e.target.remove();
    console.log(`${e.target.innerText} 주문이 완료되었습니다.`);
  });
});

const ul = document.querySelector("ul");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  const li = document.createElement("li");
  li.textContent = "나는 콜라가 좋아";
  //ul.prepend(li); // 앞서 상위에 위치
  ul.append(li); // 하위 li 에 위치
});
