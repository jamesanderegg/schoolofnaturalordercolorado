import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RoundImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 95, height: 95) {
                  ...GatsbyImageSharpFixed
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

      const imageFluid = image.node.childImageSharp.fixed
      console.log(props)
      return <Img alt={props.alt} fixed={imageFluid} className="rounded-circle"/>
    }}
  />
)
export default RoundImage