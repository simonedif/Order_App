//Dammmy Data for Avaiable Items

import React from 'react';
import style from './AvaiableMeal.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '4 Boneless Chicken Thighs',
    description: 'Flame-grilled with crispy skin. Infused with PERi-PERi and served in your choice of spice.',
    price: 7.95,
  },
  {
    id: 'm2',
    name: '1/4 Chicken',
    description: 'Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served on the bone with crispy skin, in your choice of spice.',
    price: 4.25,
  },
  {
    id: 'm3',
    name: 'Whole chicken',
    description: 'Flame-grilled, infused with PERi-PERi and served in your choice of spice. Cut into quarters and perfect with sides, its great for sharing!',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Rainbow Bowl',
    description: 'Spiced Grains, Rainbow Slaw, long-stem broccoli',
    price: 18.99,
  },
];

const AvaiableMeal = (props) => {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={style.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default AvaiableMeal;