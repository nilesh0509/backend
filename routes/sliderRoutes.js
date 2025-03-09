const express = require("express");
const router = express.Router();
const { getSliders, addSlider } = require("./../controllers/sliderController");
const { validateSliderInput } = require("./../middleware/sliderValidation");

// ✅ Route to fetch all slides
router.get("/", getSliders);

// ✅ Route to add a new slide with input validation middleware
router.post("/", validateSliderInput, addSlider);

module.exports = router;





// const express = require("express");
// const router = express.Router();
// const { getSliders, addSlider } = require("./../controllers/sliderController");

// // Route to get all slides
// // ✅ Route to fetch all slides
// router.get("/", getSliders);

// // router.get("/", async (req, res) => {
// //     console.log("Received GET request to /api/sliders");
// //     try {
// //       const sliders = await Slider.find();
// //       console.log("Sliders fetched:", sliders);
// //       res.json(sliders);
// //     } catch (error) {
// //       console.error("Database error:", error);
// //       res.status(500).json({ message: "Failed to fetch sliders" });
// //     }
// //   });

// // Route to add a new slide
// // ✅ Route to add a new slide
// router.post("/add", addSlider);

// module.exports = router;
