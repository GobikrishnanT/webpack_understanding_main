function ObjectContructor(name, age) {
  this.name = name;
  this.age = age;
}

function createObject(name, age) {
  const createdObject = new ObjectContructor(name, age);
  return createdObject;
}

export default createObject;
