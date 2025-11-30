"use client";

import { useState, useEffect } from 'react';

// Function outside component as per document
const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="bg-white p-6 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Meal Ideas</h2>
            {!ingredient ? (
                <p className="text-gray-600">Select an item to see meal ideas</p>
            ) : meals.length === 0 ? (
                <p className="text-gray-600">No meal ideas found for <span className="text-blue-600 font-medium">{ingredient}</span></p>
            ) : (
                <div>
                    <p className="mb-4 text-gray-700">Meal ideas with <span className="font-semibold text-green-600">{ingredient}</span>:</p>
                    <ul className="space-y-2 max-h-96 overflow-y-auto">
                        {meals.map(meal => (
                            <li key={meal.idMeal} className="p-3 border border-gray-200 rounded bg-blue-50">
                                <span className="text-gray-800 font-medium">{meal.strMeal}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}