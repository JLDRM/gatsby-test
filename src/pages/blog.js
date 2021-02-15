import React from "react"
import { graphql, Link } from "gatsby"
import { AppLayout } from "../components/app-layout"
import styled from "styled-components"

const StyledH1 = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`
const StyledH3 = styled.h3``
const StyledSpan = styled.span`
  color: #5a198b;
`
export default ({ data }) => {
  return (
    <AppLayout>
      <div>
        <StyledH1>Weirdo Blog</StyledH1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledH3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
              <StyledSpan>- {node.frontmatter.date}</StyledSpan>
            </StyledH3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
