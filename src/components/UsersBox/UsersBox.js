import React, { useContext } from "react";

import UserBox from "../UserBox/UserBox";
import { Grid2, Row } from "../../styles";

import UsersContext from "../../contexts/userContext";

const UsersBox = () => {
  const { users, search, searchVal, statusVal } = useContext(UsersContext);

  return users.length === 0 ? null : (
    <Grid2 style={{ margin: 0 }}>
      <Row style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {search(searchVal, statusVal).map((user, index) => (
          <UserBox key={index} user={user} />
        ))}
      </Row>
    </Grid2>
  );
};

export default UsersBox;
