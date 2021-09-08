import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import Card from '../components/Card'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, welcome, card, section, accordion, body
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section background-colour">
      <div className="container">
        <Content source={welcome} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Card items={card} />
      </div>
    </section>

    <section className="section wp-block-columns services_triptych">
    <div className="container">
    <div className="wp-block-columns services_triptych">

    <div class="wp-block-column tri-cycle"> 
      <div class="wp-block-image is-style-default">
        <figure class="aligncenter size-large">
          <a href="/about-us">
            <img loading="lazy" width="63" height="54" src="/images/cycle.png" alt="" />
          </a>
        </figure>
      </div> 
      <h3 class="has-text-align-center">About us</h3> 
      <p class="has-text-align-center">114 riders; 5200 miles; 1000s of cakes ....</p>
    </div>
    <div class="wp-block-column tri-years"> 
      <div class="wp-block-image is-style-default">
        <figure class="aligncenter size-large">
          <a href="/history">
            <img loading="lazy" width="63" height="54" src="/images/years.png" alt="" />
          </a>
        </figure>
      </div> 
      <h3 class="has-text-align-center">History</h3> 
      <p class="has-text-align-center">18 years; 87 days; 27 YHAs; 13 ferries ....</p>
    </div>
    <div class="wp-block-column tri-fundraise"> 
      <div class="wp-block-image is-style-default">
        <figure class="aligncenter size-large">
          <a href="/history/fundraising">
            <img loading="lazy" width="63" height="54" src="/images/fundraise.png" alt="" />
          </a>
        </figure>
      </div> 
      <h3 class="has-text-align-center">Fundraising</h3> 
      <p class="has-text-align-center">£220,000 (and rising) raised for over 40 different good causes .....</p>
    </div>  
    </div>
    </div>      
    </section>

    {!!section &&
    section.map((section, index) => (
    <div className="section">
      <div className="container">
        {!!section.image && <div className={`Section--Image ${section.align}`} >
          <img src={section.image} alt="" />
        </div>
        }           
        <Content source={section.content} />
      </div>
    </div>
    ))}

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        welcome
        card {
          featuredImage
          title
          description
          canonicalLink
        }
        section {
          image
          align
          content
        }
      }
    }
  }
`
