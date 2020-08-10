import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Amenities() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>The Space</h2>

          <p>
            2 BR/2BA Condo with a view of the mountains! With our deluxe
            inflatable mattress, pull-out bed, and lots of extra blankets and
            pillows, six can sleep here comfortably. We offer ample closet
            space, bedding, hanging hooks, and other amenities for longer-stays.
            There’s plenty of space to move around and a dozen different little
            spots to sit and relax. One of the best spots is to relax on our
            deck with a beverage of your choice watching the sunset over the
            mountains or star gazing.
          </p>

          <p>
            Our place offers a ton of natural light and it’s breezy even during
            hot, summer days while the fireplace and heater will keep you toasty
            during the winter.
          </p>

          <p>
            If you don’t want to go out for every meal, our kitchen features
            newly updated appliances and a large fridge which is perfect for
            stocking up for the week. There are plenty of pots, pans, cooking
            equipment, utensils, and dishwasher for you to use.
          </p>

          <h2>Guest Access</h2>

          <p>
            The guest has access to the whole condo plus amenities of the
            building
          </p>

          <ul>
            <li>
              Shaded carport right under the unit, protecting your vehicle from
              the elements
            </li>
            <li>
              Convenient shuttle service that comes every 20 minutes during
              standard hours.
            </li>
            <li>
              Coin-operated laundry at a reasonable price (1.75 wash and 1.50
              dry)
            </li>
            <li>Fireplace</li>
            <li>Clubhouse pool (temporarily closed)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
