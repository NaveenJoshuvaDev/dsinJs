# dsinJs
## Data Structures, Modern Operators and Strings
### Destructuring Arrays
- break a complex data structure down into a smaller data structure like a varaible.
- To retrieve elements from the array and store them into varaibles in a very easy way.
- However the original array is not affected.
- We are only destructuring so we are unpacking it.

***destructuring syntax***
- This capability is similar to features present in languages such as Perl and Python.
```
const x = [1, 2, 3, 4, 5];//regular array
const [y, z] = x;//Destructuring assignment
console.log(y); // 1
console.log(z); // 2

```
```
'use strict';
// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  };


  const [first, second] = restaurant.categories;
  console.log(first, second);//Italian Pizzeria
  
  ```
- what if we want to select third element
```
  const [first, ,second] = restaurant.categories;
  console.log(first, second);//Italian Vegetatrian

```
- Likewise no need of creating newvariables to retrieve elements ,However we can skip the elements to get the value.

- How to switch two variables
```
  let [main, ,secondary] = restaurant.categories;
  console.log(main, secondary);

  //old school technique
  const temp= main;
  main = secondary;
  secondary = temp;
  console.log(main, secondary);//vegetarian Italian

  ```
  - we use let for reassigning variables.
  ### Now switching variables using destructuring assignment
  ```
  let [main, ,secondary] = restaurant.categories;
  console.log(main, secondary);//Italian Vegetatrian
  [main, secondary]=[secondary, main];
  console.log(main, secondary);//vegetarian Italian

  ```

