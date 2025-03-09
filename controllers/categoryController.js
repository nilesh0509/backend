const Category = require("./../models/categoryModel");

// ✅ 1. Fetch All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error: error.message });
  }
};

// ✅ 2. Add a New Category
exports.addCategory = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;

    // Input validation
    if (!name || !imageUrl) {
      return res.status(400).json({ message: "Name and Image URL are required." });
    }

    const newCategory = new Category({ name, imageUrl });
    await newCategory.save();

    res.status(201).json({ message: "Category added successfully", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Failed to add category", error: error.message });
  }
};









// const Category = require('./../models/categoryModel');

// // 1️⃣ Create Category
// exports.createCategory = async (req, res) => {
//   try {
//     const { name, imageUrl } = req.body;

//     // Check if category exists
//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({ message: "Category already exists" });
//     }

//     const category = await Category.create({ name, imageUrl });
//     res.status(201).json({ message: "Category created successfully", category });

//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // 2️⃣ Get All Categories
// exports.getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.aggregate([
//       {
//         $project: {
//           name: 1,
//           imageUrl: 1
//         }
//       }
//     ]);
//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // 3️⃣ Get Category by Name
// exports.getCategoryByName = async (req, res) => {
//   try {
//     const categoryName = req.params.name;

//     const category = await Category.findOne({ name: categoryName });
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // 4️⃣ Delete Category
// exports.deleteCategory = async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: "Category not found" });
//     }

//     res.status(200).json({ message: "Category deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };









// const Category = require('./../models/categoryModel'); // Import the Category model

// exports.createCategory = async (req, res) => {
//     try {
//       const { name, imageUrl } = req.body;
  
//       // Check if category already exists
//       const existingCategory = await Category.findOne({ name });
//       if (existingCategory) {
//         return res.status(400).json({ message: "Category already exists" });
//       }
  
//       // Create a new category
//       const category = new Category({ name, imageUrl });
//       await category.save();
  
//       res.status(201).json({ message: "Category created successfully", category });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };
  

//   exports.getAllCategories = async (req, res) => {
//     try {
//       const categories = await Category.find();
//       res.status(200).json(categories);
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };

//   exports.getCategoryById = async (req, res) => {
//     try {
//       const category = await Category.findById(req.params.id);
//       if (!category) {
//         return res.status(404).json({ message: "Category not found" });
//       }
//       res.status(200).json(category);
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };

//   exports.updateCategory = async (req, res) => {
//     try {
//       const { name, imageUrl } = req.body;
  
//       const updatedCategory = await Category.findByIdAndUpdate(
//         req.params.id,
//         { name, imageUrl },
//         { new: true }
//       );
  
//       if (!updatedCategory) {
//         return res.status(404).json({ message: "Category not found" });
//       }
  
//       res.status(200).json({ message: "Category updated", updatedCategory });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };

//   exports.deleteCategory = async (req, res) => {
//     try {
//       const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//       if (!deletedCategory) {
//         return res.status(404).json({ message: "Category not found" });
//       }
  
//       res.status(200).json({ message: "Category deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };
  
