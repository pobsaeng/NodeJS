class Point {
  constructor(options){
    this.id = options.id;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.phone = options.phone;
  }
  get Id() { return this.id; }
  set Id(value) { this.id = value; }
  get FirstName() { return this.firstName; }
  set FirstName(value) { this.firstName = value; }
  get LirstName() { return this.lastName; }
  set LirstName(value) { this.lastName = value; }
  get Phone() { return this.phone; }
  set Phone(value) { this.phone = value; }
}
let objects = [];
for(let i = 0; i < 20; i++){
  objects.push({
    id: '7000301'+i,
    firstName: 'First Name'+i,
    lastName: 'Last Name '+i,
    phone: '098-452365'+i
  });
}

let arrObjects = [];
for (const obj of objects) {
  let point = new Point(obj);
  arrObjects.push( point );
}
module.exports = arrObjects;