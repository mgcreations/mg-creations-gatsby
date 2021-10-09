import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../components/layout";

function BlogIndex({ data }) {
  return (
    <Layout pageTitle="My Blog Page Setup">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogIndex;
