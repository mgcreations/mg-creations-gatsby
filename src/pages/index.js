import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Banner from "../components/Banner";

// markup
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="MG Creations"
          meta={[
            {
              name: "description",
              content:
                "Graphic Design and Website Design based in Pietermaritzburg",
            },
            {
              name: "keywords",
              content:
                "website, graphic, website design, graphic design, pietermaritzburg,",
            },
          ]}
        ></Helmet>

        <Banner />
      </Layout>
    );
  }
}

export default HomeIndex;
