import React from "react";
import { useState } from "react";

export default function Nemo() {
  const [count, setCount] = useState(3);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      window.alert("네모가 없습니다!");
    }
  };

  const nemo_count = Array.from({ length: count }, (v, i) => i);
  console.log(nemo_count);
  // [0, 1, 2]

  console.log(count);

  return (
    <div>
      {nemo_count.map((n, i) => {
        return (
          <div
            key={i}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "pink",
              margin: "10px",
            }}
          >
            nemo
          </div>
        );
      })}

      <div>
        <button onClick={addNemo}>하나 추가</button>
        {/* addNemo에 소괄호를 붙이면 즉시실행되므로 안됨.
          button을 눌렀을 때만 실행되도록 소괄호는 적으면 X.*/}

        <button onClick={removeNemo}>하나 빼기</button>
      </div>
    </div>
  );
}
