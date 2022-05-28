import React, { useContext } from "react";

import {
  Button,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

import { GridInner, Row, Col } from "../../styles";
import { PlusOne } from "@mui/icons-material";
import UsersContext from "../../contexts/userContext";

const SearchBar = () => {
  const { setSearchVal, statusVal, setStatusVal } = useContext(UsersContext);
  const menuItems = [
    "All",
    "Working",
    "BusinessTrip",
    "OnVacation",
    "LunchTime",
  ];

  return (
    <GridInner style={{ margin: "2% auto", padding: "2%" }}>
      <Row>
        <Col size={1}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "dodgerblue",
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "130px",
              minHeight: "55px",
              fontWeight: "bold",
            }}
            endIcon={<PlusOne />}
          >
            Create
          </Button>
        </Col>
        <Col size={10}>
          <TextField
            fullWidth
            label="Type to search"
            variant="outlined"
            id="fullWidth"
            onChange={(ev) => setSearchVal(ev.target.value)}
          />
        </Col>
        <Col size={3}>
          <FormControl fullWidth>
            <InputLabel variant="outlined" id="demo-simple-select-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={statusVal}
              onChange={(ev) => {
                setStatusVal(ev.target.value);
              }}
              label="Filter"
            >
              {menuItems.map((menuitem, index) => (
                <MenuItem key={index} value={menuitem}>
                  {menuitem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
      </Row>
    </GridInner>
  );
};

export default SearchBar;
