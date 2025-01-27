import { gql } from "@apollo/client";

const GET_CART = gql`
query GET_CART {
    cart {
        subtotal
        subtotalTax
        shippingTax
        shippingTotal
        total
        totalTax
        feeTax
        feeTotal
        discountTax
        discountTotal
        appliedCoupons {
            code
            description
            discountAmount
        }
        contents {
            nodes {
                variation {
                    node {
                      price
                      name
                    }
                }
            key
            quantity
            total
            subtotal
            subtotalTax
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
                    databaseId
                    price
                    variations {
                      nodes {
                        id
                        name
                        price
                      }
                    }
                }

            }
            }
        }
    }}
}
`;

export default GET_CART;