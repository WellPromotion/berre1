import { gql } from "@apollo/client";

const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
            simpleVariations {
              name
              value
            }
            node {
            id
            databaseId
            name
            onSale
            slug
            image {
                id
                sourceUrl(size: THUMBNAIL)
            }
            productCategories {
                nodes {
                id
                name
                slug
                }
            }
            ... on SimpleProduct {
              id
              price
            }
            
            ... on VariableProduct {
              id
              name
              type
              variations {
                nodes {
                  price
                  id
                  name
                }
              }
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`;

export default ADD_TO_CART;
