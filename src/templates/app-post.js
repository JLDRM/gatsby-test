import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { AppLayout } from "../components/app-layout"

const StyledVideoContainer = styled.div`
  max-width: 100%;
  width: 100%;
  iframe {
    max-width: 100%;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <AppLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <StyledVideoContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </AppLayout>
  )
}

export const postInfoQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
