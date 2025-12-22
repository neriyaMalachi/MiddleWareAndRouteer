import express from 'express'


const productsRouter = express()

productsRouter.get('/',(req,res)=>{
    res.json({message:"hello from products route"})
})


export default productsRouter