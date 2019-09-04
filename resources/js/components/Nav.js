import React from "react";
import { Link, LinkGetProps } from "@reach/router";
import styled from "styled-components";

const StyledNav = styled.nav`
    a:not(:last-child) {
        margin-right: 1em;
    }
`;

const isActive = ({ isCurrent }) => {
    return isCurrent ? { style: { textDecoration: "underline" } } : {};
};

const Nav = ({ user }) => {
    return (
        <>
            <StyledNav>
                <Link to={"/"} getProps={isActive}>
                    Main
                </Link>
                <Link to={"/feedback"} getProps={isActive}>
                    Feedback
                </Link>
            </StyledNav>
            {user ? (
                <StyledNav>
                    <Link to={"/logout"} getProps={isActive}>
                        Logout
                    </Link>
                </StyledNav>
            ) : (
                <StyledNav>
                    <Link to={"/login"} getProps={isActive}>
                        Login
                    </Link>
                    <Link to={"/register"} getProps={isActive}>
                        Register
                    </Link>
                </StyledNav>
            )}
        </>
    );
};

export default Nav;
