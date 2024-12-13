/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "Aggregation";
const collection = "Test";

use(database);

// Create a new collection.
// db.test.find()

// db.test.insertMany([
//     {
//         name: 'John Doe',
//         age: 25,
//         gender: 'Male',
//         grades: [85, 90, 95]
//     },
//     {
//         name: 'Jane Smith',
//         age: 28,
//         gender: 'Female',
//         grades: [92, 88, 95]
//     },
//     {
//         name: 'Mike Johnson',
//         age: 30,
//         gender: 'Male',
//         grades: [88, 90, 92]
//     },
//     {
//         name: 'Emily Davis',
//         age: 27,
//         gender: 'Female',
//         grades: [80, 85, 90]
//     },
//     {
//         name: 'Sarah Wilson',
//         gender: 'Female',
//         age: 29,
//         grades: [87, 92, 94]
//     }
// ])

// db.test.aggregate([{$group: {
//   _id:"$gender",
//     count:{$sum:1}

// }}])

// db.test.deleteMany({})

db.test.aggregate([
  {
    $match: {
      gender: "Male",
      grades: 90,
    },
  },
  {
    $count: "No_Of_MALE",
  },
])
