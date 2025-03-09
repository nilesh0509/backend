const Pet = require("../models/petModel");

// Add a Pet
exports.addPet = async (req, res) => {
  try {
    const { name, species, breed, age, description, location, adoptionStatus } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Save image path

    if (!name || !species || !age) {
      return res.status(400).json({ message: "Please provide required fields." });
    }

    const pet = new Pet({
      name,
      species,
      breed,
      age,
      description,
      location,
      adoptionStatus,
      imageUrl
    });

    await pet.save();
    res.status(201).json({ message: "Pet added successfully", pet });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get All Pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get Pet by ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update Pet
exports.updatePet = async (req, res) => {
    try {
      const petId = req.params.id;
      const updateData = req.body;
  
      if (req.file) {
        updateData.imageUrl = `/uploads/${req.file.filename}`;
      }
  
      const updatedPet = await Pet.findByIdAndUpdate(petId, updateData, { new: true });
      if (!updatedPet) return res.status(404).json({ message: "Pet not found" });
  
      res.status(200).json({ message: "Pet updated successfully", updatedPet });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  


// exports.updatePet = async (req, res) => {
//   try {
//     const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPet) return res.status(404).json({ message: "Pet not found" });

//     res.status(200).json({ message: "Pet updated successfully", updatedPet });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

// Delete Pet
exports.deletePet = async (req, res) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) return res.status(404).json({ message: "Pet not found" });

    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};