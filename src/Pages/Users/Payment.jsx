import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_kye);

console.log("Stripe Promise:", stripePromise);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        subtitle={"Payment for Membership "}
        title={"Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
