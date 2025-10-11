"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) 
    {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1)
    {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-300 rounded-lg max-w-md mx-auto mt-8">
      <div className="text-3xl font-bold mb-4 text-red-500">{quantity}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-6 py-3 bg-green-400 text-red-800 rounded text-xl disabled:bg-gray-100"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-6 py-3 bg-green-400 text-red-800 rounded text-xl disabled:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}
 