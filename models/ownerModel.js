const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true }, // Can be a phone number or email
});

const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;
