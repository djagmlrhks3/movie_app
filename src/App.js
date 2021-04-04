import React from 'react';

function Food({ name, picture }) {
  return (
    <div> 
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Bibimbap',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Doncasu',
    image: 'https://picsum.photos/200/300',
  },
  {
    name: 'Kimbap',
    image: 'https://picsum.photos/200/300',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;