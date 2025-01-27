import { gql } from "@apollo/client";

const CONTACT_MUTATION = gql`
mutation SEND_EMAIL($input: SendEmailInput!) {
  sendEmail(input: $input) {
    origin
    sent
    message
  }
}
`;

export default CONTACT_MUTATION;
