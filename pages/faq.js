import Layout from '../components/Layout';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FAQ() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>FAQs</h2>
          <h3>When can I check in/check out?</h3>
          <p>Check-in is after 4 pm and check-out is 10 am. Within that period, you have flexibility since we have self-checkin.</p>
          <h3>Where is the closest grocery store?</h3>
          <p>The closest grocery store is a 10 minute drive with no traffic. Whole Foods and Safeway are 15 minutes away.</p>
          <h3>What's the best way to book?</h3>
          <p>Currently, the best way to book is through our <a href="https://www.airbnb.com/manage-your-space/44892929">Airbnb</a>. Repeat guests or friends of friends can e-mail us.</p>
        </Col>
      </Row>
    </Layout>
  );
}
