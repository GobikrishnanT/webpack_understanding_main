import createObject from './utils/intro';
import endFunction from './utils/end';

const myArray = ['Gobi', 'Tharani', 'Jayanthi', 'Thiyagarajan'];

const objectArray = myArray.map((eachName) => createObject(eachName, 20));

console.log(objectArray);
console.log(endFunction('Welcome again'));
