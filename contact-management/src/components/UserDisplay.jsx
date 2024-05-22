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
        setUser({ name: user.name, email: user.email });
    };

    return (
        <div>
            {contact.map((u, index) => (
                <div key={index}>
                    <p>Name: {u.name}</p>
                    <button onClick={handleUser(u)}>Button</button>
                </div>
            ))}
        </div>
    );
}

export default UserDisplay;
