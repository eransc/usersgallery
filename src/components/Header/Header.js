import { Button } from "@mui/material";
import { Row, Col } from "../../styles";

const Header = () => {
  return (
    <Row style={{ justifyContent: "space-between" }}>
      <Col
        style={{ color: "dodgerblue", fontWeight: "bold", fontSize: "larger" }}
      >
        Employees
      </Col>
      <Button
        variant="outlined"
        size="small"
        style={{ textTransform: "capitalize" }}
      >
        Log Out
      </Button>
    </Row>
  );
};

export default Header;
