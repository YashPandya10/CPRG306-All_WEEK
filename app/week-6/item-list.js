"use client"
import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];
  if (sortBy === "name") 
  {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category")
  {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  let nameButtonClass = "px-3 py-1 rounded  text-center";
  let categoryButtonClass = "px-3 py-1 rounded  text-center";

 if (sortBy === "name") {
  nameButtonClass = "px-3 py-1 rounded bg-blue-500 text-white";
  categoryButtonClass = "px-3 py-1 rounded bg-gray-400";
} else {
  nameButtonClass = "px-3 py-1 rounded bg-gray-400";
  categoryButtonClass = "px-3 py-1 rounded bg-blue-500 text-white";
}
  return (
    <div>
      <div className="space-x-4 mt-3 text-center">
        <button onClick={() => setSortBy("name")} className={`text-center ${nameButtonClass}`} >
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} className= {`text-center ${categoryButtonClass}`}>
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3 mt-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name.trim()}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
