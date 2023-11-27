import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutPayment from "./CheckOutPayment";

const stripePromise = loadStripe(import.meta.env.VITE_payment_kye);

const Payment = () => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutPayment></CheckOutPayment>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
