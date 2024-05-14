import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserDisplay from "./components/UserDisplay";
import UserDetails from "./components/UserDetails";
import ProductList from "./components/ProductList";

function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <UserDisplay />
            <UserDetails />
            <ProductList />
        </UserContext.Provider>
    );
}

export default App;
