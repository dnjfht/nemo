import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  componentDidMount = () => {};

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
    // setState는 state를 바꿔주는 것
    // state가 딕셔너리 형태이므로 똑같이 딕셔너리 형태로 바꿔줘야 함.
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요!");
    }
  };

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    // [0, 1, 2]
    console.log(this.state);

    return (
      <div className="App">
        {nemo_count.map((n, i) => {
          return (
            <div
              key={i}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#dddddd",
                margin: "10px",
              }}
            >
              nemo
            </div>
          );
        })}

        <div>
          <button onClick={this.addNemo}>하나 추가</button>
          {/* addNemo에 소괄호를 붙이면 즉시실행되므로 안됨.
          button을 눌렀을 때만 실행되도록 소괄호는 적으면 X.*/}

          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    );
  }
}

export default App;
