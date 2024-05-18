
// // import express from 'express';
// // import data from './data.js';

// // const app = express();

// // app.get('/api/products', (req, res) => {
// //   res.send(data.products);
// // });

// // const port = process.env.PORT || 5005;
// // app.listen(port, () => {
// //   console.log(`server at http://localhost:${port}`);
// // });

// // import express from 'express';
// // import data from './data.js';

// // const app = express();

// // app.get('/api/products', (req, res) => {
// //   res.json(data.products); // Return data as JSON
// // });

// // const port = process.env.PORT || 5005;
// // app.listen(port, () => {
// //   console.log(`Server is running at http://localhost:${port}`);
// // });



// // import express from 'express';
// // import data from './data.js';

// // const app = express();

// // // Middleware to enable CORS
// // app.use((req, res, next) => {
// //   res.setHeader('Access-Control-Allow-Origin', '*');
// //   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //   next();
// // });

// // app.get('/api/products', (req, res) => {
// //   res.send(data.products);
// // });

// // const port = process.env.PORT || 5005;
// // app.listen(port, () => {
// //   console.log(`server at http://localhost:${port}`);
// // });


// import express from 'express';
// import data from './data.js';
// import cors from "cors"

// const app = express();
// app.use(cors())
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });
// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// const port = process.env.PORT || 5006;
// app.listen(port, () => {
//   console.log(`server at http://localhost:${port}`);
// });


// import express from 'express';
// import data from './data.js';

// const app = express();
// // test
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// const port = process.env.PORT || 5001;
// app.listen(port, () => {
//   console.log(`serve at http://localhost:${port}`);
// });


import express from 'express';
import data from './data.js';


const app = express();


import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import cors from "cors"

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

// Middleware to set CORS headers


// app.use(cors((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// }))
app.use(cors());

// const allowedOrigins = [
//   'http://localhost:5174', // Local development
//   'https://demofrontecommerce-2h7t.vercel.app' // Deployed frontend
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified origin.';

//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

app.use('/api/users', userRouter);

app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});




app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});


const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
