import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Adidas Men\'s T-Shirt',
      slug: 'adidas-mens-t-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 20,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 18,
      description: 'Comfortable and stylish t-shirt from Adidas.'
    },
    {
      name: 'Levi\'s Classic Jeans',
      slug: 'levis-classic-jeans',
      category: 'Jeans',
      image: '/images/p5.jpg',
      price: 30,
      countInStock: 10,
      brand: 'Levi\'s',
      rating: 4.8,
      numReviews: 22,
      description: 'Classic Levi\'s jeans made with premium denim.'
    },
    {
      name: 'Under Armour Sports Jacket',
      slug: 'under-armour-sports-jacket',
      category: 'Jackets',
      image: '/images/p6.jpg',
      price: 40,
      countInStock: 12,
      brand: 'Under Armour',
      rating: 4.6,
      numReviews: 16,
      description: 'High-performance sports jacket for all your activities.'
    },
    {
      name: 'Puma Running Shoes',
      slug: 'puma-running-shoes',
      category: 'Shoes',
      image: '/images/p7.jpg',
      price: 50,
      countInStock: 25,
      brand: 'Puma',
      rating: 4.4,
      numReviews: 20,
      description: 'Lightweight and durable running shoes from Puma.'
    }
    
  ],
};






export default data;
