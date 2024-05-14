import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDetails() {
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetails;
