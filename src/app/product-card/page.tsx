import React from 'react';
import Image from 'next/image';

// Define the Product type
type Product = {
  name: string;
  price: number;
  image: string;
};

// Define the props for ProductCard
type ProductCardProps = {
  products: Product[];
};

// ProductCard Component
const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <>
      {/* Title Section */}
      <div className="font-bold text-center text-xl md:text-3xl p-4">
        Luxury Perfumes
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="card border-black bg-pink-100 w-72 rounded-2xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
              priority={index === 0} // Eagerly load the first image
            />

            {/* Product Name */}
            <p className="font-bold text-lg mt-2">{product.name}</p>

            {/* Product Price */}
            <p className="font-bold text-lg text-gray-800">${product.price}</p>

            {/* Add to Cart Button */}
            <button
              className="bg-pink-300 m-3 font-bold hover:text-gray-600 rounded py-1 px-5"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

// Example Usage of the ProductCard Component
const App: React.FC = () => {
  // Product Data Array
  const products: Product[] = [
    { name: 'Chanel No. 5', price: 80, image: '/images/product1.png' },
    { name: 'Gucci Bloom', price: 97, image: '/images/product2.png' },
    { name: 'Dior Sauvage', price: 750, image: '/images/product3.png' },
  ];

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default App;
