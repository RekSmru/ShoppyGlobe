import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../index.css"

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  alert("✅ Added to cart!");
};

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" loading="lazy" />

      <div
  className="icon add-cart"
  onClick={() => handleAddToCart(product)}
  title="Add to Cart"
>
  🛒
</div>

      <div className="icon details" onClick={() => navigate(`/product/${product.id}`)} title="View Details">
        🔗
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p style={{color: "green"}}>{product.discountPercentage}% OFF</p>
      </div>
    </div>
  );
}

export default ProductItem;