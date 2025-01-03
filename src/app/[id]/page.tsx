'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const id = params?.id as string | undefined;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data: Product = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-5xl md:ml-10 p-4">
      <div className="flex flex-col md:flex-row items-start mt-8 space-y-6 md:space-y-0 md:space-x-6 gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pt-24">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-green-700">${product.price}</p>
          <button className='bg-black text-white p-2 mt-10 hover:border-[1px] hover:border-black hover:bg-white hover:text-black'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
