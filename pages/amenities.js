import Layout from "../components/Layout";
import AmenitiesList from "../components/AmenitiesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faSoap,
  faSkiing,
  faSnowflake,
  faFish,
  faBeer,
  faRoute,
  faSink,
  faBiking,
  faMitten,
  faCoffee,
  faTshirt,
  faCar,
  faBus,
  faUtensils,
  faHiking,
  faCartArrowDown,
  faGolfBall,
  faDoorOpen,
  faWifi,
  faFan,
  faHeadset,
  faMusic,
  faWater,
  faTv,
  faSwimmer,
  faChild,
  faShoppingBasket,
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
  faRoad,
  faStar,
  faChessKnight,
  faPlayCircle,
  faCookieBite,
  faShuttleVan,
  faBaby,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  const amentities = [
    [<FontAwesomeIcon icon={faMapMarkerAlt} />, "Located in Silverthorne, CO"],
    [
      <FontAwesomeIcon icon={faMountain} />,
      "Surrounded by the Rockies in all directions",
    ],
    [<FontAwesomeIcon icon={faCouch} />, "833 Square Feet"],
    [<FontAwesomeIcon icon={faHome} />, "2 Bedrooms and 2 Bathrooms"],
    [
      <FontAwesomeIcon icon={faMoon} />,
      "Sleeps six adults comfortably and up to eight",
    ],
    [
      <FontAwesomeIcon icon={faBed} />,
      "Queen bed (tempurpedic adjustable), two twin beds, pull out bed, and optional inflatable full-sized bed",
    ],
  ];
  return <AmenitiesList amenities={amentities} />;
};

const ComfortAmenities = () => {
  const amenities = [
    [<FontAwesomeIcon icon={faFire} />, "Fireplace"],
    [<FontAwesomeIcon icon={faCookieBite} />, "Snacks for guests"],
    [
      <FontAwesomeIcon icon={faTv} />,
      "Two big-screen TVs so everyone doesn't need to watch the same thing",
    ],
    [<FontAwesomeIcon icon={faUtensils} />, "Ample dining space with a view"],
    [<FontAwesomeIcon icon={faCouch} />, "Plenty of places to sit and relax"],
    [<FontAwesomeIcon icon={faChessKnight} />, "Board games for family fun"],
    [
      <FontAwesomeIcon icon={faSink} />,
      "High-capacity dishwasher so you don't spend your vacation doing dishes",
    ],
    [<FontAwesomeIcon icon={faWifi} />, "High-speed Wifi for streaming"],
    [
      <FontAwesomeIcon icon={faPlayCircle} />,
      "Streaming accounts for music, TV, and movies",
    ],
  ];
  return <AmenitiesList amenities={amenities} />;
};

const HouseAmenities = () => {
  const amenities = [
    [<FontAwesomeIcon icon={faDoorOpen} />, "Self-checkin"],
    [
      <FontAwesomeIcon icon={faSoap} />,
      "Full, professional cleaning between guests",
    ],
    [
      <FontAwesomeIcon icon={faShower} />,
      "Two full bathrooms with hot showers",
    ],
    [
      <FontAwesomeIcon icon={faFan} />,
      "Breezy in summer with quality ceiling fans and wide windows",
    ],
    [
      <FontAwesomeIcon icon={faSnowflake} />,
      "Built-in heaters for the cozy winters",
    ],
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
    [<FontAwesomeIcon icon={faBaby} />, "Cradle available"],
  ];
  return <AmenitiesList amenities={amenities} />;
};

const BuildingAmenities = () => {
  const amenities = [
    [
      <FontAwesomeIcon icon={faTshirt} />,
      "Washer and dryer available in building",
    ],
    [
      <FontAwesomeIcon icon={faCar} />,
      "Shaded carport, protecting your car from the elements",
    ],
    [
      <FontAwesomeIcon icon={faBus} />,
      "Free shuttle service to trailheads and nearby towns, runs every 20 mins",
    ],
    [
      <FontAwesomeIcon icon={faSwimmer} />,
      "Access to 4 club house with pools (temporarily closed)",
    ],
    [
      <FontAwesomeIcon icon={faHeadset} />,
      "Access to 24/7 Support for emergencies and critical issues",
    ],
  ];
  return <AmenitiesList amenities={amenities} />;
};

const Outdoor = () => {
  const amenities = [
    [
      <FontAwesomeIcon icon={faSkiing} />,
      "5 ski resorts within 30 min drive and more including Vail a little further afield",
    ],
    [
      <FontAwesomeIcon icon={faHiking} />,
      "Nearest trailhead 8 minutes by foot",
    ],
    [<FontAwesomeIcon icon={faChild} />, "Kid-friendly activities"],
    [
      <FontAwesomeIcon icon={faWater} />,
      "Water sports including kayaking, sailing, and paddleboarding",
    ],
    [
      <FontAwesomeIcon icon={faFish} />,
      "One of best places in world to fly fish",
    ],
    [
      <FontAwesomeIcon icon={faBiking} />,
      "Bike paved trails along the lake or tackle a mountain biking trail",
    ],
    [<FontAwesomeIcon icon={faStar} />, "Clear view of night sky steps away"],
  ];
  return <AmenitiesList amenities={amenities} />;
};

const TownAmenities = () => {
  const amenities = [
    [
      <FontAwesomeIcon icon={faUtensils} />,
      "Enjoy a variety of dining options less than twenty minutes away",
    ],
    [<FontAwesomeIcon icon={faCarrot} />, "Farmer's Market every Friday"],
    [
      <FontAwesomeIcon icon={faStore} />,
      "Explore the towns of Silverthorne, Dillon, and Frisco",
    ],
    [
      <FontAwesomeIcon icon={faBeer} />,
      "Check out Colorado's the thriving microbrew scene",
    ],
    [
      <FontAwesomeIcon icon={faMusic} />,
      "Live music including some of the best outdoor concert venues in the country",
    ],
    [
      <FontAwesomeIcon icon={faGolfBall} />,
      "3 miles from the legendary Raven at Eagles Nest Golf Course",
    ],
  ];
  return <AmenitiesList amenities={amenities} />;
};

const Convenience = () => {
  const amenities = [
    [
      <FontAwesomeIcon icon={faRoute} />,
      "Prime location for exploring The Rockies and the Blue River",
    ],
    [<FontAwesomeIcon icon={faRoad} />, "Exits from I-70, CO-9, CO-6"],
    [
      <FontAwesomeIcon icon={faShuttleVan} />,
      "Shuttle available from Denver airport",
    ],
    [
      <FontAwesomeIcon icon={faHamburger} />,
      "Many fast-food options when you're on the go",
    ],
    [
      <FontAwesomeIcon icon={faShoppingBasket} />,
      "Three grocery stores within 20 minutes away make it convenient to stock up",
    ],
    [
      <FontAwesomeIcon icon={faCartArrowDown} />,
      "Target, Walmart, and REI close by in case you forget something",
    ],
    [
      <FontAwesomeIcon icon={faShoppingBag} />,
      "Outlet mall less than ten minutes away",
    ],
  ];
  return <AmenitiesList amenities={amenities} />;
};

export default function Amenities() {
  return (
    <Layout>
      <Row>
        <Col xl={5}>
          <b>Overview</b>
          <Overview />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xl={3}>
          <b>All of the Essentials</b>
          <HouseAmenities />
        </Col>
        <Col xl={3}>
          <b>For Your Comfort</b>
          <ComfortAmenities />
        </Col>
        <Col xl={3}>
          <b>Additional Amenities</b>
          <BuildingAmenities />
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xl={3}>
          <b>Your Next Outdoor Adventure Awaits</b>
          <Outdoor />
        </Col>
        <Col xl={3}>
          <b>Full of Local Flavor</b>
          <TownAmenities />
        </Col>
        <Col xl={3}>
          <b>Everything You Need in a Small Area</b>
          <Convenience />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col xl={9}>
          <p>
            <b>2 BR/2BA Condo with a view of the mountains!</b> Our condo is
            nestled in the Wildernest area of Buffalo Mountain yet only a short
            drive to the major ski resorts, hiking trails, shopping areas, and
            restaurants.
          </p>
          <p>
            With our deluxe inflatable mattress, pull-out bed, and lots of extra
            blankets and pillows, six can sleep here comfortably. We offer ample
            closet space, bedding, hanging hooks, and other amenities for
            longer-stays. There’s plenty of space to move around and a dozen
            different little spots to sit and relax. One of the best spots is to
            relax on our deck with a beverage of your choice watching the sunset
            over the mountains or star gazing.
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
        </Col>
      </Row>
    </Layout>
  );
}
