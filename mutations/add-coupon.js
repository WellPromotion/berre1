import {gql} from "@apollo/client";

const ADD_COUPON = gql`

mutation ADD_COUPON( $input: ApplyCouponInput! ) {
    applyCoupon(input: $input){
    clientMutationId
    cart {
        appliedCoupons {
          code
          description
          discountAmount
        }
    }
  }
}
`;

export default ADD_COUPON;