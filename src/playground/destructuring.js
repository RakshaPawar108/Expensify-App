// OBJECT Destructuring

console.log("Destructuring");

const person = {
  name: "John",
  age: 27,
  location: {
    city: "San Francisco",
    temperature: 88,
  },
};

// const name = person.name;
// const age = person.age;
const { name: firstname = "Anonymous", age } = person;

console.log(`${firstname} is ${age}`);

const { city, temperature: temp } = person.location;

if (city && temp) {
  console.log(`It's ${temp} F in ${city}`);
}

const book = {
  title: "The Da Vinci Code",
  author: "Dan Brown",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self Published" } = book.publisher;

console.log(publisherName);

// ARRAY Destructuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

const [, cit, state = "New York"] = address;

console.log(`You are in ${cit}, ${state}`);

const item = ["Coffee (iced)", "$2.00", "$2.50", "$2.75"];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
