import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AmenitiesList = ({ amenities }) => {
  const rows = amenities.map((amenity) => (
    <Row>
      <Col xl={1}>{amenity[0]}</Col> <Col xl={11}>{amenity[1]}</Col>
    </Row>
  ));

  return (
    // <Row>
    //   <Col xl={6}>{rows}</Col>
    // </Row>
    <>
    {rows}
    </>
  );
};

AmenitiesList.propTypes = {
    amenitites: PropTypes.arrayOf(PropTypes.array)
};

export default AmenitiesList;
