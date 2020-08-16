import Layout from "../components/Layout";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const Walkthrough = (props) => {
  console.log(props);
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const Section = ({ section, images }) => {
    const [title, key] = section;
    const imageDisplay = images ? images.map((image) => {
      return (
              <>
                <br />
                <br />
                <img src={urlFor(image.image).width(800).url()} />
              </>
      )
    }) : <></>;

    

    return (
      <div id={key}>
        <h3>{title}</h3>
        {imageDisplay}
      </div>
    );
  };

  const Sections = ({ images }) => {
    const sections = [
      ["Overview", "overview"],
      ["Living Room", "livingroom"],
      ["Dining Area", "diningarea"],
      ["Kitchen", "kitchen"],
      ["Master Bedroom", "masterbedroom"],
      ["Master Bathroom", "masterbathroom"],
      ["Second Bathroom", "secondbathroom"],
      ["Deck", "deck"],
      ["Amenities", "amenities"],
      ["View", "view"],  
    ].map((section) => (
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
          <Nav>
            <Nav.Link href="#overview">Top</Nav.Link>
            <Nav.Link href="#livingroom">Living Room</Nav.Link>
            <Nav.Link href="#kitchen">Kitchen</Nav.Link>
          </Nav>
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
    '*[_type == "featureImage" && section in ["overview", "kitchen"]] | order(section asc, order asc)';
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
