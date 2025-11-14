"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page()
{
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

  if (!user)
{
    return (
      <div>
        <h2>Access Denied</h2>
        <p>You must be signed in to view this page.</p>
        <a href="/week-9">Go to Login Page</a>
      </div>
    );
  }

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        // Proper cleaning as per document requirements
        let cleanedName = itemName.split(',')[0];
        cleanedName = cleanedName.replace(/[\u{1F600}-\u{1F6FF}]/gu, '');
        cleanedName = cleanedName.trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="p-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Shopping List</h1>
            
            <div className="flex gap-8">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}