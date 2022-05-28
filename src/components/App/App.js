import React, { useEffect, useState } from "react";
import "./App.css";
import { Grid2 } from "../../styles";

import axios from "axios";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import UsersBox from "../UsersBox/UsersBox";
import UsersContext from "../../contexts/userContext";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [statusVal, setStatusVal] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setUsers(res.data.users);
  };

  const UserService = {
    users: users,
    setUsers: setUsers,
    searchVal,
    setSearchVal,
    statusVal,
    setStatusVal,
    search: (username, filter) => {
      if (!username && !filter) {
        return users;
      }
      let filteredUsers = [...users];
      if (username) {
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.username.toLowerCase().indexOf(username.toLowerCase()) > -1
        );
      }
      if (filter && filter !== "All") {
        filteredUsers = filteredUsers.filter((user) => user.status === filter);
      }

      console.log("filteredUsers", filteredUsers);
      return filteredUsers;
    },
  };

  return (
    <UsersContext.Provider value={UserService}>
      <div className="App">
        <Grid2>
          <Header />
          <SearchBar />
          <UsersBox />
        </Grid2>
      </div>
    </UsersContext.Provider>
  );
};

export default App;
