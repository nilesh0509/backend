const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  imageUrl: { 
    type: String, 
    required: true, 
    default: "https://via.placeholder.com/400",
    validate: {
      validator: function(v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(v); // URL format validation
      },
      message: "Please provide a valid image URL"
    }
  },
  title: { 
    type: String, 
    required: true,
    minlength: 3,  // Ensuring the title is at least 3 characters long
    maxlength: 100 // You can adjust the length limit as per your requirement
  }
});

// Exporting the model
module.exports = mongoose.model("Slider", sliderSchema);








// const mongoose = require("mongoose");

// const sliderSchema = new mongoose.Schema({
//   imageUrl: { 
//     type: String, 
//     required: true, 
//     default: "https://via.placeholder.com/400" // Default image URL
//   },
//   title: { type: String, required: true }
// });

// module.exports = mongoose.model("Slider", sliderSchema);





// const mongoose = require("mongoose");

// const sliderSchema = new mongoose.Schema({
//   imageUrl: { type: String, required: true },
//   title: { type: String, required: true },
// });

// module.exports = mongoose.model("Slider", sliderSchema);
