import Layout from "../components/Layout"
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Walkthrough = (props) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

const images = props ? Object.values(props).map((obj) => {return <><br/><br/><img src={urlFor(obj.image).width(800).url()} /></>} ) : <></>;
  return (
    <Layout>
      <Row>
        <Col>
          <h2>Walkthrough</h2>
          {images}
          <h3>Living Room</h3>
          <h3>Kitchen</h3>
        </Col>
      </Row>
    </Layout>
  );
}

Walkthrough.getInitialProps = async function (context) {
  const { images = "" } = context.query;
  const query = '*[_type == "featureImage" && section in ["overview", "kitchen"]] | order(section asc, order asc)';
  const featuredImages = await sanityClient.fetch(query, { images });
  //create map of lists keyed by section
  return featuredImages;
};

export default Walkthrough;