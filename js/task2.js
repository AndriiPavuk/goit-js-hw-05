const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []


// const getuserswithfriend = (users, friendname) => {
//   return users.filter(user => user.friends.includes(friendname));
// };

// const allusers = [
//   {
//     name: 'moore hensley',
//     friends: ['sharron pace'],
//   },
//   {
//     name: 'sharlene bush',
//     friends: ['briana decker', 'sharron pace'],
//   },
//   {
//     name: 'ross vazquez',
//     friends: ['marilyn mcintosh', 'padilla garrison', 'naomi buckner'],
//   },
//   {
//     name: 'elma head',
//     friends: ['goldie gentry', 'aisha tran'],
//   },
//   {
//     name: 'carey barr',
//     friends: ['jordan sampson', 'eddie strong'],
//   },
//   {
//     name: 'blackburn dotson',
//     friends: ['jacklyn lucas', 'linda chapman'],
//   },
//   {
//     name: 'sheree anthony',
//     friends: ['goldie gentry', 'briana decker'],
//   },
// ];

// console.log(getuserswithfriend(allusers, 'briana decker'));
// console.log(getuserswithfriend(allusers, 'goldie gentry'));
// console.log(getuserswithfriend(allusers, 'adrian cross'));