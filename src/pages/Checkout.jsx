// import React, { useReducer, useRef, useEffect } from "react";

// const initialState = {
//   name: "",
//   address: "",
//   payment: "",
// };

// function reducer(state, action) {
//   return { ...state, [action.name]: action.value };
// }

// const Checkout = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const nameRef = useRef();

//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   const handleChange = (e) => {
//     dispatch({ name: e.target.name, value: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Order placed successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
//       <input
//         ref={nameRef}
//         name="name"
//         placeholder="Name"
//         value={state.name}
//         onChange={handleChange}
//         className="border p-2 w-full rounded"
//       />
//       <input
//         name="address"
//         placeholder="Address"
//         value={state.address}
//         onChange={handleChange}
//         className="border p-2 w-full rounded"
//       />
//       <input
//         name="payment"
//         placeholder="Payment Method"
//         value={state.payment}
//         onChange={handleChange}
//         className="border p-2 w-full rounded"
//       />
//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
//         Submit Order
//       </button>
//     </form>
//   );
// };

// export default Checkout;



import React, { useReducer, useRef, useEffect } from "react";
import "./Chekout.css";

const initialState = {
  name: "",
  address: "",
  payment: "",
};

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const Checkout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!🎉🎉🎉");
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2 className="checkout-title">Checkout</h2>
      <input
        ref={nameRef}
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
        className="checkout-input"
      />
      <input
        name="address"
        placeholder="Address"
        value={state.address}
        onChange={handleChange}
        className="checkout-input"
      />
      <input
        name="payment"
        placeholder="Payment Method"
        value={state.payment}
        onChange={handleChange}
        className="checkout-input"
      />
      <button type="submit" className="checkout-button">
        Submit Order
      </button>
    </form>
  );
};

export default Checkout;
