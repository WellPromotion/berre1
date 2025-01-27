import { gql } from "@apollo/client";

const ALL_PRODUCTS_PAGE = gql`
query ALL_PRODUCTS_PAGE {
  page(id: "743", idType: DATABASE_ID) {
    id
    title
    catHero {
      categoryBasic {
        heroImage {
          id
          sourceUrl(size: LARGE)
        }
        heroText
      }
    }
  }
  seo : page(id: "743", idType: DATABASE_ID) {
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
}
`;

export default ALL_PRODUCTS_PAGE;