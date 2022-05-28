const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 8080;

const users = [
  {
    id: "1",
    avatr: 'http://i.pravatar.cc/300?img=2',
    status: "Working",
    username: "Mr. Jackson"
  },
  {
    id: "2",
    avatar: 'http://i.pravatar.cc/300?img=2',
    status: "BusinessTrip",
    username: "Ms. Jackson"
  },
  {
    id: "3",
    status: "LunchTime",
    avatar: 'http://i.pravatar.cc/300?img=3',
    username: "Jackson Junior"
  },
  {
    id: "4",
    status: "OnVacation",
    avtatr: 'http://i.pravatar.cc/300?img=4',
    username: "Jackson Junior the III"
  },
  {
    id: "5",
    avatar: 'http://i.pravatar.cc/300?img=5',
    status: "OnVacation",
    username: "Jackson Five"
  },
  {
    id: "6",
    avatar: 'http://i.pravatar.cc/300?img=6',
    status: "OnVacation",
    username: "Eran Five"
  }
];

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));