const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensures price is always positive
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Furniture', 'Books', 'Food'], // Example categories
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the product is created
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the product is last updated
  },
});

// Model creation
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
