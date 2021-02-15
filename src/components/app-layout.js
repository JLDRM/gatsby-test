import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import appLayoutStyles from "../styles/app-layout.module.css"
import MishongoLogo from "../images/Mishongo.png"

const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1rem;
  a {
    margin: auto 0;
    font-family: crazy-titles;
  }
`
const AppLogo = () => {
  return (
    <img className={appLayoutStyles.app_logo} src={MishongoLogo} alt="Logo" />
  )
}

export const AppLayout = ({ children }) => {
  const layoutData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            page1
            page2
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <StyledNavbar>
        <Link to="/">
          <AppLogo />
        </Link>
        <Link to="/about/">{layoutData.site.siteMetadata.page1}</Link>
        <Link to="/blog">{layoutData.site.siteMetadata.page2}</Link>
      </StyledNavbar>
      <div className={appLayoutStyles.layout_content_wrapper}>{children}</div>
    </React.Fragment>
  )
}
