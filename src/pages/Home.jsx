
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import "../App.css"; // import CSS file

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Shop by Category</h1>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/products?category=${cat.name}`)}
          >
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}