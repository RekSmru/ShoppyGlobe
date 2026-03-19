import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import "../App.css";

/* ================= ROTATING TEXT COMPONENT ================= */
function RotatingText() {
  const words = [
    "beauty!",
    "clothes!",
    "groceries!",
    "furniture!",
    "fragrances!",
    "Smartphones!",
    "Just Choose!"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="rotating-word" >
      <p className="rotatingText-description">
        Buy anything from wide range of...
      </p>
      <h2 style={{fontSize: "2rem", fontWeight: 900 ,
          color: "transparent", WebkitTextStroke: "2px #44A194",
          textShadow:"#A0D585",letterSpacing: "2px"
            }} className="rotating-word-flashing">{words[index]}</h2>
    </section>
  );
}

/* ================= HOME COMPONENT ================= */
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Rotating Text */}
      <RotatingText />

      {/* Categories */}
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/products?category=${cat.name}`)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="category-image"
            />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}