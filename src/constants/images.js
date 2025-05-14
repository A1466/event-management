// Venue Images
export const venueImages = {
  wedding1: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  wedding2: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  wedding3: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
  resort1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  resort2: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
  resort3: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
};

// Supplier Images
export const supplierImages = {
  photographer1: 'https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&w=1200&q=80',
  photographer2: 'https://images.unsplash.com/photo-1538038005959-50b5e772a836?auto=format&fit=crop&w=1200&q=80',
  decorator1: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=80',
  decorator2: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80',
  makeup1: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
  makeup2: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
};

// Event Images
export const eventImages = {
  corporate1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  corporate2: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
  party1: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=1200&q=80',
  party2: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=1200&q=80',
};

// Media Images
export const mediaImages = {
  blog1: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  blog2: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
  blog3: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
  blog4: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=1200&q=80',
};

// Sample Data
export const sampleVenues = [
  {
    name: 'Grand Wedding Palace',
    location: 'South Delhi',
    image: venueImages.wedding1,
    rating: 4.8,
    reviews: 156,
    capacity: '500 guests',
    price: 'Starting from ₹2,50,000',
    category: 'Wedding Venue',
  },
  {
    name: 'Luxury Resort & Spa',
    location: 'Goa',
    image: venueImages.resort1,
    rating: 4.9,
    reviews: 203,
    capacity: '300 guests',
    price: 'Starting from ₹3,50,000',
    category: 'Resort',
  },
  {
    name: 'Beachfront Villa',
    location: 'Mumbai',
    image: venueImages.wedding2,
    rating: 4.7,
    reviews: 98,
    capacity: '200 guests',
    price: 'Starting from ₹1,75,000',
    category: 'Wedding Venue',
  },
];

export const sampleSuppliers = [
  {
    name: 'Capture Moments Photography',
    location: 'Mumbai',
    image: supplierImages.photographer1,
    rating: 4.9,
    reviews: 128,
    price: 'Starting from ₹75,000',
    category: 'Photography',
  },
  {
    name: 'Elegant Decorations',
    location: 'Bangalore',
    image: supplierImages.decorator1,
    rating: 4.8,
    reviews: 95,
    price: 'Starting from ₹50,000',
    category: 'Decorations',
  },
  {
    name: 'Glamour Makeup Studio',
    location: 'Delhi',
    image: supplierImages.makeup1,
    rating: 4.9,
    reviews: 156,
    price: 'Starting from ₹35,000',
    category: 'Makeup',
  },
];

export const sampleMedia = [
  {
    title: 'Top Wedding Trends for 2024',
    description: 'Discover the latest wedding trends that are making waves in the UAE wedding scene. From sustainable weddings to intimate celebrations, we break down what\'s hot and what\'s not.',
    image: mediaImages.blog1,
    category: 'Trends',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
  },
  {
    title: 'How to Plan Your Dream Wedding in Dubai',
    description: 'A comprehensive guide to planning your perfect wedding in Dubai. From venue selection to vendor management, we cover everything you need to know.',
    image: mediaImages.blog2,
    category: 'Planning Guide',
    date: 'March 10, 2024',
    author: 'Michael Chen',
  },
  {
    title: 'Real Wedding: A Fairytale Celebration at Burj Al Arab',
    description: 'Take a peek into this stunning wedding celebration at one of Dubai\'s most iconic venues. See how this couple created their perfect day.',
    image: mediaImages.blog3,
    category: 'Real Weddings',
    date: 'March 5, 2024',
    author: 'Emily Rodriguez',
  },
  {
    title: 'Wedding Budget Planning: A Complete Guide',
    description: 'Learn how to create and stick to your wedding budget. We share expert tips and tricks for managing your wedding expenses without compromising on quality.',
    image: mediaImages.blog4,
    category: 'Planning Guide',
    date: 'March 1, 2024',
    author: 'David Wilson',
  },
]; 