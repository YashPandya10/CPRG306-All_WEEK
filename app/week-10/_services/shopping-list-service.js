import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export async function getItems(userId) {
    const itemsRef = collection(db, "users", userId, "items");
    
    const querySnapshot = await getDocs(itemsRef);
    const items = [];
    
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });
    
    return items;
}

export async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");
    
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
}

// Optional
export async function deleteItem(userId, itemId) {
    const itemRef = doc(db, "users", userId, "items", itemId);
    
    await deleteDoc(itemRef);
}