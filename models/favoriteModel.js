// 1. First, let's create the Favorite model (favoriteModel.js)

const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet", 
      required: true
    }
  },
  { timestamps: true }
);

// Compound index to ensure a user can't favorite the same pet twice
favoriteSchema.index({ user: 1, pet: 1 }, { unique: true });

module.exports = mongoose.model("Favorite", favoriteSchema);





// const mongoose = require("mongoose");

// const favouriteSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   petId: {
//     type: String,
//     required: true,
//   },
//   petDetails: {
//     type: Object,
//     required: true,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("Favourite", favouriteSchema);









// const mongoose = require("mongoose");

// const favoriteSchema = new mongoose.Schema({
//   userId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "User", 
//     required: true 
//   },
//   petId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "Pet", 
//     required: true 
//   }
// });

// module.exports = mongoose.model("Favorite", favoriteSchema);








// const mongoose = require("mongoose");

// const favoriteSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
// });

// module.exports = mongoose.model("Favorite", favoriteSchema);




// const mongoose = require("mongoose");

// const favoriteSchema = new mongoose.Schema({
//   userId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "User", 
//     required: true 
//   },
//   petId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "Pet", 
//     required: true 
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Favorite", favoriteSchema);
