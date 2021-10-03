import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import BannerLanding from "../components/BannerLanding";

import picWebsite from "../assets/images/Live-Laugh-Love---eCommerce-Website.jpg";
import picGraphicDesign from "../assets/images/Graphic-Design-Work.png";

const Services = (props) => (
  <Layout>
    <Helmet>
      <title>MG Creations | Services</title>
      <meta name="description" content="Services offered by MG Creations" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Custom Website Design &amp; Development</h2>
          </header>
          <p>
            Designing and developing websites is our speciality. At MG Creations
            - Innovative Web and Graphic Design we do not use website templates,
            all our web designs are 100% unique and designed from scratch. With
            our extensive background in languages and technologies such as HTML,
            CSS, C#, React, SQL and XML, resulting in a website that is W3C
            Standards compliant and accessible. Additionly, we test each website
            in all the popular browsers (Google Chrome, Internet Explorer,
            FireFox and etc.) to make sure that they are cross-browser-friendly.
            All website graphics are optimised to ensure fast web page loading
            speeds.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <span className="image fit">
            <img src={picWebsite} alt="eCommerce Website" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>eCommerce Development</h3>
              </header>
              <p>
                MG Creations is able able to connect your site to one of the
                leading e-commerce platforms, nopCommerce. Not only does this
                give you the best opportunities for software linking, but it
                empowers you with the capacity to modify, update and edit your
                site on your own schedule. Because inventory moves fast and your
                website should too.
              </p>
              <p>
                One key feature of the nopCommerce platform is its pluggable
                modular/layered architecture which allows additional
                functionality and elements to be dynamically added to your
                website at runtime. This pluggable modular architecture makes it
                easy to manage your website.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Graphic Design</h2>
          </header>
          <p>
            MG Creations - Innovative Web and Graphic Design offers a full range
            of graphic design and print solutions. We design and print
            brochures, flyers, business cards, poster, stickers, corporate
            folders, sign boards, t-shirts, caps and other promotional items.
            Let MG Creations - Innovative Web and Graphic Design build your
            business' brand.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <span className="image fit">
            <img src={picGraphicDesign} alt="eCommerce Website" />
          </span>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Large range of branding deliverables</h3>
              </header>
              <ul>
                <li>Logo Design</li>
                <li>Promotional and advertising poster production</li>
                <li>Pull-up and PVC banner design</li>
                <li>Flyers, Brochures &amp; Catalogue</li>
                <li>Advertisements</li>
                <li>Business cards</li>
                <li>Corporate campaign design work</li>
                <li>Email signatures</li>
                <li>A4 Presentation folders</li>
                <li>Signage</li>
              </ul>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Services;
