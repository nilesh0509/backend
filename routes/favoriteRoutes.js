// 4. Finally, let's create the favorites routes (favoriteRoutes.js)

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
  checkFavorite
} = require("../controllers/favoriteController");

// Protect all routes
router.use(protect);

// Get all favorites for the current user
router.get("/", getFavorites);

// Add a pet to favorites
router.post("/", addToFavorites);

// Remove a pet from favorites
router.delete("/:petId", removeFromFavorites);

// Check if a pet is in favorites
router.get("/check/:petId", checkFavorite);

module.exports = router;











// const express = require("express");
// const router = express.Router();
// const {
//   addFavourite,
//   removeFavourite,
//   getFavouritesByUser
// } = require("../controllers/favoriteController");
// const { authenticateUser } = require("../middleware/authMiddleware");

// // ✅ Route to add a favourite pet
// router.post("/", authenticateUser, addFavourite);

// // ✅ Route to remove a favourite pet
// router.delete("/:petId", authenticateUser, removeFavourite);

// // ✅ Route to get all favourite pets for a user
// router.get("/", authenticateUser, getFavouritesByUser);

// module.exports = router;







// const express = require("express");
// const router = express.Router();
// const {
//   addFavourite,
//   removeFavourite,
//   getFavouritesByUser
// } = require("../controllers/favoriteController");

// // ✅ Route to add a favourite pet
// router.post("/", addFavourite);

// // ✅ Route to remove a favourite pet
// router.delete("/:userId/:petId", removeFavourite);

// // ✅ Route to get all favourite pets for a user
// router.get("/:userId", getFavouritesByUser);

// module.exports = router;









// const express = require("express");
// const router = express.Router();
// const { getFavorites, toggleFavorite } = require("../controllers/favoriteController");

// // ✅ Route to get all favorite pets
// router.get("/:userId", getFavorites);

// // ✅ Route to toggle (add/remove) favorite pet
// router.post("/toggle", toggleFavorite);

// module.exports = router;









// const express = require("express");
// const router = express.Router();
// const { toggleFavorite, getFavorites } = require("../controllers/favoriteController");

// // ✅ Toggle favorite
// router.post("/toggle", toggleFavorite);

// // ✅ Get user's favorite pets
// router.get("/:userId", getFavorites);

// module.exports = router;






// const express = require("express");
// const router = express.Router();
// const { toggleFavorite, getFavorites } = require("../controllers/favoriteController");

// // ✅ Add/Remove Pet from Favorite List
// router.post("/toggle", toggleFavorite);

// // ✅ Get Favorite Pets by User
// router.get("/:userId", getFavorites);

// module.exports = router;
