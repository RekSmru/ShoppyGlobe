import { useSelector, useDispatch } from "react-redux"; // import useDispatch
import { setSearchQuery } from "../redux/searchSlice";
import { useLocation } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch(); // <-- define dispatch
  const searchQuery = useSelector((state) => state.search.query);
  const location = useLocation();
  const navigate = useNavigate();

  // Get category from query string (optional)
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

  if (loading) return <h2>Loading Products...</h2>;
  if (error) return <h2>{error}</h2>;

  // Filter by search query
  let filteredProducts = [];

   if (products && Array.isArray(products)) {
    filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  }

  // Group by category
  const categoryMap = {};
  filteredProducts.forEach((p) => {
    if (!categoryMap[p.category]) {
      categoryMap[p.category] = [];
    }
    categoryMap[p.category].push(p);
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <h1>Products</h1>

      {/* ✅ SEARCH BOX (WORKING) */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "80%",
          maxWidth: "400px",
          borderRadius: "10px",
          border: "1px solid #ccc",
         
        }}
      />

      {/* Product display */}
      {Object.keys(categoryMap).length > 0 ? (
        Object.keys(categoryMap).map((category) => (
          <div key={category} style={{ marginBottom: "30px" }}>
            <h2>{category}</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {categoryMap[category].map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;