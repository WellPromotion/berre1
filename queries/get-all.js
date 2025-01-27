import { gql } from "@apollo/client";

const GET_ALL = gql`
query GET_ALL {
    products(first: 9999, where: {orderby: {field: DATE, order: DESC}}) {
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

export default GET_ALL;