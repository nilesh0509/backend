const Slider = require("./../models/sliderModel");

const DEFAULT_IMAGE = "https://via.placeholder.com/400"; // Change this to any default image URL

// ✅ 1. Fetch all sliders
exports.getSliders = async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);  // Returning status 200 for successful data retrieval
  } catch (error) {
    res.status(500).json({ message: "Error fetching sliders", error: error.message });
  }
};

// ✅ 2. Add a new slider
exports.addSlider = async (req, res) => {
  try {
    const { imageUrl, title } = req.body;

    // Validate inputs
    if (!title || title.length < 3 || title.length > 100) {
      return res.status(400).json({ message: "Title must be between 3 and 100 characters." });
    }

    const newSlide = new Slider({
      imageUrl: imageUrl || DEFAULT_IMAGE, // Use default image if not provided
      title
    });

    await newSlide.save();
    res.status(201).json({ message: "Slide added successfully", newSlide });
  } catch (error) {
    // Check if the error is related to mongoose validation (e.g., missing required fields)
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation failed", error: error.message });
    }
    res.status(500).json({ message: "Error adding slide", error: error.message });
  }
};





// const Slider = require("./../models/sliderModel");

// const DEFAULT_IMAGE = "https://via.placeholder.com/400"; // Change this to any default image URL

// // ✅ 1. Fetch all sliders
// exports.getSliders = async (req, res) => {
//   try {
//     const sliders = await Slider.find();
//     res.json(sliders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching sliders", error });
//   }
// };

// // ✅ 2. Add a new slider
// exports.addSlider = async (req, res) => {
//   try {
//     const { imageUrl, title } = req.body;

//     const newSlide = new Slider({
//       imageUrl: imageUrl || DEFAULT_IMAGE, // Use default image if not provided
//       title
//     });

//     await newSlide.save();
//     res.status(201).json({ message: "Slide added successfully", newSlide });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding slide", error });
//   }
// };





// const Slider = require("./../models/sliderModel")

// // Get all slider images
// exports.getSliders = async (req, res) => {
//   try {
//     const sliders = await Slider.find();
//     res.json(sliders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching sliders", error });
//   }
// };

// // Add a new slide
// exports.addSlider = async (req, res) => {
//   try {
//     const { imageUrl, title } = req.body;
//     const newSlide = new Slider({ imageUrl, title });
//     await newSlide.save();
//     res.status(201).json({ message: "Slide added successfully", newSlide });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding slide", error });
//   }
// };
