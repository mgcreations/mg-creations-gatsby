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
        <div id="main">
          <section id="one" className="tiles">
            <article>
              <header className="major">
                <h3>Graphic Design</h3>
                <p>Creative, Responsive, Fresh</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article>
              <header className="major">
                <h3>Website Design</h3>
                <p>Creative, Responsive Design</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article>
              <header className="major">
                <h3>SEO</h3>
                <p>Don't get lost in the crowd</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article>
              <header className="major">
                <h3>Vector Art</h3>
                <p>Just for FUN!</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article>
              <header className="major">
                <h3>Logo Animation</h3>
                <p>Simple, creative logo animation</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article>
              <header className="major">
                <h3>Woodwork</h3>
                <p>Everyone needs downtime</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Make your life simpler</h2>
              </header>
              <p>
                You probably have much more important things to do than to
                fiddle around with website development and design for a large
                amount of time. Small businesses need a lot of work and
                attention or else they are at risk of failing. So, focus on the
                bigger issues and let MG Creations get your website online.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
