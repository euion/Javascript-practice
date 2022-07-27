const getJson = (callback) => {
  // 함수를 하나 만들어서 인자로 전달
  const request = new XMLHttpRequest(); //객체 단위
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    // 정상적으로 수행이 완료되었습니다.
    if (request.readyState === 4 && request.status === 200) {
      // 코드가 정상적으로 수행되었을때의 구간
      // console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      // 코드가 오류가 났을때 실행되는 구간. 404
      //console.log("요청하신 내용을 찾을 수 없습니다.");
      callback("데이터를 받아올 수 없습니다.", undefined); // 콘솔이 아니라 기능을 넣어서 메세지를 제공할 수 있음
    }
  });
  // request(클라이언트의 요청), response(서버의 응답)
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  // 통신방법, endpoint 주소
  request.send(); // 2 위의 내용이 준비되었으니, 서버에 전송을 하겠다!!
};

// console.log(1);
// console.log(2);

getJson((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// console.log(3);
// console.log(4);

// request(클라이언트의 요청), response(서버의 응답)
//request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// 통신방법, endpoint 주소
//request.send(); // 2 위의 내용이 준비되었으니, 서버에 전송을 하겠다!!

// 서버의 일
