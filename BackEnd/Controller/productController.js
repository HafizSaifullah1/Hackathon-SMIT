const ProductModel = require("../models/productModel");


const productController = {
    getProducts: async (req, res) => {
        try {
            const products = await ProductModel.find();

            res.status(200).json({
                isSuccessful: true,
                products,
            });
        } catch (error) {
            res.status(500).json({
                isSuccessful: false,
                error: error.message,
            });
        }
    },

    getProductById: async (req, res) => {
        try {
          const { id } = req.params;
    
          // Mongoose ID validation
          if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
              isSuccessful: false,
              error: "Invalid ID format",
            });
          }
    
          // Fetch product by ID
          const product = await ProductModel.findById(id);
    
          if (!product) {
            return res.status(404).json({
              isSuccessful: false,
              error: "Product not found",
            });
          }
    
          // Success response with product data
          res.status(200).json({
            isSuccessful: true,
            product,
          });
        } catch (error) {
          // Error handling
          res.status(500).json({
            isSuccessful: false,
            error: error.message,
          });
        }
      },
    addProduct: async (req, res) => {
        try {
            const body = req.body;
            const obj = {
                name: body.name,
                description: body.description,
                price: body.price,
                category: body.category,
                }

            const modelObj = new ProductModel(obj);

            await modelObj.save();

            res.status(201).json({
                isSuccessful: true,
                message: "Product created successfully",
            });
        } catch (error) {
            res.status(500).json({
                isSuccessful: false,
                error: error.message,
            });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, price, category, } = req.body;

            const updatedProduct = await ProductModel.findByIdAndUpdate(
                id,
                {
                    name,
                    description,
                    price,
                    category,
                    
                },
                { new: true }
            );

            if (!updatedProduct) {
                return res.status(404).json({
                    isSuccessful: false,
                    error: "Product not found",
                });
            }

            res.status(200).json({
                isSuccessful: true,
                message: "Product updated successfully",
                updatedProduct,
            });
        } catch (error) {
            res.status(500).json({
                isSuccessful: false,
                error: error.message,
            });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedProduct = await ProductModel.findByIdAndDelete(id);

            if (!deletedProduct) {
                return res.status(404).json({
                    isSuccessful: false,
                    error: "Product not found",
                });
            }

            res.status(200).json({
                isSuccessful: true,
                message: "Product deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                isSuccessful: false,
                error: error.message,
            });
        }
    }
}


module.exports = productController;



