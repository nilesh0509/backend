// const express = require("express");
// const Pet = require("./../models/petModel");
// // const Category = require("./../models/categoryModel")

// const router = express.Router();

// // Fetch pets by category
// router.get("/category/:categoryName", async (req, res) => {
//   try {
//     const category = await Category.findOne({ name: req.params.categoryName });
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     const pets = await Pet.find({ category: category._id }).populate("category");
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add a pet
// router.post("/", async (req, res) => {
//   try {
//     const pet = new Pet(req.body);
//     await pet.save();
//     res.status(201).json(pet);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;









// const express = require("express");
// const Pet = require("./../models/petModel");

// const router = express.Router();

// // 1️⃣ Fetch pets by category
// router.get("/category/:categoryId", async (req, res) => {
//   try {
//     const pets = await Pet.find({ category: req.params.categoryId });
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching pets" });
//   }
// });

// // 2️⃣ Mark/unmark pet as favorite
// router.put("/favorite/:petId", async (req, res) => {
//   try {
//     const pet = await Pet.findById(req.params.petId);
//     if (!pet) return res.status(404).json({ message: "Pet not found" });

//     pet.isFavorite = !pet.isFavorite;
//     await pet.save();

//     res.json({ message: "Favorite status updated", pet });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating favorite" });
//   }
// });

// module.exports = router;









// const express = require('express');
// const Pet = require('./../models/petModel');
// const router = express.Router();

// // Get all pets of a specific category
// router.get('/pets', async (req, res) => {
//   try {
//     const category = req.query.category || 'Dog'; // Default category is 'Dog'
//     const pets = await Pet.find({ category: category });
//     res.json(pets);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add pet to favorites
// router.post('/favorite/:id', async (req, res) => {
//   try {
//     const pet = await Pet.findById(req.params.id);
//     pet.isFavorite = !pet.isFavorite; // Toggle favorite status
//     await pet.save();
//     res.json(pet);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get pet details by ID
// router.get('/pets/:id', async (req, res) => {
//   try {
//     const pet = await Pet.findById(req.params.id).populate('owner');
//     res.json(pet);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;









const express = require("express");
const router = express.Router();
const Pet = require("./../models/petModel");

// GET all pets by category
router.get("/category/:category", async (req, res) => {
  try {
    const pets = await Pet.find({ category: req.params.category });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pets" });
  }
});

// POST a new pet
router.post("/", async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: "Failed to add pet" });
  }
});

module.exports = router;









// const express = require("express");
// const Pet = require("./../models/petModel")
// const router = express.Router();

// // ✅ Add a new pet
// router.post("/", async (req, res) => {
//   try {
//     const { name, category, age, breed, description, imageUrl, location, adoptionStatus } = req.body;

//     // Check if all required fields are present
//     if (!name || !category || !age || !breed || !imageUrl  || !location || !adoptionStatus) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     // Create a new pet instance
//     const newPet = new Pet({
//       name,
//       category,
//       age,
//       breed,
//       description,
//       imageUrl,
//       location,
//       adoptionStatus,
//     });

//     await newPet.save(); // Save to MongoDB
//     res.status(201).json({ message: "Pet added successfully!", pet: newPet });

//   } catch (error) {
//     console.error("Error adding pet:", error);
//     res.status(500).json({ message: "Server error. Could not add pet." });
//   }
// });

// // ✅ Route to Get Pets by Category
// router.get("/category/:category", async (req, res) => {
//   try {
//     const pets = await Pet.find({ category: req.params.category });
//     res.status(200).json(pets);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching pets by category" });
//   }
// });




// // router.get("/category/:category", async (req, res) => {
// //   try {
// //     const { category } = req.params;
// //     const pets = await Pet.find({ category });

// //     if (!pets.length) {
// //       return res.status(404).json({ message: "No pets found in this category" });
// //     }

// //     res.status(200).json(pets);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching pets" });
// //   }
// // });

module.exports = router;









// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const { addPet, getAllPets, getPetById, updatePet, deletePet } = require("../controllers/petController");
// const Pet = require("./../models/petModel")


// // Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Folder where images will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//   }
// });

// // File Filter to accept only images
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// // Add Pet with Image Upload (POST)
// router.post("/add", upload.single("image"), addPet);

// // Get All Pets (GET)
// router.get("/", getAllPets);

// // Get Pet by ID (GET)
// router.get("/:id", getPetById);

// // Update Pet (PUT)
// router.put("/update/:id", upload.single("image"), updatePet);

// // Delete Pet (DELETE)
// router.delete("/delete/:id", deletePet);


// // Get all pets
// router.get("/", async (req, res) => {
//   try {
//     const pets = await Pet.find();
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching pets" });
//   }
// });


// // Get pets by category

// router.get("/category/:category", async (req, res) => {
//   try {
//     const pets = await Pet.find({ category: req.params.category });
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // router.get("/category/:category", async (req, res) => {
// //   try {
// //     const pets = await Pet.find({ category: req.params.category });
// //     res.json(pets);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching pets by category" });
// //   }
// // });



// // Get all pet categories
// // router.get("/categories", async (req, res) => {
// //   try {
// //     const categories = await Pet.distinct("category");
// //     res.json(categories);
// //   } catch (error) {
// //     res.status(500).json({ message: "Failed to fetch categories" });
// //   }
// // });

// // Get pets by category
// // router.get("/:category", async (req, res) => {
// //   try {
// //     const { category } = req.params;
// //     const pets = await Pet.find({ category });
// //     res.json(pets);
// //   } catch (error) {
// //     res.status(500).json({ message: "Failed to fetch pets" });
// //   }
// // });

// module.exports = router;
