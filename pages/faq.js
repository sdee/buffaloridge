import Layout from '../components/Layout';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FAQ() {
  return (
    <Layout>
      <Row>
        <Col>
          <h2>FAQs</h2>
          <h3>How far is it from the ski lifts?</h3>
          <p>We are centrally located between several ski resorts in case you want to try different mountains. Breckenridge 30 min, Keystone 20 min, Arapahoe Basin 25 min, Copper Mountain 20 min, Loveland 20 min, and Vail 40 min.</p>
          <h3>How easy is it to get to the ski slopes and other attractions</h3>
          <p>We generally rent a car (book ahead during busy season). We have a reserved carport for your convenience. There is a free summit shuttle bus that comes every 20 minutes. </p>
          <h3>Can I get an Uber or Lyft from the condo?</h3>
          <p>Yes! Both are available</p>
          <h3>How do I get from the Denver airport?</h3>
          <p>You can rent a car, take a shuttle, or take an Uber (which is cheaper than a shuttle if you have 4 people or more).</p>
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
