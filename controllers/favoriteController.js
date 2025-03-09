// 3. Now, let's create the favorites controller (favoriteController.js)

const Favorite = require("../models/favoriteModel");
const Pet = require("../models/petModel"); // Adjust path as needed

// Get all favorites for the current user
exports.getFavorites = async (req, res) => {
  try {
    // Find all favorites for the current user
    const favorites = await Favorite.find({ user: req.user._id }).populate({
      path: "pet",
      select: "name breed age imageUrl description"
    });

    // Extract just the pet data
    const favoritePets = favorites.map(favorite => favorite.pet);

    res.status(200).json(favoritePets);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch favorites",
      error: error.message
    });
  }
};

// Add a pet to favorites
exports.addToFavorites = async (req, res) => {
  try {
    const { petId } = req.body;

    if (!petId) {
      return res.status(400).json({ message: "Pet ID is required" });
    }

    // Check if pet exists
    const petExists = await Pet.findById(petId);
    if (!petExists) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Check if already in favorites
    const alreadyFavorited = await Favorite.findOne({
      user: req.user._id,
      pet: petId
    });

    if (alreadyFavorited) {
      return res.status(400).json({ message: "Pet already in favorites" });
    }

    // Create new favorite
    const newFavorite = new Favorite({
      user: req.user._id,
      pet: petId
    });

    await newFavorite.save();

    res.status(201).json({
      message: "Pet added to favorites successfully",
      favorite: {
        id: newFavorite._id,
        pet: petId
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add to favorites",
      error: error.message
    });
  }
};

// Remove a pet from favorites
exports.removeFromFavorites = async (req, res) => {
  try {
    const petId = req.params.petId;

    // Find and remove the favorite
    const result = await Favorite.findOneAndDelete({
      user: req.user._id,
      pet: petId
    });

    if (!result) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "Pet removed from favorites successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove from favorites",
      error: error.message
    });
  }
};

// Check if a pet is in favorites
exports.checkFavorite = async (req, res) => {
  try {
    const petId = req.params.petId;

    const favorite = await Favorite.findOne({
      user: req.user._id,
      pet: petId
    });

    res.status(200).json({ isFavorite: !!favorite });
  } catch (error) {
    res.status(500).json({
      message: "Failed to check favorite status",
      error: error.message
    });
  }
};










// const Favourite = require("../models/favoriteModel");

// // ✅ Add Favourite
// exports.addFavourite = async (req, res) => {
//   const { petId, petDetails } = req.body;
//   const userId = req.user.id;

//   if (!petId || !petDetails) {
//     return res.status(400).json({ message: "Pet details are required." });
//   }

//   try {
//     const existingFavourite = await Favourite.findOne({ userId, petId });
//     if (existingFavourite) {
//       return res.status(400).json({ message: "Pet already marked as favourite." });
//     }

//     const favourite = new Favourite({ userId, petId, petDetails });
//     await favourite.save();

//     res.status(201).json({ message: "Favourite added successfully", favourite });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add favourite", error: error.message });
//   }
// };

// // ✅ Fetch Favourites by User
// exports.getFavouritesByUser = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const favourites = await Favourite.find({ userId });
//     res.status(200).json(favourites);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch favourites", error: error.message });
//   }
// };

// // ✅ Remove Favourite
// exports.removeFavourite = async (req, res) => {
//   const { petId } = req.params;
//   const userId = req.user.id;

//   try {
//     const result = await Favourite.findOneAndDelete({ userId, petId });
//     if (!result) {
//       return res.status(404).json({ message: "Favourite not found." });
//     }

//     res.status(200).json({ message: "Favourite removed successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to remove favourite", error: error.message });
//   }
// };





// const Favourite = require("../models/favoriteModel");

// // ✅ Add Favourite
// exports.addFavourite = async (req, res) => {
//   const { petId, petDetails } = req.body;
//   const userId = req.user.id; // Fetch user ID from JWT

//   if (!petId || !petDetails) {
//     return res.status(400).json({ message: "Pet details are required." });
//   }

//   try {
//     const existingFavourite = await Favourite.findOne({ userId, petId });
//     if (existingFavourite) {
//       return res.status(400).json({ message: "Pet already marked as favourite." });
//     }

//     const favourite = new Favourite({ userId, petId, petDetails });
//     await favourite.save();

//     res.status(201).json({ message: "Favourite added successfully", favourite });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add favourite", error: error.message });
//   }
// };

// // ✅ Fetch Favourites by User
// exports.getFavouritesByUser = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const favourites = await Favourite.find({ userId });

//     if (!favourites.length) {
//       return res.status(404).json({ message: "No favourites found." });
//     }

//     res.status(200).json(favourites);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch favourites", error: error.message });
//   }
// };





// const Favourite = require("../models/favoriteModel");

// // ✅ Add Favourite
// exports.addFavourite = async (req, res) => {
//   const { userId, petId, petDetails } = req.body;

//   if (!userId || !petId || !petDetails) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   try {
//     // Avoid duplicate favourites
//     const existingFavourite = await Favourite.findOne({ userId, petId });
//     if (existingFavourite) {
//       return res.status(400).json({ message: "Pet already marked as favourite." });
//     }

//     const favourite = new Favourite({ userId, petId, petDetails });
//     await favourite.save();
    
//     res.status(201).json({ message: "Favourite added successfully", favourite });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add favourite", error: error.message });
//   }
// };

// // ✅ Remove Favourite
// exports.removeFavourite = async (req, res) => {
//   const { userId, petId } = req.params;

//   try {
//     const deletedFavourite = await Favourite.findOneAndDelete({ userId, petId });

//     if (!deletedFavourite) {
//       return res.status(404).json({ message: "Favourite not found." });
//     }

//     res.status(200).json({ message: "Favourite removed successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to remove favourite", error: error.message });
//   }
// };

// // ✅ Fetch Favourites by User
// exports.getFavouritesByUser = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const favourites = await Favourite.find({ userId });

//     if (!favourites.length) {
//       return res.status(404).json({ message: "No favourites found." });
//     }

//     res.status(200).json(favourites);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch favourites", error: error.message });
//   }
// };









// const Favorite = require("../models/favoriteModel");
// const Pet = require("../models/petModel");

// // ✅ 1. Get All Favorite Pets by User ID
// exports.getFavorites = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const favorites = await Favorite.find({ userId }).populate("petId");
//     res.status(200).json(favorites);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch favorites", error: error.message });
//   }
// };

// // ✅ 2. Toggle Favorite (Add/Remove)
// exports.toggleFavorite = async (req, res) => {
//   const { userId, petId } = req.body;

//   try {
//     const existingFavorite = await Favorite.findOne({ userId, petId });

//     if (existingFavorite) {
//       await Favorite.deleteOne({ _id: existingFavorite._id });
//       return res.json({ message: "Pet removed from favorites." });
//     } else {
//       const newFavorite = new Favorite({ userId, petId });
//       await newFavorite.save();
//       return res.json({ message: "Pet added to favorites." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Failed to toggle favorite", error: error.message });
//   }
// };











// const Favorite = require("../models/favoriteModel");

// // ✅ Toggle Favorite Logic
// exports.toggleFavorite = async (req, res) => {
//   const { userId, petId } = req.body;

//   try {
//     const existingFavorite = await Favorite.findOne({ userId, petId });

//     if (existingFavorite) {
//       await Favorite.deleteOne({ _id: existingFavorite._id });
//       return res.json({ message: "Pet removed from favorites." });
//     } else {
//       const newFavorite = new Favorite({ userId, petId });
//       await newFavorite.save();
//       return res.json({ message: "Pet added to favorites." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error toggling favorite", error: error.message });
//   }
// };

// // ✅ Get All Favorites
// exports.getFavorites = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const favorites = await Favorite.find({ userId }).populate("petId");
//     res.json(favorites);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching favorites", error: error.message });
//   }
// };








// const Favorite = require("../models/favoriteModel");

// // ✅ Toggle Favorite (Add or Remove)
// exports.toggleFavorite = async (req, res) => {
//   const { userId, petId } = req.body;

//   if (!userId || !petId) {
//     return res.status(400).json({ message: "User ID and Pet ID are required." });
//   }

//   try {
//     // Check if the pet is already in the favorite list
//     const existingFavorite = await Favorite.findOne({ userId, petId });

//     if (existingFavorite) {
//       // Remove from favorites
//       await Favorite.deleteOne({ _id: existingFavorite._id });
//       return res.status(200).json({ message: "Pet removed from favorites." });
//     } else {
//       // Add to favorites
//       const newFavorite = new Favorite({ userId, petId });
//       await newFavorite.save();
//       return res.status(201).json({ message: "Pet added to favorites." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error toggling favorite", error: error.message });
//   }
// };

// // ✅ Get All Favorite Pets for a User
// exports.getFavorites = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const favorites = await Favorite.find({ userId }).populate("petId"); 
//     res.status(200).json(favorites);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching favorites", error: error.message });
//   }
// };
