import createObject from './utils/intro';
import endFunction from './utils/end';

const myArray = ['Gobi', 'Tharani', 'Jayanthi', 'Thiyagarajan'];

const objectArray = myArray.map((eachName) => createObject(eachName, 20));

objectArray.forEach((eachDet) => {
  console.info(eachDet);
});
console.log(endFunction('Welcome again'));

const myObject = {
  name: 'Gobi',
  age: '22',
};

const newObject = { ...myObject, clg: 'KEC' };

console.log(newObject);
