const theaterSeats = [
	['x', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
];

function bookSeat(row, col) {
	if (theaterSeats[row][col] === '0') {
		theaterSeats[row][col] = 'x';
		updateSeatStatus(row, col, 'booked');
		alert(`Seat ${String.fromCharCode(65 + row)} ${col + 1} is booked.`);

	}
	else {
		alert(`Seat ${String.fromCharCode(65 + row)} ${col + 1} is already taked.`);
	}
}

function updateSeatStatus(row, col, status) {
	const seats = document.getElementsByClassName('seat');
	const index = row * 3 + col;
	seats[index].classList.remove('available', 'booked');
	seats[index].classList.add(status);
}

function bookRandomSeat() {
	const availableSeats = [];

	for (let row = 0; row < theaterSeats.length; row++) {
		for (let col = 0; col < theaterSeats[row].length; col++) {
			if (theaterSeats[row][col] === 'o') {
				availableSeats.push({ row, col });
			}
		}
	}
	if (availableSeats.length > 0) {
		const randomIndex = Math.floor(Math.random() * availableSeats.length);
		const { row, col } = availableSeats[randomIndex];
		bookSeat(row, col);
	}
	else {
		alert('All seats are already booked.')
	}
}

class person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const Person1 = new person("Aly", "Hussin");
console.log(Person1.getFullName());

const myData = {
	firstName: "Mohamed",
	lastName: "Hussin",
	yearBorn: "1979",
	age: 46
};
console.log(`${myData.firstName}, ${myData.lastName} was born in ${myData.yearBorn} so he's ${myData.age}`);

const students = [
	{ name: "Alic", age: 25 },
	{ name: "Bob", age: 27 },
	{ name: "Goat", age: 29 }
];

for (let i = 0; i < students.length; i++) {
	console.log(`${students[i].name} is ${students[i].age} years old`);
}

