import React, { Component } from "react";
import Useritem from "./Useritem";
import PropTypes from "prop-types";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
