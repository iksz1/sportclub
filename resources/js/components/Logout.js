import React from "react";
import { Redirect } from "@reach/router";

const Logout = ({ user, onSuccess }) => {
    if (!user) {
        return <Redirect to="/" noThrow />;
    }

    onSuccess(null);
    return null;
};

export default Logout;
