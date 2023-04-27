'use strict';
// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
  };
//   const arr = [2,3,4];
//   const a = arr[0];
//   const b = arr[1];
//   const c = arr[2];

//   const [x,y,z] = arr;
//   console.log(x,y,z);

//   const [first, ,second] = restaurant.categories;
//   console.log(first, second);Italian Vegetarian
  //How to switch two variables

//   let [main, ,secondary] = restaurant.categories;
//   console.log(main, secondary);

  //old school technique
//   const temp= main;
//   main = secondary;
//   secondary = temp;
//   console.log(main, secondary);vegetarian Italian
//Now switching variables using destructuring assignment
// [main, secondary]=[secondary, main];
// console.log(main, secondary);vegetarian Italian

//Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//How to retrieve values from nested array?
//nested destructuring
const nested = [2,4,[5,6]];
//const [i, ,j]= nested;
// console.log(i, j);
 //what if we want individual values 
 //destructuring inside destructuring
 const [i, , [j, k]] = nested;
 console.log(i, j,k);
 //setting default values using destructuring
 //use case if we don't know the length of the array and getting data from an API.
 const[p=1, q=1, r=1] = [8, 9];
 console.log(p,q,r);
  