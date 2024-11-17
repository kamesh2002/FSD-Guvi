// src/PricingCards.js

import React from 'react';

// Sample data for the pricing cards
const plans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Single User',
      '50GB Storage',
      'Some Points'
    ]
  },
  {
    name: 'Plus',
    price: '$9',
    features: [
      'Multi User',
      '100GB Storage',
      'More Points'
    ]
  },
  {
    name: 'Pro',
    price: '$49',
    features: [
      'Unlimited Users',
      '500GB Storage',
      'Priority Support'
    ]
  }
];

const PricingCard = ({ plan }) => (
  <div style={styles.card}>
    <h2>{plan.name}</h2>
    <p style={styles.price}>{plan.price} per month</p>
    <ul>
      {plan.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button style={styles.button}>Choose {plan.name}</button>
  </div>
);

const PricingCards = () => (
  <div style={styles.container}>
    {plans.map((plan, index) => (
      <PricingCard key={index} plan={plan} />
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    margin: '10px'
  },
  price: {
    fontSize: '24px',
    color: '#333'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default PricingCards;
