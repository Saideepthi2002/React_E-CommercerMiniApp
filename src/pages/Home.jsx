// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useCart } from "../hooks/useCart";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { add } = useCart();


//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data))
//       .catch(() => alert("Error fetching Products"))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//   <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//     {loading ? (
//       <p className="text-center col-span-full">Loading.....</p>
//     ) : (
//       products.map((product) => (
//         <div key={product.id} className="border rounded shadow p-2 flex items-center gap-4">
//           <Link to={`/product/${product.id}`} className="flex-shrink-0">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-20 w-20 object-contain"
//             />
//           </Link>
//           <div className="flex flex-col flex-grow">
//             <Link to={`/product/${product.id}`}>
//               <p className="font-semibold text-sm truncate">{product.title}</p>
//             </Link>
//             <p className="text-green-600 font-bold">${product.price}</p>
//             <button
//               onClick={() => add(product)}
//               className="bg-blue-500 text-white px-3 py-1 mt-2 rounded self-start"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))
//     )}
//   </div>
// );


  
// };

// export default Home;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useCart } from "../hooks/useCart";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { add } = useCart();

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data))
//       .catch(() => alert("Error fetching Products"))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="products-grid">
//       {loading ? (
//         <p className="loading-text">Loading.....</p>
//       ) : (
//         products.map((product) => (
//          <div key={product.id} className="product-card">
//   <img
//     src={product.image}
//     alt={product.title}
//     className="product-image"
//   />
//   <Link to={`/product/${product.id}`} className="product-title">
//     {product.title}
//   </Link>
//   <p className="product-price">${product.price}</p>
//   <button
//     onClick={() => add(product)}
//     className="add-to-cart-btn"
//   >
//     Add to Cart
//   </button>
// </div>

//         ))
//       )}
//     </div>
//   );
// };

// export default Home;



// // return (
// //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
// //       {loading ? (
// //         <p className="text-center col-span-full">Loading.....</p>
// //       ) : (
// //         products.map((product) => (
// //           <div key={product.id} className="border p-2 rounded shadow flex items-center gap-4">
// //   <Link to={`/product/${product.id}`} className="flex-shrink-0">
// //     <img
// //       src={product.image}
// //       alt={product.title}
// //       className="h-20 w-20 object-contain"
// //     />
// //   </Link>
// //   <div className="flex flex-col flex-grow">
// //     <Link to={`/product/${product.id}`}>
// //       <p className="font-semibold text-sm truncate">{product.title}</p>
// //     </Link>
// //     <p className="text-green-600 font-bold">${product.price}</p>
// //     <button
// //       onClick={() => add(product)}
// //       className="bg-blue-500 text-white px-3 py-1 mt-2 rounded self-start"
// //     >
// //       Add to Cart
// //     </button>
// //   </div>
// // </div>

// //         ))
// //       )}
// //     </div>
// //   );



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() => alert("Error fetching Products"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-grid">
      {loading ? (
        <p className="loading-text">Loading.....</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="home-product">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="home-product-image"
              />
              <p className="home-product-title">{product.title}</p>
            </Link>
            <p className="home-product-price">${product.price}</p>
            <button
              onClick={() => add(product)}
              className="home-add-btn"
            >
             👜 Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
