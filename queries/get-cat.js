import { gql } from "@apollo/client";

const GET_CAT = gql`
query GET_CAT($category: String, $category_id: ID!) {
  productCategory(id: $category_id, idType: SLUG) {
      id
      databaseId
      name
      slug
      description
      image {
        sourceUrl(size: LARGE)
        id
      }
  }
  products(where: {category: $category, orderby: {field: DATE, order: DESC}}, first: 99999 ) {
    nodes {
      id
      databaseId
      onSale
      date
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
        sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
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
`

export default GET_CAT;