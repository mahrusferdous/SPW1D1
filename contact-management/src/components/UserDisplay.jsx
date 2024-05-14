import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDisplay() {
    const { setUser } = useContext(UserContext);

    const contact = [
        { name: "Mahrus", email: "mahrusferdous@email.com" },
        { name: "Raymond", email: "raymond@email.com" },
        { name: "Alex", email: "alex@email.com" },
    ];

    const handleUser = (user) => () => {
        setUser(user);
    };

    return (
        <div>
            {contact.map((u, index) => (
                <div key={index}>
                    <p onClick={handleUser(u)}>Name: {u.name}</p>
                </div>
            ))}
        </div>
    );
}

export default UserDisplay;
