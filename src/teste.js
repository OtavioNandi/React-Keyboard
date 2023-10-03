class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

const createPerson = (name, age) => {
	const person = new Person(name, age)
	return person
}

const p1 = createPerson("Oávio", 24)
console.log(`Meu nome é ${p1.name} e tenho ${p1.age} anos`)