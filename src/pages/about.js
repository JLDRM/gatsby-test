import React from "react"
import styled from "styled-components"

import { AppProductCard } from "../components/app-product-card"
import { AppMewClock } from "../components/app-mew-clock"
import { AppLayout } from "../components/app-layout"

export const StyledSection = styled.section`
  padding: 0.7rem;
  background-color: papayawhip;
  text-align: center;
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`
export default () => (
  <AppLayout>
    <StyledSection>
      <AppMewClock />
      <AppProductCard text="Damn boy" />
    </StyledSection>
  </AppLayout>
)
