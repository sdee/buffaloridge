import Layout from "../components/Layout";
import AmenitiesList from "../components/AmenitiesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faSkiing,
  faSnowflake,
  faFish,
  faBeer,
  faPizzaSlice,
  faSink,
  faBicycle,
  faBiking,
  faMitten,
  faCoffee,
  faTshirt,
  faCar,
  faBus,
  faCloudSun,
  faUtensils,
  faHiking,
  faCartArrowDown,
  faGolfBall,
  faDoorOpen,
  faWifi,
  faFan,
  faMugHot,
  faTv,
  faSwimmer,
  faCouch,
  faStore,
  faShower,
  faBreadSlice,
  faShoppingBag,
  faCarrot,
  faFire,
  faHamburger,
  faBed,
  faHome,
  faMapMarkerAlt,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  const amentities = [
    [<FontAwesomeIcon icon={faMapMarkerAlt}/>, "Silverthorne, CO"],
    [<FontAwesomeIcon icon={faHome}/>, "2 Bedrooms and 2 Bathrooms"],
    [<FontAwesomeIcon icon={faBed}/>, "Sleeps six people comfortably"],
    [<FontAwesomeIcon icon={faCouch}/>, "833 Square Feet"]
  ]
  return <AmenitiesList amenities={amentities}/>
}

const KitchenAmenities = () => {

  const amenities = [
    [
      <FontAwesomeIcon icon={faCoffee} />,
      "We provide coffee, tea, and filtered water",
    ],
    [
      <FontAwesomeIcon icon={faBreadSlice} />,
      "Toaster, Blender, and other applicances for your use",
    ],
    [
      <FontAwesomeIcon icon={faMitten} />,
      "Fully-equipped kitchen with plenty pots, pans, plates, and utensils",
    ],
    [
      <FontAwesomeIcon icon={faSink} />,
      "High-capacity dishwasher so you don't spend your vacation doing dishes",
    ],
    [<FontAwesomeIcon icon={faUtensils} />, "Ample dining space with a view"],
  ];

  return <AmenitiesList amenities={amenities} />;
};

const HouseAmenities = () => {
  const amenities = [

    [<FontAwesomeIcon icon={faDoorOpen} />, "Self-checkin"],
    [<FontAwesomeIcon icon={faFan} />, "With our quality ceiling fans and windows, it's breezy in summer"],
    [<FontAwesomeIcon icon={faSnowflake} />, "Built-in heaters for the cozy winters"], 
    [<FontAwesomeIcon icon={faFire} />, "Fireplace"], 
    [<FontAwesomeIcon icon={faCloudSun} />, "Deck to enjoy view of mountains"],
    [<FontAwesomeIcon icon={faWifi} />, "High-speed Wifi"],
    [<FontAwesomeIcon icon={faTv} />, "Two big-screen TVs so everyone doesn't need to watch the same thing"],
    [<FontAwesomeIcon icon={faCouch} />, "Plenty of places to sit and relax"],
    [<FontAwesomeIcon icon={faShower} />, "Two full bathrooms with hot showers"], 
  ];
  return <AmenitiesList amenities={amenities} />
};

//swimming
const BuildingAmenities = () => (
  <Row>
    <Col md={6}>
      <Row>
        <Col sm={1}>
          <FontAwesomeIcon icon={faTshirt} />
        </Col>
        <Col sm={7}>Laundry available in building</Col>
      </Row>
      <Row>
        <Col sm={1}>
          <FontAwesomeIcon icon={faCar} />
        </Col>
        <Col sm={7}>Shaded carport, protecting your car from the elements</Col>
      </Row>

      <Row>
        <Col sm={1}>
          <FontAwesomeIcon icon={faBus} />
        </Col>
        <Col sm={7}>
          Free shuttle service to trailheads and nearby towns, runs every 20 mins
        </Col>
      </Row>
    </Col>
  </Row>
);

const Outdoor = () => {
  const amenities = [
    [
      <FontAwesomeIcon icon={faHiking} />,
      "Nearest trailhead 8 minutes by foot  ",
    ],
    [
      <FontAwesomeIcon icon={faSkiing} />,
      "We are close to six of Colorado's premium resorts",
    ],
    [
      <FontAwesomeIcon icon={faFish} />,
      "One of best places in world to fly fish",
    ],
    [<FontAwesomeIcon icon={faBiking} />, "Bike along the lake"],
    [<FontAwesomeIcon icon={faBicycle} />, "For the more adventurous, you can tackle a mountain biking trail"],
    [<FontAwesomeIcon icon={faGolfBall} />, "Golf courses"],
    [<FontAwesomeIcon icon={faStar} />, "Clear view of night sky steps away"]
  ];
  return <AmenitiesList amenities={amenities} />;
};

const TownAmenities = () => {
 const amenities = [
   [<FontAwesomeIcon icon={faUtensils}/>, "Enjoy a variety of dining options less than twenty minutes away"],
[<FontAwesomeIcon icon={faHamburger}/>, "Many fast-food options when you're on the go"],
[<FontAwesomeIcon icon={faStore}/>, "Explore the towns of Silverthorne, Dillon, and Frisco"],
 [<FontAwesomeIcon icon={faShoppingBag} />, "Outlet mall less than ten minutes away"],
 [<FontAwesomeIcon icon={faCartArrowDown} />, "Big stores like Target, Walmart, and REI close by in case you forget something"],
 [<FontAwesomeIcon icon={faBeer} />, "Check out Colorado's the thriving microbrew scene"],
 [<FontAwesomeIcon icon={faCarrot} />, "Farmer's Market every Friday"],
 ];
 return <AmenitiesList amenities={amenities}/>
}

export default function Amenities() {
  return (
    <Layout>
      Overview
      <Overview/>
      Kitchen Amenities
      <KitchenAmenities />
      Building Amenities
      <BuildingAmenities />
      Outdoor Amentities
      <Outdoor />
      House Amenities
      <HouseAmenities/>
      Town Amenities
      <TownAmenities/>
      <Row>
        <Col>
          <h3>The space</h3>
          <p>
            <b>2 BR/2BA Condo with a view of the mountains!</b> With our deluxe
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

          <h3>Guest Access</h3>

          <p>
            The guest has access to the whole condo plus amenities of the
            building
          </p>
          <ul>
            <li>Fireplace</li>
            <li>
              Shaded carport right under the unit, protecting your vehicle from
              the elements
            </li>
            <li>
              Convenient shuttle service that comes every 20 minutes during
              standard hours
            </li>
            <li>
              Coin-operated laundry at a reasonable price (1.75 wash and 1.50
              dry)
            </li>

            <li>Clubhouse pool (temporarily closed)</li>
          </ul>
        </Col>
      </Row>
    </Layout>
  );
}
