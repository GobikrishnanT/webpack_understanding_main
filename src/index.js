import createObject from './utils/intro';

const myArray = ['Gobi', 'Tharani', 'Jayanthi', 'Thiyagarajan'];

const objectArray = myArray.map((eachName) => createObject(eachName, 20));

console.log(objectArray);
