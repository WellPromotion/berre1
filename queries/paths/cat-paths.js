import { gql } from "@apollo/client";

const GET_CAT_PATHS = gql`
query GET_CAT_PATHS {
  categories: productCategories(first: 9999, where: {exclude: "15"}) {
    nodes {
      id
      databaseId
      name
      slug
    }
  }
}
`

export default GET_CAT_PATHS;