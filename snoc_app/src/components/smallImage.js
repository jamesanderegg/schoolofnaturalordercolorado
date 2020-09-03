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
                fixed(width: 270, height: 165) {
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
      
      let alt = props.filename.split(".")[0]
      return <Img alt={alt} fixed={imageFluid} id={alt} />
    }}
  />
)
export default SmallImage