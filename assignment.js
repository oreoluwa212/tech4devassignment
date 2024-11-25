const users = [
  {
    firstName: "David",
    lastName: "Joseph",
    age: 62,
    productsInCart: [
      { name: "Gucci Bag", price: "500", quantity: 6 },
      { name: "Gucci Slippers", price: 700, quantity: 1 },
      { name: "Laptop", price: 1700, quantity: 3 },
      { name: "Salad", price: "20", quantity: 12 },
      { name: "Banana", price: 5, quantity: 5 },
    ],
  },
  {
    firstName: "Aliyu",
    lastName: "Sunday",
    age: 51,
    productsInCart: [
      { name: "Mirror", price: "50", quantity: 1 },
      { name: "House", price: 71000, quantity: 6 },
      { name: "Book", price: 200, quantity: 1 },
      { name: "Phone", price: "120", quantity: 6 },
      { name: "Pan", price: 15, quantity: 8 },
    ],
  },
  {
    firstName: "Mercy",
    lastName: "Chinwo",
    age: 50,
    productsInCart: [
      { name: "Hair", price: "800", quantity: 2 },
      { name: "Car", price: 2700, quantity: 1 },
      { name: "Laptop", price: 1700, quantity: 2 },
      { name: "Eggs", price: "5", quantity: 2 },
    ],
  },
  {
    firstName: "Lara",
    lastName: "Croft",
    age: 25,
    productsInCart: [
      { name: "Door", price: "250", quantity: 2 },
      { name: "Panda", price: 700, quantity: 2 },
    ],
  },
  {
    firstName: "Derek",
    lastName: "Mane",
    age: 17,
    productsInCart: [
      { name: "Land", price: "900", quantity: 6 },
      { name: "Table", price: 300, quantity: 1 },
      { name: "Chair", price: 700, quantity: 3 },
      { name: "Bed", price: "820", quantity: 12 },
      { name: "Seat", price: 335, quantity: 5 },
    ],
  },
];

// returns the current content of the array but adds a total property to each user, 
const addTotalToUsers = (users) => {
  return users.map(user => {
    const total = user.productsInCart.reduce((sum, product) => sum + (parseInt(product.price) * product.quantity), 0);
    return { ...user, total };
  });
};

// returns only users whose total is over 3500.
const filterUsersWithTotalOver3500 = (users) => {
  return users.filter(user => user.total > 3500);
};

// returns this same array but with a full name property that adds the first name and the last name.
const addFullNameToUsers = (users) => {
  return users.map(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return { ...user, fullName };
  });
};

// returns only products who have quantity more than 2.
const filterProductsWithQuantityMoreThan2 = (users) => {
  return users.map(user => {
    const filteredProducts = user.productsInCart.filter(product => product.quantity > 2);
    return { ...user, productsInCart: filteredProducts };
  });
};

// Example usage of the functions:
const usersWithTotal = addTotalToUsers(users);
console.log("users with total:", usersWithTotal);

const usersOver3500 = filterUsersWithTotalOver3500(usersWithTotal);
console.log("users with total over 3500:", usersOver3500);

const usersWithFullNames = addFullNameToUsers(usersWithTotal);
console.log("users with full name:", usersWithFullNames);

const usersWithProductsOver2 = filterProductsWithQuantityMoreThan2(users);
console.log("users with products over 2:", usersWithProductsOver2);
