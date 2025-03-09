// const mongoose = require("mongoose");

// const PetSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   breed: { type: String, required: true },
//   age: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
//   category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
//   owner: {
//     name: String,
//     contact: String,
//   },
//   healthInfo: {
//     diseases: [String],
//     diet: String,
//     likes: [String],
//     dislikes: [String],
//   },
//   isFavorite: { type: Boolean, default: false },
// });

// module.exports = mongoose.model("Pet", PetSchema);









const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please enter name'] },
  breed: { type: String, required: [true, 'Please enter breed'] },
  category: { type: String, required: [true, 'Please enter category'] },
  age: { type: Number, required: [true, 'Please enter age'] },
  imageUrl: { type: String, required: true },
  description: { type: String },
  // owner: {
  //   name: { type: String, required: [true, 'Please enter owner name'] },
  //   contact: { type: String, required: [true, 'Please enter contact'] }
  // },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  diet: { type: String },
  preferences: { type: String },
  health: {
    diseases: { type: String },
    otherDetails: { type: String }
  },
  isFavorite: { type: Boolean, default: false }
}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);









// const mongoose = require("mongoose");

// const petSchema = new mongoose.Schema({
// name: {
//     type: String,
//     required: [true, 'Please enter name'],
//     trim: true,
// },
// category: { 
//   type: String, required: true 
// },
// age: {
//   type: Number,
//   required: [true, 'Please enter age'],
// },
// breed: {
//   type: String,
//   required: [true, 'Please enter breed'],
// },
  
// description: { type: String },
// imageUrl: { type: String, required: true } ,// Store image path or URL
// location: { type: String },
// adoptionStatus: { type: String, enum: ["Available", "Adopted"], default: "Available" },


// // imageUrl:{
// //     type: String,
// //     default: 'https://res.cloudinary.com/dqzqzqzqz/image',
// //     // required: [true, 'Please enter password']
// // },
// //   adopted: { type: Boolean, default: false },
// //   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// }, {timestamps: true});

// const Pet = mongoose.model("Pet", petSchema);
// module.exports = Pet;

// // module.exports = mongoose.model("Pet", petSchema);
