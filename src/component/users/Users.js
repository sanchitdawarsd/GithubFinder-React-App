import React, { Component } from "react";
import Useritem from "./Useritem";
import PropTypes from "prop-types";
import Spinner from "../layout/spinner";

const Users = (loading, users) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

Users.propTypes= {
  users = propTypes.array.isRequired,
  loading = propTypes.bool.isRequired
}
export default Users;
