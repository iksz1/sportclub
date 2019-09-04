import React, { useState } from "react";
import { Redirect } from "@reach/router";
import styled from "styled-components";

const Wrapper = styled.div`
    min-width: 300px;
    max-width: 400px;
    margin-top: 10vh;
`;

const Login = ({ user, onSuccess }) => {
    const [message, setMessage] = useState();
    const [errors, setErrors] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
            },
            body: data,
        });
        const json = await res.json();
        if (res.ok) {
            onSuccess(json);
        } else {
            setMessage(json.errors ? "" : json.message);
            setErrors(json.errors || {});
        }
    };

    if (user) {
        return <Redirect to="/" noThrow />;
    }

    return (
        <Wrapper>
            <h1 className="mb-4">Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="emailInput"
                        name="email"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <small className="form-text text-danger">{errors.email[0]}</small>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        name="password"
                        placeholder="Password"
                    />
                    {errors.password && (
                        <small className="form-text text-danger">{errors.password[0]}</small>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                {message && <small className="form-text text-danger">{message}</small>}
            </form>
        </Wrapper>
    );
};

export default Login;
