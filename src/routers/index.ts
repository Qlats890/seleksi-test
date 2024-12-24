import express from "express";

const routers = express.Router()
import {router as product} from "./products/index"

routers.use("/products",product)

export{
  routers
}