import { gql } from "@apollo/client";

const GET_CONTACT = gql`
query GET_CONTACT {
  page(id: "710", idType: DATABASE_ID) {
    id
    title
    contactPage {
      contactInformation {
        contactFormHeader
        contactFormText
        firstParagraphHeader
        firstParagraphText
        heroImage {
          id
          sourceUrl(size: LARGE)
        }
        heroText
        locationOneDetails
        locationOneImage {
          id
          sourceUrl(size: LARGE)
        }
        locationOneLocation
        locationOneName
        locationOneOpeningOne
        locationOneOpeningTwo
        locationOneType
        locationTwoDetails
        locationTwoImage {
          id
          sourceUrl(size: LARGE)
        }
        locationTwoLocation
        locationTwoName
        locationTwoOpeningOne
        locationTwoOpeningTwoCopy
        locationTwoType
        locationThreeDetails
        locationThreeImage {
          id
          sourceUrl(size: LARGE)
        }
        locationThreeLocation
        locationThreeName
        locationThreeOpeningOne
        locationThreeOpeningTwo
        locationThreeType
      }
    }
  }
  seo : page(id: "710", idType: DATABASE_ID) {
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

export default GET_CONTACT;