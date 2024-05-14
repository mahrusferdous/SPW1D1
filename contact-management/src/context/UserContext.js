import React, { createContext } from "react";

// Global context for user
const UserContext = createContext({
    user: { name: "", email: "" },
    setUser: () => {},
});

export default UserContext;
