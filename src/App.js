import React from 'react';

function Food({ name, picture }) {
  return (
    <div> 
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://picsum.photos/200/300',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;