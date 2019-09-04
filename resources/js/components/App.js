import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import MainPage from "./MainPage";
import Feedback from "./Feedback";
import Logout from "./Logout";

const Header = styled.header`
    height: 70px;
    padding: 0 1em;
`;

const Main = styled.main`
    min-height: calc(100vh - 100px);
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <>
            <Header className="bg-light">
                <Nav user={user} />
            </Header>
            <Main>
                <Router>
                    <MainPage path="/" />
                    <Feedback path="/feedback" user={user} />
                    <Login path="/login" user={user} onSuccess={setUser} />
                    <Register path="/register" user={user} onSuccess={setUser} />
                    <Logout path="/logout" user={user} onSuccess={setUser} />
                </Router>
            </Main>
            <Footer className="bg-light">
                <small className="text-muted">Copyright &copy; 2019 Viačeslav Batik</small>
            </Footer>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
