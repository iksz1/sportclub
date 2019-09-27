import React, { useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { UserContext } from "./App";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
`;

const StyledNav = styled.nav`
    a:not(:last-child) {
        margin-right: 1em;
    }
`;

const isActive = ({ isCurrent }) => {
    return isCurrent ? { style: { textDecoration: "underline" } } : {};
};

const Nav = () => {
    const [user] = useContext(UserContext);

    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default Nav;
