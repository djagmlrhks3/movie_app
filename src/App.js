import React from 'react';

function Potato() { // Potato 컴포넌트를 만듦 (= Potato.js 생성)
  return <h1>I like potato</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
    </div>
  )
}

export default App;
