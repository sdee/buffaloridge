import Layout from "../components/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Location() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>Our Location</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1-suikabUWawtlqnaPC0ggMGig3EIzj8P" width="640" height="480"></iframe>
          <h2>Nearby Recommendations</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1apcy4QwL-Xth3XqPh35ryFECqeTO-ajj" width="640" height="480"></iframe>
      </Col>
      </Row>
    </Layout>
  );
}
