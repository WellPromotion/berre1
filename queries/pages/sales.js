import { gql } from "@apollo/client";

const SALES_PAGE = gql`
query SALES_PAGE {
  page(id: "736", idType: DATABASE_ID) {
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
  seo : page(id: "736", idType: DATABASE_ID) {
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

export default SALES_PAGE;