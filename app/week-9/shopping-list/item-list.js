"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items];
    if (sortBy === "name") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Button classes with if/else
    let nameButtonClass, categoryButtonClass;
    if (sortBy === "name") {
        nameButtonClass = "px-4 py-2 bg-blue-600 text-white rounded font-medium";
        categoryButtonClass = "px-4 py-2 bg-gray-300 text-gray-800 rounded font-medium";
    } else {
        nameButtonClass = "px-4 py-2 bg-gray-300 text-gray-800 rounded font-medium";
        categoryButtonClass = "px-4 py-2 bg-blue-600 text-white rounded font-medium";
    }

    return (
        <div className="bg-white p-6 border border-gray-300 rounded-lg">
            <div className="mb-4">
                <span className="mr-2 text-gray-700 font-medium">Sort by:</span>
                <button
                    className={`mr-2 ${nameButtonClass}`}
                    onClick={() => setSortBy("name")}
                >
                    Name
                </button>
                <button
                    className={categoryButtonClass}
                    onClick={() => setSortBy("category")}
                >
                    Category
                </button>
            </div>

            <ul className="space-y-3">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
}