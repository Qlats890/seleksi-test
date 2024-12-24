import type { Request, Response } from "express";
import ShortUniqueId from "short-unique-id";
import path from "path";

//== database
const pathFile = "../../databases/product.db.json"
const fileProduct = Bun.file(path.resolve(__dirname, pathFile))
export class ProductsController{
  static async createProduct(req: Request, res: Response):Promise<void>{
    const products = await fileProduct.json()
    const {name, price,description} = req.body;
    try {
      //== check if product already exists
      const productList = products
      const product = productList.find((product: { name: string }) => product.name === name)
      if(product){
        res.status(400).json({message: "Product already exists"});
        return;
      }
      //== add product
      const newProduct = {
        id: new ShortUniqueId().randomUUID(6),
        name,
        price,
        description
      }
      products.push(newProduct)
      console.log(products);
      
      Bun.write(fileProduct,JSON.stringify(products, null, 2))
      res.status(200).json({success:true,name, price, description}); 
    } catch (error) {
      res.status(500).json({message: error});
    }
    
  }
  static async getAllProducts(req: Request, res: Response):Promise<void>{
    try {
      const products = await fileProduct.json()
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({message: error});
    }
  }
  static async getProductById(req: Request, res: Response):Promise<void>{
    const {id} = req.params;
    try {
      const products = await fileProduct.json()
      const product = products.find((product: { id: string }) => product.id === id)
      if(!product){
        res.status(404).json({message: "Product not found"});
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({message: error});
    }
  }
  static async deleteProduct(req: Request, res: Response):Promise<void>{
    const {id} = req.params;
    try {
      const products = await fileProduct.json()
      const productList = products
      const product = productList.find((product: { id: string }) => product.id === id)
      if(!product){
        res.status(404).json({message: "Product not found"});
        return;
      }
      const newProductList = productList.filter((product: { id: string }) => product.id !== id)
      console.log(newProductList);
      
      Bun.write(fileProduct,JSON.stringify(newProductList, null, 2))
      res.status(200).json({message: "Product deleted"});
    } catch (error) {
      res.status(500).json({message: error});
    }
  }
}
