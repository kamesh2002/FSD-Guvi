import React, { useState } from "react";
import products from "../data/data.json";

const CartPage = () => {
  // Initialize cart state with quantities set to 1 by default
  const [cartItems, setCartItems] = useState(
    products.products.map((product) => ({ ...product, quantity: 1 }))
  );

  // Calculate Total Quantity and Total Amount
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Update quantity for a specific item
  const updateQuantity = (id, increment) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + increment) }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shopping Cart</h1>
      <div style={styles.cart}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.price}>Price: ${item.price.toFixed(2)}</p>
              <div style={styles.quantity}>
                <button
                  style={styles.button}
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span style={styles.quantityText}>{item.quantity}</span>
                <button
                  style={styles.button}
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p style={styles.itemTotal}>
                Item Total: ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.summary}>
        <h2>Cart Summary</h2>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  cart: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    padding: "10px",
    width: "350px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "10px",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  price: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f4f4f4",
  },
  quantityText: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  itemTotal: {
    fontSize: "14px",
    color: "#008080",
  },
  summary: {
    marginTop: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default CartPage;
