import React, { useState, useContext } from "react";
import { Redirect } from "@reach/router";
import styled from "styled-components";
import { UserContext } from "./App";

const Wrapper = styled.div`
    min-width: 300px;
    max-width: 400px;
    margin: 10vh auto 0;
`;

const Register = () => {
    const [user, setUser] = useContext(UserContext);
    const [message, setMessage] = useState();
    const [errors, setErrors] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
            },
            body: data,
        });
        const json = await res.json();
        if (res.ok) {
            setUser(json);
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
            <h1 className="mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstNameInput">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        name="first_name"
                        placeholder="First Name"
                    />
                    {errors.first_name && (
                        <small className="form-text text-danger">{errors.first_name[0]}</small>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        name="last_name"
                        placeholder="Last Name"
                    />
                    {errors.last_name && (
                        <small className="form-text text-danger">{errors.last_name[0]}</small>
                    )}
                </div>
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
                    <label htmlFor="phoneInput">Phone (optional)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneInput"
                        name="phone"
                        placeholder="Phone"
                    />
                    {errors.phone && (
                        <small className="form-text text-danger">{errors.phone[0]}</small>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="addressInput">Address (optional)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="addressInput"
                        name="address"
                        placeholder="Address"
                    />
                    {errors.address && (
                        <small className="form-text text-danger">{errors.address[0]}</small>
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

export default Register;
