
let car ={
    type:'fiat',
    model:"500", 
    color:"white"
}

console.log(car)


const person ={
    firstName:'Vishnu',
    lastName:'Kv',
    age:20
}

console.log(person)

person.nationality ='Indain'

console.log(person)


delete person.age

console.log(person)

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

  const firstPerson = new Person('vishnu','kv',26,'brown')
  const secondPerson = new Person('anshu','s Kallingal',19,'black')
  
  console.log(firstPerson)
  console.log(secondPerson)

  Person.prototype.nationality="English"
  console.log(firstPerson.nationality)


  function Car(name, mileage,max_speed){
    this.name=name;
    this.mileage =mileage;
    this.max_speed=max_speed;
  }

  console.log(Car)