import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
query GET_PRODUCT( $id: ID! ) {
    product(id: $id, idType: SLUG) {
        id
        type
        slug
        databaseId
        onSale
        name
        shortDescription
        description
        productAdditional {
          additionalProduct {
            productThumbnail {
              sourceUrl(size: LARGE)
              id
            }
            
            setsDimensions {
              value1Depth
              value1Height
              value1Name
              value1Width
              value2Depth
              value2Height
              value2Name
              value2Width
              value3Depth
              value3Height
              value3Name
              value3Width
            }
            productDescription
          
        }
      }
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
          sourceUrl(size: LARGE)
        }
        galleryImages {
          edges {
            node {
              id
              sourceUrl(size: LARGE)
            }
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
          name
          productAdditional {
            additionalProduct {
              productThumbnail {
                mediaItemUrl
              }
            }
          }
          variations(first: 9999) {
            nodes {
              databaseId
              attributes(first: 9999) {
                nodes {
                  attributeId
                  id
                  label
                  name
                  value
                }
              }
              onSale
              price
              regularPrice
            }
          }
        }
        upsell(first: 8) {
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
        related(first: 8) {
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
  
}
`;

export default GET_PRODUCT;