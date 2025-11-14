"use client";
import { useState } from "react";

export default function NewItem({ onAddItem })
{
  const [quantity, setQuantity] = useState(1);
  const [name,setName] = useState("");
  const[category,setCategory] = useState("Produce");
  

  const increment = () => {
    if (quantity < 20) 
    {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      category,
      quantity
    };
    onAddItem(item);
    setName("");
    setCategory("Produce");
    setQuantity(1);
  }

  return(
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white border border-gray-300 rounded-lg">
      <div className="mb-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" className="w-full p-2 border text-green-400 border-gray-300 rounded" required />
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-300 rounded-lg max-w-md mx-auto mt-8">
        <div className="text-3xl font-bold mb-4 text-red-500">{quantity}</div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-6 py-3 bg-green-400 text-red-800 rounded text-xl disabled:bg-gray-100"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-5 py-3 bg-green-400 text-red-800 rounded text-xl disabled:bg-gray-100"
          >
            +
          </button>
        </div>
        <div className="mb-4 mt-4 text-green-400 font w-full">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border border-green-400 rounded">
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Pantry">Pantry</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household Items">Household Items</option>
              <option value="Other">Other</option>
          </select>
        </div>
        <div className="w-full">
          <button type="submit" className="w-full bg-blue-500 text-green-400 py-2 px-4 rounded">
            Add Item
          </button>
        </div>
      </div>
      </form>
    );
}
