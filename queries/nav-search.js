import { gql } from "@apollo/client";

const GET_SEARCH = gql`
query GET_SEARCH( $search: String ) {
    products(where: {search: $search}, first: 4) {
        nodes {
            id
            databaseId
            name
            productCategories {
              nodes {
                ancestors {
                  nodes {
                    count
                  }
                }
                name
                id
                slug
              }
            }
            image {
              sourceUrl(size: THUMBNAIL)
              id
            }
            slug
            ... on SimpleProduct {
              id
              price
              stockStatus
            }
            productAdditional {
              additionalProduct {
                productThumbnail {
                  mediaItemUrl
                }
              }
            }
          }
      }
}
`;

export default GET_SEARCH;