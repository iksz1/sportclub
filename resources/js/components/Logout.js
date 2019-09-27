import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import { UserContext } from "./App";

const Logout = () => {
    const [user, setUser] = useContext(UserContext);

    if (!user) {
        return <Redirect to="/" noThrow />;
    }

    setUser(null);
    return null;
};

export default Logout;
