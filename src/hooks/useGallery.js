import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "image-grid" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
  }))
}

export default useGallery
