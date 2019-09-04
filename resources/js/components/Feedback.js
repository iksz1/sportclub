import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const Feedback = ({ user }) => {
    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch("/api/comments", {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
                    Authorization: `Bearer ${user.api_token}`,
                },
            });
            const json = await res.json();
            setComments(json.data);
        };
        if (user) {
            getComments();
        }
    }, []);

    const postComment = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]').content,
                Authorization: `Bearer ${user.api_token}`,
            },
            body: data,
        });
        const json = await res.json();
        if (res.ok) {
            setComments(prevState => [...prevState, json]);
        } else {
            setMessage(json.errors ? "" : json.message);
            setErrors(json.errors || {});
        }
    };

    return (
        <Wrapper className="mt-4">
            <h5 className="text-uppercase">Comments</h5>
            <div className="mb-4">
                {comments.map(cmt => (
                    <div key={cmt.id}>
                        <small className="text-primary">{cmt.author}</small>
                        <p>{cmt.content}</p>
                    </div>
                ))}
            </div>
            <h5 className="text-uppercase">Leave your comment</h5>
            <div>
                {user ? (
                    <form onSubmit={postComment}>
                        <div className="form-group">
                            <label htmlFor="commentInput">Comment</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="commentInput"
                                name="content"
                                placeholder="comment"
                            />
                            {errors.content && (
                                <small className="form-text text-danger">{errors.content[0]}</small>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        {message && <small className="form-text text-danger">{message}</small>}
                    </form>
                ) : (
                    "Only logged in users can write comments."
                )}
            </div>
        </Wrapper>
    );
};

export default Feedback;
