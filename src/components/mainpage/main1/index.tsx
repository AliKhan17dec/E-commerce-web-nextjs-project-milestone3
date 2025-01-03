'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Main1: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching API:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Link href={`${product.id}`} key={product.id}>
          <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition cursor-pointer">
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] h-60 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {product.description}
            </p>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main1;
