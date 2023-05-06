import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Avatar from "../components/avatar"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  

  return (
    <Layout location={location} title={siteTitle}>
    <Seo title="About Filip Rastovic" />
    <Avatar/>
    <h1>About Filip</h1>
    <p>Filip’s fascination, passion, and curiosity about <b>people, computers, and art,</b> started off from an early age. He drew his first user interface wireframes in kindergarten, playing with the piece of paper, and imagining it as a communication gadget, a pager device. As a high schooler, he got a bit entrepreneurial and used to sell animated PowerPoint presentations to other students who turned them in for grades. He later studied computer science and engineering while mercilessly learning and expanding his understanding of design, marketing, and web usability.</p>
    <p>Filip started his professional career as a web designer and developer, working remotely from Serbia for an amazing US-based digital marketing agency, and soon started his own independent consultancy focusing on <b>Conversion Optimization and Web Design</b>.</p>
	  <p>He had the pleasure to work with <b>Google, Johnsons & Johnsons, Australian Museum, Guy Kawasaki, Tipalti, Psyop, BunkerVFX, Bending Spoons, Hard Work Club</b>, and 60 other clients from every continent on the planet. </p>
	  <p>Today he helps his clients solve an array of very specific technical challenges, including doing <b>conversion optimization for e-commerce and landing pages, designing websites and user interfaces, developing them, and setting up optimization/automation pipelines</b>. Filip is a conversion expert, web developer, and graphic designer.</p>
	  <p>When he’s not working with clients, Filip enjoys creating 3D art (sometimes commercially as well!).</p>
	  <p>Always questioning the world around him, Filip enjoys reading fat books, playing guitar, listening to music, and working out. He used to live in the World of Warcraft as a teenager, defeating the Lich King with the guild Digital Crew that he led.</p>
	  <p><b>Check out Filip’s work using the links below:</b></p>
	  <ul>
		<li><a href="https://www.clarity-enhanced.net/portfolio/" target="_BLANK">Web Design / CRO Portfolio and Case Studies</a></li>
		<li><a href="https://www.behance.net/rastovicfilip" target="_BLANK">3D Art Portfolio</a></li>
		<li><a href="https://armorgames.com/trial-and-terror-game/18409" target="_BLANK">Trial And Terror, a video game Filip designed as a CS student.</a></li>
	  </ul>
	  <p><a href="/">Go Back</a></p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
