import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux"; // <-- import useDispatch
import "../App.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const dispatch = useDispatch(); 
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setCurrentIndex(0); // start from first image
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    alert("✅ Product added to cart!");
  };

 // Next / Prev image
  const nextImage = () => {
    if (!product.images || product.images.length === 0) return;
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!product.images || product.images.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="details-container">

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      {/* Top Section */}
      <div className="details-top">

        {/* LEFT: Single Image with Arrows */}
        <div className="details-left">
          <div className="image-slider">
            <button className="arrow left" onClick={prevImage}>⬅️</button>

            <img
              className="main-image"
              src={product.images?.[currentIndex] || product.thumbnail}
              alt={product.title}
            />

            <button className="arrow right" onClick={nextImage}>➡️</button>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="details-right">
          <h2>{product.title}</h2>

          <p><strong>Price:</strong> ${product.price}</p>
          <p style={{color: '#237227'}}><strong>Discount:</strong> {product.discountPercentage}% OFF</p>
          <p><strong>Brand:</strong> {product.brand}</p>

          <p>
            <strong>Dimensions:</strong>{" "}
            {product.dimensions
              ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`
              : "Measurements not available"}
          </p>

          <p><strong>Description:</strong> {product.description}</p>

          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
            🛒 Add to Cart
          </button>
        </div>

      </div>


     {/* Product Details Section */}
<div className="product-details">
  <div className="details-left">
    <h3>Delivery Information</h3>
    <p><strong>Availability:</strong> {product.stock}</p>
    <p><strong>Weight:</strong> {product.weight || "N/A"} LB</p>
    <p><strong>Shipping:</strong> {product.shippingInformation || "Free Shipping"}</p>
    <p><strong>Warranty:</strong> {product.warranty || "N/A"}</p>
  </div>

  <div className="details-right">
    <h3>Reviews</h3>
    {product.reviews && product.reviews.length > 0 ? (
      product.reviews.map((review, index) => (
        <div key={index} className="review-item">
          <p><strong>{review.user}</strong></p>
          <p><strong>Rating: {review.rating}/5</strong></p>
          <p style={{color: '#48A111'}}>{review.comment}</p>
        </div>
      ))
    ) : (
      <p>No reviews yet.</p>
    )}
  </div>
</div>
</div>
  );
};

export default ProductDetail;