import { gql } from "@apollo/client";

const GET_BLOGS = gql`
query GET_BLOGS {
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
    }
  }
  page(id: "2029", idType: DATABASE_ID) {
    blogsPage {
      blogsMainContent {
        title
        description
        image {
          id
          sourceUrl(size: LARGE)
        }
      }
    }
    databaseId
    seoTags {
      seoData {
        titleTag
        metaTag
        seoImage {
          sourceUrl(size: MEDIUM)
        }
      }
    }
  }
}`

export default GET_BLOGS;