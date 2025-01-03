// 'use client';

// import { useEffect, useState } from 'react';

// const TestAPI = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching API:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10">Loading products...</p>;
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-40 object-cover mb-4 rounded"
//           />
//           <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//           <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//             {product.description}
//           </p>
//           <p className="text-green-600 font-bold">${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestAPI;
import Header from '@/components/header'
import Main1 from '@/components/mainpage/main1'
import React from 'react'

const page = () => {
  return (
    <div>
      <Main1 />
    </div>
  )
}

export default page
