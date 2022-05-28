import React from "react";
import { CardContent, Typography, Avatar } from "@mui/material";
import UserStatus from "../UserStatus/UserStatus";
import { Row } from "../../styles";

const UserCard = ({ id, username, avatar, status, userStatusChanged }) => {
  return (
    <React.Fragment>
      <CardContent style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
        <Row
          style={{
            flexDirection: "column-reverse",
            alignItems: "flex-start",
            margin: "0 1em",
          }}
        >
          <UserStatus
            userId={id}
            status={status}
            userStatusChanged={userStatusChanged}
          />
          <Typography
            sx={{ fontSize: 12, fontWeight: "bold", alignSelf: "center" }}
            color="text.primary"
          >
            {username}
          </Typography>
        </Row>
      </CardContent>
    </React.Fragment>
  );
};

export default UserCard;
