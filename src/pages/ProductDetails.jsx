import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { add } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => alert("Error loading product"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="product-detail-container">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <h2 className="product-detail-title">{product.title}</h2>
      <p className="product-detail-description">{product.description}</p>
      <p className="product-detail-price">${product.price}</p>
      <button
        onClick={() => add(product)}
        className="product-detail-button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
