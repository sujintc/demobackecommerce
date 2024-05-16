// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';

// const seedRouter = express.Router();

// seedRouter.get('/', async (req, res) => {
//   await Product.remove({});
//   const createdProducts = await Product.insertMany(data.products);
//   res.send({ createdProducts });
// });
// export default seedRouter;


import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // Remove existing products (if any)
  try {
    await Product.deleteMany({});
    // Add new products
    const createdProducts = await Product.insertMany(data.products);
    // res.send({ createdProducts });

    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
  } catch (error) {
    res.status(500).send({ message: 'Error seeding products', error });
  }
});

export default seedRouter;
