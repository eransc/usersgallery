import React, { useState, useContext } from "react";
import UsersContext from "../../contexts/userContext";

import { Card } from "@mui/material";

import UserCard from "../UserCard/UserCard";

const UserBox = ({ user }) => {
  const [shadow, setShadow] = useState(1);
  const { users, setUsers } = useContext(UsersContext);

  const onMouseOver = () => setShadow(3);
  const onMouseOut = () => setShadow(1);

  const userStatusChanged = (status, userId) => {
    const toUpdateUserIdx = users.findIndex((user) => user.id === userId);
    if (toUpdateUserIdx > -1) {
      const newUsers = [...users];
      newUsers[toUpdateUserIdx].status = status;
      setUsers((prevUsers) => newUsers);
    }
  };

  return (
    <Card
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      sx={{ boxShadow: shadow }}
      style={{ margin: "1.5em" }}
      variant="outlined"
    >
      <UserCard
        id={user.id}
        username={user.username}
        status={user.status}
        avatar={user.avatar}
        userStatusChanged={userStatusChanged}
      />
    </Card>
  );
};

export default UserBox;
