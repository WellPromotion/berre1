import { gql } from "@apollo/client";

// const CONTACT_MUTATION = gql`
// mutation CONTACT_MUTATION( $input: SubmitFormInput! ) {
//   submitForm(input: $input) {
//     errors {
//       fieldId
//       message
//       slug
//     }
//     clientMutationId
//     message
//     success
//   }
// }
// `;

// const CONTACT_MUTATION = gql`
// mutation SEND_EMAIL {
//   sendEmail(
//   input: {
//   to: “info@berre.ba”
//   from: “info@berre.ba”
//   subject: “test email”
//   body: “test email”
//   clientMutationId: “test”
//   }
//   ) {
//   origin
//   sent
//   message
//   }
//   }
// `;

const CONTACT_MUTATION = gql`
mutation CONTACT_MUTATION( $input: SubmitFormInput! ) {
  submitForm(input: $input) {
    errors {
      fieldId
      message
      slug
    }
    clientMutationId
    message
    success
  }
}
`;

export default CONTACT_MUTATION;