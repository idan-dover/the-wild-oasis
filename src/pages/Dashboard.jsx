import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <Link
        to="https://reactrouter.com/en/main/components/link"
        target="_blank"
      >
        link
      </Link>
    </Row>
  );
}

export default Dashboard;
