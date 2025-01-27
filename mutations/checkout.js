import { gql } from "@apollo/client";

const CHECKOUT_MUTATION = gql`
mutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    order {
      orderNumber
      customer {
        billing {
          email
        }
        id
      }
      total
      currency
      paymentMethodTitle
      id
    }
    result
    redirect
  }
}
`;

export default CHECKOUT_MUTATION;
