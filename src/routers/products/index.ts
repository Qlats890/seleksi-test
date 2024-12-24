import express from "express";
import { ProductsController } from "../../controllers/products";
import { ProductValidation } from "../../middleware/validations/product/product.validation";

const router = express.Router()

router.post('/',ProductValidation.createProduct,ProductsController.createProduct)
router.get('/',ProductsController.getAllProducts)
router.get('/:id',ProductsController.getProductById)
router.delete('/:id',ProductsController.deleteProduct)

export{
  router
}