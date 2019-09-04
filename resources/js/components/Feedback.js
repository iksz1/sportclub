import React, { useState } from "react";

const Feedback = ({ user }) => {
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const res = await fetch("/api/comments", {
            headers: { ...HEADERS, Authorization: `Bearer ${user.api_token}` },
        });
        console.log(await res.text());
    };

    const postComment = async data => {
        const res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Bearer ${user.api_token}`,
            },
            body: data,
        });
        console.log(await res.text());
    };

    // max 500 chars
    // show test instead of form if not logged in

    return <div>feedback page</div>;
};

export default Feedback;
