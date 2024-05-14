import { useState, useEffect } from "react";

export const useInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        setInventory([
            { id: 1, product: "apple", price: 1.99 },
            { id: 2, product: "banana", price: 0.99 },
            { id: 3, product: "orange", price: 1.49 },
        ]);
    }, []);

    const addInventory = (product) => {
        const newInventory = [...inventory, product];
        setInventory(newInventory);
    };

    const deleteInventory = (id) => {
        const newInventory = inventory.filter((product) => product.id !== id);
        setInventory(newInventory);
    };

    return { inventory, addInventory, deleteInventory };
};
