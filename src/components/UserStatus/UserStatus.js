import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import CircleIcon from "@mui/icons-material/Circle";

const useStyles = makeStyles({
  item: {
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "flex-start",
    width: 180,
  },
});

const getColorByStatus = (status) => {
  switch (status.toLowerCase()) {
    case "working":
      return "green";
    case "businesstrip":
      return "purple";
    case "onvacation":
      return "pink";
    case "lunchtime":
      return "yellow";
    default:
      return "green";
  }
};

const UserStatus = ({ userId, status, userStatusChanged }) => {
  const [userStatus, setUserStatus] = useState(status);
  const classes = useStyles();

  const onChangeStatus = (value) => {
    setUserStatus(value);
    userStatusChanged(value, userId);
  };

  useEffect(() => {
    // setTimeout(() => setUserStatus(status), 100);
    setUserStatus(status)
  }, [status, userStatus]);

  return (
    <FormControl variant="standard" sx={{ m: 1, width: 120, height: 30 }}>
      <Select
        size="small"
        style={{ maxHeight: "20px", minWidth: "70px", fontSize: ".8rem" }}
        labelId="status-select-filled-label"
        id="status-select-filled"
        value={userStatus}
        onChange={(ev) => onChangeStatus(ev.target.value)}
      >
        <MenuItem className={classes.item} value={"Working"}>
          <CircleIcon
            sx={{ fontSize: 10, color: getColorByStatus("Working") }}
          />
          Working
        </MenuItem>
        <MenuItem className={classes.item} value={"BusinessTrip"}>
          <CircleIcon
            sx={{ fontSize: 10, color: getColorByStatus("BusinessTrip") }}
          />
          BusinessTrip
        </MenuItem>
        <MenuItem className={classes.item} value={"OnVacation"}>
          <CircleIcon
            sx={{ fontSize: 10, color: getColorByStatus("OnVacation") }}
          />
          OnVacation
        </MenuItem>
        <MenuItem className={classes.item} value={"LunchTime"}>
          <CircleIcon
            sx={{ fontSize: 10, color: getColorByStatus("LunchTime") }}
          />
          LunchTime
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserStatus;
