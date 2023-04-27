'use strict';
// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  };
  const arr = [2,3,4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  const [x,y,z] = arr;
  console.log(x,y,z);

  const [first, ,second] = restaurant.categories;
  console.log(first, second);//Italian Vegetarian
  //How to switch two variables

  let [main, ,secondary] = restaurant.categories;
  console.log(main, secondary);

  //old school technique
  const temp= main;
  main = secondary;
  secondary = temp;
  console.log(main, secondary);//vegetarian Italian

 
  