// function calcAverageCalories(days) {
//     let totalCalories = 0;
//     for (let i = 0; i < days.length; i++) {
//       totalCalories += days[i].calories;
//     }
//     return totalCalories / days.length;
//   }

// function calcAverageCalories(days) {
//     let averegeColories = 0;
//     for (const item of days) {
//         averegeColories += item.calories;
//     }
//     console.log(
//         days.length != 0 ? (averegeColories = averegeColories / days.length) : 0,
//     );
// }


// function calcAverageCalories(days) {
//   if (!Array.isArray(days) || days.length === 0) {
//     return "0";
//   }
//   let totalCalories = 0;
//   let numberOfDays = 0;
//   for (let i = 0; i < days.length; i++) {
//     if (days[i].hasOwnProperty('calories')) {
//       totalCalories += days[i].calories;
//       numberOfDays++;
//     }
//   }
//   if (numberOfDays === 0) {
//     return "Всі об'єкти в масиві не містять властивість 'calories'";
//   }
//   const averageCalories = totalCalories / numberOfDays;
//   return averageCalories;
// }

function calcAverageCalories(days) { 
  if (!Array.isArray(days) || days.length === 0) {
    return 0; 
  }
  let totalCalories = 0;
  for (let i = 0; i < days.length; i++) {
    if (days[i].hasOwnProperty('calories')) {
      totalCalories += days[i].calories;
    }
  }
  const averageCalories = totalCalories / days.length;
  return averageCalories;
}

  console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); 
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); 
  console.log(
    calcAverageCalories([])
  ); 