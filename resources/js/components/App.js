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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 1em;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HEADERS = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
};

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
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
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
