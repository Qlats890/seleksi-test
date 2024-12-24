import type { Request, Response, NextFunction } from "express";
import { productSchema } from "../../../dto/product.dto";

class ProductValidation{
  static async createProduct(req: Request, res: Response, next: NextFunction):Promise<void>{
    const {name, price,description} = req.body;
    try {
      const value = await productSchema.validateAsync({name, price, description});
      if(value.error){
        res.status(400).json(value.error);
      }else{
        next();
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export {
  ProductValidation
}