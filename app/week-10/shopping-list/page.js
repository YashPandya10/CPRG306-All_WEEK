"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    // Load items from Firestore
    const loadItems = async () => {
        if (user) {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        }
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const itemId = await addItem(user.uid, {
                name: newItem.name,
                quantity: newItem.quantity,
                category: newItem.category.toLowerCase()
            });
            
            if (itemId) {
                setItems(prevItems => [...prevItems, { ...newItem, id: itemId }]);
            }
        }
    };

    const handleItemSelect = (itemName) => {
        let cleanedName = itemName.split(',')[0];
        cleanedName = cleanedName.replace(/[\u{1F600}-\u{1F6FF}]/gu, '');
        cleanedName = cleanedName.trim();
        setSelectedItemName(cleanedName);
    };

    // Move the authentication check to the end, after all hooks are defined
    if (!user) {
        return (
            <div>
                <h2>Access Denied</h2>
                <p>You must be signed in to view this page.</p>
                <a href="/week-10">Go to Login Page</a>
            </div>
        );
    }

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