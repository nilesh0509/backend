const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(v);
      },
      message: "Please provide a valid image URL."
    }
  }
});

module.exports = mongoose.model("Category", categorySchema);









// const mongoose = require("mongoose");

// const categorySchema = new mongoose.Schema({
//   name: { type: String, required: [true, 'Category name is required'], unique: true,trim: true },
//   imageUrl: { 
//     type: String, 
//     required: [true, 'Category image URL is required'], 
//     default: "https://via.placeholder.com/400",
//     validate: {
//       validator: function(v) {
//         return /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(v); // URL format validation
//       },
//       message: "Please provide a valid image URL"
//     }}   
// }, { timestamps: true });

// const Category = mongoose.model("Category", categorySchema);
// module.exports = Category;

// const mongoose = require("mongoose");

// const sliderSchema = new mongoose.Schema({
//   imageUrl: { 
//     type: String, 
//     required: true, 
//     default: "https://via.placeholder.com/400",
//     validate: {
//       validator: function(v) {
//         return /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(v); // URL format validation
//       },
//       message: "Please provide a valid image URL"
//     }
//   },
//   title: { 
//     type: String, 
//     required: true,
//     minlength: 3,  // Ensuring the title is at least 3 characters long
//     maxlength: 100 // You can adjust the length limit as per your requirement
//   }
// });

// // Exporting the model
// module.exports = mongoose.model("Slider", sliderSchema);




// const mongoose = require("mongoose");

// const CategorySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   imageUrl: { type: String, required: true }, // Logo or category image
// });

// module.exports = mongoose.model("Category", CategorySchema);
