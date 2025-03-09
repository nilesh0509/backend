const express = require("express");
const router = express.Router();
const { getCategories, addCategory } = require("./../controllers/categoryController");

// ✅ Route to fetch all categories
router.get("/", getCategories);

// ✅ Route to add a new category
router.post("/", addCategory);

module.exports = router;









// const express = require('express');
// const router = express.Router();
// const {
//   createCategory,
//   getAllCategories,
//   getCategoryByName,
//   deleteCategory
// } = require('./../controllers/categoryController');

// router.post('/', createCategory);                 // POST /api/categories -> Create a category
// router.get('/', getAllCategories);                // GET /api/categories -> Get all categories
// router.get('/:name', getCategoryByName);          // GET /api/categories/:name -> Get category by name
// router.delete('/:id', deleteCategory);            // DELETE /api/categories/:id -> Delete category

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const categoryController = require('./../controllers/categoryController');

// router.post('/categories', categoryController.createCategory);
// router.get('/categories', categoryController.getAllCategories);
// router.get('/categories/:id', categoryController.getCategoryById);
// router.put('/categories/:id', categoryController.updateCategory);
// router.delete('/categories/:id', categoryController.deleteCategory);

// module.exports = router;









// const express = require("express");
// const Category = require("./../models/categoryModel");

// const router = express.Router();

// // 1️⃣ Fetch all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching categories" });
//   }
// });

// // 2️⃣ Add a new category (for testing)
// router.post("/", async (req, res) => {
//   try {
//     const { name, imageUrl } = req.body;
//     const category = new Category({ name, imageUrl });
//     await category.save();
//     res.json(category);
//   } catch (error) {
//     res.status(400).json({ message: "Error adding category" });
//   }
// });

// module.exports = router;









// const express = require("express");
// const router = express.Router();
// const Category = require("./../models/categoryModel");

// // GET all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch categories" });
//   }
// });

// // POST a new category
// router.post("/", async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(400).json({ error: "Failed to create category" });
//   }
// });

// module.exports = router;









// const express = require("express");
// const Category = require("./../models/categoryModel");

// const router = express.Router();

// // ✅ Create a New Category
// router.post("/", async (req, res) => {
//   try {
//     const { name, imageUrl } = req.body;
//     const category = new Category({ name, imageUrl });
//     await category.save();
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // ✅ Fetch All Categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;







// const express = require("express");
// const Category = require("./../models/categoryModel");

// const router = express.Router();

// // 🟢 POST: Add a new category
// router.post("/", async (req, res) => {
//   try {
//     const { name, imageUrl } = req.body;

//     if (!name || !imageUrl) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: "Category already exists" });
//     }

//     const newCategory = new Category({ name, imageUrl });
//     await newCategory.save();
//     res.status(201).json(newCategory);
//   } catch (error) {
//     console.error("Error adding category:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // 🔵 GET: Fetch all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;






// const express = require("express");
// const Category = require("./../models/categoryModule");

// const router = express.Router();

// // Get all categories
// router.get("/", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     res.status(500).json({ message: "Error fetching categories" });
//   }
// });

// // Add new category (for testing)
// router.post("/", async (req, res) => {
//   try {
//     const { name, imageUrl } = req.body;
//     if (!name || !imageUrl) return res.status(400).json({ message: "All fields required" });

//     const newCategory = new Category({ name, imageUrl });
//     await newCategory.save();
//     res.status(201).json(newCategory);
//   } catch (error) {
//     console.error("Error adding category:", error);
//     res.status(500).json({ message: "Error adding category" });
//   }
// });

// module.exports = router;
