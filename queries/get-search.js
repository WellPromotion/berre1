import { gql } from "@apollo/client";

const GET_SEARCH = gql`
query GET_SEARCH( $searchTag: String ) {
    products(first: 9999, where: {search: $searchTag}) {
        nodes {
          id
          databaseId
          onSale
          name
          productCategories {
            nodes {
              ancestors {
                nodes {
                  count
                }
              }
              name
              slug
              id
            }
          }
          image {
            id
            title
            sourceUrl(size: SHOP_SINGLE)
          }
          attributes {
            nodes {
              id
              name
            }
          }
          ... on SimpleProduct {
            id
            price
            regularPrice
            stockStatus
          }
          ... on VariableProduct {
            id
            price
            regularPrice
            stockStatus
            productAdditional {
              additionalProduct {
                productThumbnail {
                  mediaItemUrl
                }
              }
            }
          }
          slug
        }
    }
}
`;

export default GET_SEARCH;