import { createContext, useState } from "react";
import "./App.css";
import UserDisplay from "./components/UserDisplay";
import UserDetails from "./components/UserDetails";
import ProductList from "./components/ProductList";
import UserContext from "./context/UserContext";

function App() {
    const [user, setUser] = useState({ name: "", email: "" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <UserDisplay />
            <UserDetails />
            <ProductList />
        </UserContext.Provider>
    );
}

export default App;
