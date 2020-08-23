import Layout from "../components/Layout";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const SectionInfo = [
  ["Overview", "overview"],
  ["Dining Area", "diningarea"],
  ["Living Room", "livingroom"],
  ["Kitchen", "kitchen"],
  ["Master Bedroom", "masterbedroom"],
  ["Master Bathroom", "masterbathroom"],
  ["Second Bedroom", "secondbedroom"],
  ["Second Bathroom", "secondbathroom"],
  ["View", "view"],
  ["Deck", "deck"],
];

const Section = ({ section, images }) => {
  const [title, key] = section;
  const imageDisplay = images ? (
    images.map((image) => {
      return (
        <>
          <br />
          <img src={urlFor(image.image).width(800).url()} />
        </>
      );
    })
  ) : (
    <></>
  );

  return (
    <div id={key}>
      <h3>{title}</h3>
      {imageDisplay}
    </div>
  );
};

const Sections = ({ images }) => {
  const sections = SectionInfo.map((section) => (
    <Section section={section} images={images[section[1]]} />
  ));

  return sections;
};

const SideNav = () => {
  const navs = SectionInfo.map((section) => (
    <>
      <Nav.Link href={"#" + section[1]}>{section[0]}</Nav.Link>
    </>
  ));
  return (
    <Nav className="flex-column">
      <Nav.Link href="#overview">Top</Nav.Link>
      {navs}
    </Nav>
  );
};

const Walkthrough = (props) => {
  console.log(props);
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const Section = ({ section, images }) => {
    const [title, key] = section;
    const imageDisplay = images ? (
      images.map((image) => {
        return (
          <>
            <br />
            <img src={urlFor(image.image).width(800).url()} />
          </>
        );
      })
    ) : (
      <></>
    );

    return (
      <div id={key}>
        <h3>{title}</h3>
        {imageDisplay}
      </div>
    );
  };

  const Sections = ({ images }) => {
    const sections = SectionInfo.map((section) => (
      <Section section={section} images={images[section[1]]} />
    ));

    return sections;
  };

  return (
    <Layout>
      <Row>
        <Col>
          <h2>Walkthrough</h2>
        </Col>
      </Row>
      <Row>
        <Col xl={1} class="stickyTop">
          <SideNav />
        </Col>
        <Col xl={4}>
          <Sections images={props.imagesBySection} />
        </Col>
      </Row>
    </Layout>
  );
};

Walkthrough.getInitialProps = async function (context) {
  const { images = "" } = context.query;
  const query =
    '*[_type == "featureImage" && section in ["overview",  "diningarea", "livingroom", "kitchen", "masterbedroom", "masterbathroom", "secondbedroom", "secondbathroom", "deck", "view"]] | order(section asc, order asc)';
  const featuredImages = await sanityClient.fetch(query, { images });
  console.log(featuredImages);
  //create map of lists keyed by section
  let imagesBySection = {};
  featuredImages.forEach((image) => {
    let section = image.section;
    if (!Object.keys(imagesBySection).includes(section)) {
      imagesBySection[section] = [];
    }
    imagesBySection[section].push(image);
  });
  return { imagesBySection: imagesBySection };
};

export default Walkthrough;
