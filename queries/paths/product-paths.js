import { gql } from "@apollo/client";

const GET_PRODUCT_PATHS = gql`
query GET_PRODUCT_PATHS {
    products(first: 99999) {
        nodes {
          id
          slug
          databaseId
          productCategories {
            nodes {
              id
              databaseId
              slug
            }
          }
        }
    }
}
`

export default GET_PRODUCT_PATHS;