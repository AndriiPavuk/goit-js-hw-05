// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);

// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(allUsers, 'male')); // 12053

// console.log(getTotalBalanceByGender(allUsers, 'female')); // 8863


// const gettotalbalancebygender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };

// const allusers = [
//   {
//     name: "moore hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "sharlene bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "ross vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "elma head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "carey barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "blackburn dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "sheree anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(gettotalbalancebygender(allusers, "male")); // 12053
// console.log(gettotalbalancebygender(allusers, "female")); // 8863




const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => user.gender === gender)
                .reduce((acc, user) => acc + user.balance,  0);
                
}

const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863