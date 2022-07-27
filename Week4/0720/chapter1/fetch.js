// async await ===> 훨씬 더 많이 사용, code 실행 컨트롤
// async 와 await 는 하나의 pair

const getPoketmons = async () => {
  // Promise 형태로 반환이 된다.(중요)
  const response = await fetch("../../jsondata/pikachu.json");
  console.log(response);

  if (response.status) {
    // 원래 throw는 중간에 멈추고 메세지를 던져주는 역할
    throw new Error("통신 주소값을 찾을 수 없습니다."); // 에러라고 하는 것을 의도적으로 던저줌
  }

  const data = await response.json();
  return data;
};

getPoketmons()
  .then((data) => console.log("resolve : ", data))
  .catch((err) => console.log("reject : ", err));

// const test = getPoketmons();
// console.log(test);

// // Promise chain
// fetch("../../jsondata/jamanbo.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
