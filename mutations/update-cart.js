import { gql } from "@apollo/client";

const UPDATE_CART = gql`
  mutation ($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
      clientMutationId
    }
  }
`;

export default UPDATE_CART;