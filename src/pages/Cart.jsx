// // import React from "react";
// // import { useCart } from "../hooks/useCart";

// // const Cart = () => {
// //   const { cart } = useCart();

// //   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
// //       {cart.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <div className="space-y-4">
// //           {cart.map((item) => (
// //             <div key={item.id} className="border p-4 rounded shadow">
// //               <p>{item.title}</p>
// //               <p>Quantity: {item.quantity}</p>
// //               <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
// //             </div>
// //           ))}
// //           <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;


// import React from "react";
// import { useCart } from "../hooks/useCart";

// const Cart = () => {
//   const { cart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.title} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <p className="cart-item-title">{item.title}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>
//                     Price: ${item.price.toFixed(2)} × {item.quantity} ={" "}
//                     <strong>${(item.price * item.quantity).toFixed(2)}</strong>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p className="cart-total">Total: ${total.toFixed(2)}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart } = useCart();
   const { user } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒🛍️🎉</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button
           className="chkbtn"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
