import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'sujin',
      email: 'sujin123@gmail.com ',
      password: bcrypt.hashSync('raina123'),
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
      name: 'Kookaburra Kahuna Cricket Bat',
      slug: 'kookaburra-kahuna-cricket-bat',
      category: 'Cricket Bats',
      image: '/images/p2.jpg', // 679px × 829px
      price: 200,
      countInStock: 8,
      brand: 'Kookaburra',
      rating: 4.5,
      numReviews: 10,
      description: 'high performance cricket bat with great balance',
    },
    {
      name: 'Yonex Nanoray 10F Shuttle Bat',
      slug: 'yonex-nanoray-10f-shuttle-bat',
      category: 'Shuttle Bats',
      image: '/images/p1.jpg', // 679px × 829px
      price: 100,
      countInStock: 20,
      brand: 'Yonex',
      rating: 4.6,
      numReviews: 18,
      description: 'lightweight and durable badminton racket',
    },
    {
      name: 'Li-Ning Windstorm 72 Shuttle Bat',
      slug: 'li-ning-windstorm-72-shuttle-bat',
     
      category: 'Shuttle Bats',
      image: '/images/p3.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Li-Ning',
      rating: 4.8,
      numReviews: 22,
      description: 'high tension frame and aerodynamic design',
    },
    {
      name: 'Adidas XT 4.0 Cricket Bat',
      slug: 'adidas-xt-4-cricket-bat',
   
      category: 'Cricket Bats',
      image: '/images/p4.jpg',
      price: 220,
      countInStock: 7,
      brand: 'Adidas',
      rating: 4.4,
      numReviews: 16,
      description: 'excellent power and control for all-round performance',
    },
  ],
};






export default data;
