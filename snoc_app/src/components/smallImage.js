import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SmallImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 270) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      
      let alt = props.filename.split(".")[0]
      return <Img alt={alt} fluid={imageFluid} id={alt} />
    }}
  />
)
export default SmallImage