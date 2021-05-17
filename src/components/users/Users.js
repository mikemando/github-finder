import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ loading, users }) => {
    if (loading) {
        <Spinner />;
    }

    return (
        <div style={userStyle}>
            {users.map((user) => {
                return <UserItem key={user.id} user={user} />;
            })}
        </div>
    );
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
};

export default Users;
