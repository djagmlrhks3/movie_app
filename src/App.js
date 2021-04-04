import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count+1
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count-1
    }));
  };

  render() { // 함수가 아닌 클래스이기 때문에 return이 아닌 render() 함수 사용
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;