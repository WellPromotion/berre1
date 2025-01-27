import { gql } from "@apollo/client";

const GET_HOME = gql`
query GET_HOME {
    newProducts: products(first: 12, where: {orderby: {field: DATE, order: DESC}}) {
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
    posts(first: 999) {
      nodes {
        date
        excerpt
        slug
        title
        featuredImage {
          node {
            mediaItemUrl
            sourceUrl(size: LARGE)
            id
          }
        }
        id
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
    featured: products(where: {featured: true}, first: 1) {
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
            sourceUrl(size: LARGE)
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
    saleProducts: products(where: {onSale: true}, first: 12) {
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
    categories: productCategories(first: 9999, where: {exclude: ["15", "47"]}) {
        nodes {
          id
          databaseId
          name
          slug
          image {
            sourceUrl(size: LARGE)
            id
          }
          products(where: {orderby: {field: PRICE, order: ASC}}, first: 1) {
            nodes {
              id
              databaseId
              name
              ... on SimpleProduct {
                id
                price
              }
            }
          }
        }
    }
    page(id: "66", idType: DATABASE_ID) {
      id
      title
      homePage {
        homePage {
          titleOneCategories
          titleThreeBlogs
          titleFourStyles
          titleTwoPdf
          pdfOneName
          pdfOneFile {
            id
            mediaItemUrl
          }
          pdfOneImage {
            id
            sourceUrl(size: MEDIUM)
          }
          pdfTwoName
          pdfTwoFile {
            id
            mediaItemUrl
          }
          pdfTwoImage {
            id
            sourceUrl(size: MEDIUM)
          }
          productListTitleOne
          productListTitleTow
        }
      }
    }
    
    seo : page(id: "66", idType: DATABASE_ID) {
      id
      title
      seoTags {
        seoData {
          metaTag
          titleTag
          seoImage {
            id
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
    styles(first: 99999) {
      nodes {
        id
        slug
        title
        databaseId
        styles {
          styleExcerpt
          styleMainImage {
            sourceUrl(size: MEDIUM)
            id
          }
        }
      }
    }
}
`;

export default GET_HOME;