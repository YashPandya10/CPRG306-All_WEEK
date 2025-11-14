"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() 
{
  const [items, setItems] = useState(itemsData);
  function handleAddItem(newItem)
  {
  setItems([...items, newItem]);
  console.log("Item added:", newItem);
  }
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
