import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LargeImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 470, height: 300) {
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
      return <Img alt={props.alt} fixed={imageFluid} />
    }}
  />
)
export default LargeImage