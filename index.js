// Defining app
const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;


// Basic url API
app.get('/',(req,res)=>{
    res.send('Welcome, this is the first API 🚀');
})
// other endpoint
app.get('/newroute',(req,res)=>{
    res.send('Welcome, this is the first API 🚀');
})
// endpoint to get all products
app.get('/products',(req,res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0 ; index <limit;index++){
    products.push({
      name: faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
    res.json(products);
})
// endpoint to get all products
app.get('/products/:productId',(req,res)=>{
  const { productId } = req.params;
  res.json(  {
    productId,
    name:"bike",
    price:300
    })
})
// endpoint to get products of a category
app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const { categoryId, productId } = req.params;
  res.json( {
    categoryId,
    productId,
    name:"bike",
    price:300
    })
})
// endpoint to get users using queries
app.get('/users',(req,res)=>{
  const { limit,offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else{
      res.send('no hay parametros')
    }
});





// Confirm port
app.listen(port,()=>{
    console.log('My port is '+ port);
})

//
