'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4'); // Fetch 4 products
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setCartProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading cart products...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      <button className='bg-black w-full h-12 text-white text-[20px] hover:border-[1px] hover:border-black hover:bg-white hover:text-black'>
        Proceed Order
      </button>
    </div>
  );
};

export default Cart;

