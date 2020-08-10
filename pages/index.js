import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Home() {
  return (
    <div>
    <Container fluid>
      <Row>
        <Col>
        <p>At our mountain condo, you can take advantage of all that the Rockies have to offer while having a spacious, fully equipped home to come back to. This is truly a place for all seasons!</p>

        <p>During the winter, you can snuggle up to the fireplace after a long day of skiing, snow-boarding, or snowshoeing.  You can relax the muscles in the hot tub or indoor pool. In the summer, you can choose from many different hikes and water activities, come back, crack open a beer and watch the sun set over the mountains from the deck. In the fall, you can go for a hike for leaf peeping or bomb down trails on a mountain bike.</p>

        <p>In winter, this is a prime spot with access to five of Colorado premiere ski resorts. During other times of year, you can access numerous trailheads for hikes of all levels, from the 14,000 Quandary Peak to children-friendly half hour hikes. The closest trailhead is only eight minutes away by foot. This area is also well-known for mountain biking, sailing, paddleboarding, kayaking, and fly fishing.</p>

        <p>The location is in the mountains but also very convenient. There are a number of food options very close by at all ranges from sit-down dining with local cuisine to familiar fast food when you’re on the go. There are multiple grocery stores including Safeway and Whole Foods and big box stores in case you forget something, all within 15 minutes driving. Be sure to also check out the thriving microbrew scene.</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
