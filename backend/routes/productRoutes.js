import express from 'express'
import asyncHandler from 'express-async-handler'
import Products from '../models/productModel.js'



const router = express.Router()


//@desc fetch all products
//@route GET api/products
// @access Public route
router.get('/',
    asyncHandler(async (req, res) => {
        const products = Products.find({})
        res.json(products)
    }))

//@desc fetch single product by id
//@route GET api/products/:id
// @access Public route
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)

    if(product) {
        res.json(product)
   } else {
    res.status(404).json({message: 'Product not found, sorry.'})

   }



    

}))