import React from "react";

interface CartProps {
  cartItems: { title: string; price: number }[];
  removeFromCart: (index: number) => void;
}

interface ProductDetailsProps {
  title: string;
  price: number;
  imageUrl: string;
}

const Shop: React.FC<CartProps & ProductDetailsProps> = ({
  cartItems,
  removeFromCart,
  title,
  price,
  imageUrl,
}) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img
          src={imageUrl}
          alt={title}
          className="w-64 h-64" // Adjust the size as needed
        />
        <p>Price: ${price}</p>
      </div>

      {/* Cart Items */}
      {cartItems.length > 0 && (
        <div>
          <h1>Your Cart</h1>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src="//assets2.razerzone.com/images/pnx.assets/b612ba6608b91e74f4a331ab45cbd695/razercon-2023-battlestation.webp" // Replace with your image URL
                      alt={item.title}
                      className="w-64 h-64" // Adjust the size as needed
                    />
                  </div>
                  <div className="cart-item-details">
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;
