import React from "react";
import products from "../data/data.json";

const ProductList = () => {
  return (
    <div style={styles.container}>
      {products.products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.category}>
            <strong>Category:</strong> {product.category}
          </p>
          <p style={styles.price}>
            <strong>Price:</strong> ${product.price}
          </p>
          <p style={styles.rating}>
            <strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f4f4f9",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
    lineHeight: "1.5",
  },
  category: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "8px",
  },
  price: {
    fontSize: "16px",
    color: "#008080",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  rating: {
    fontSize: "14px",
    color: "#333",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

// Adding hover effect using a custom onHover function for simplicity
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".card")) {
    Object.assign(e.target.closest(".card").style, styles.cardHover);
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".card")) {
    Object.assign(e.target.closest(".card").style, styles.card);
  }
});

export default ProductList;
