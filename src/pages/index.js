import React from "react"

import { AppProductCard } from "../components/app-product-card"
import { AppLayout } from "../components/app-layout"
import SEO from "../components/app-seo"

import cat1 from "../images/cat-1.jpg"

const feeling =
  "Some fresh air enters through my eyes. I don't give a fuck for your today," +
  " yesterday and tomorrow. For what you did. What do you believe. Your gravity" +
  " takes me out of my scape."
const feeling_title = "Expected gravity"
const feeling_img = cat1

const dream =
  "I don't want to wake up. An open scar gives me a quiet seaside horizon. " +
  "An unknown wild face is in the middle of it. I am not able to talk to her. Her naive smile" +
  "gets so close that I can't see his eyes. A real kiss wakes me up."

export default () => (
  <AppLayout>
    <SEO title={"Crap will always exist"} />
    <AppProductCard title={feeling_title} img={feeling_img} text={feeling} />
    <AppProductCard text={dream} />
  </AppLayout>
)
