import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h1>NOT FOUND</h1>
            <p>
              You just hit a route that doesn&#39;t exist... the sadness.
              <br />
              <Link to="/">Go home</Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
