import { gql } from "@apollo/client";

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