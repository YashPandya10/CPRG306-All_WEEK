"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
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
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 border border-gray-300 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Item</h2>
            
            <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Item Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter item name" 
                    className="w-full p-2 border border-gray-300 rounded text-gray-800" 
                    required 
                />
            </div>
            
            <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Quantity: <span className="text-blue-600 font-bold">{quantity}</span></label>
                <div className="flex gap-2">
                    <button type="button" onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded font-bold">-</button>
                    <button type="button" onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded font-bold">+</button>
                </div>
            </div>
            
            <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-gray-800">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700">
                Add Item
            </button>
        </form>
    );
}