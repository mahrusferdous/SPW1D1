import React, { useState } from "react";
import { useInventory } from "../hooks/useInventory";

function ProductList() {
    const { inventory, addInventory, deleteInventory } = useInventory();
    const [product, setProduct] = useState();
    const [price, setPrice] = useState();

    const handleChange = () => {
        addInventory({
            product: product,
            price: price,
        });
    };

    return (
        <div>
            <input
                type="text"
                name="product"
                placeholder="New Product"
                onChange={(e) => setProduct(e.target.value)}
            />
            <input
                type="text"
                name="price"
                placeholder="New Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleChange}>Button</button>

            {inventory.map((product) => (
                <div key={product.id}>
                    <p>{product.product}</p>
                    <p>{product.price}</p>
                    <button onClick={() => deleteInventory(product.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
