import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckOutPayment = () => {
  const [error, setError] = useState("");
  const [clintSecret, setClintSecret] = useState();
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const totalPrice = 50;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClintSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("payment error", error);
    } else {
      // console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clintSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
      console.log(confirmError);
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);

        if (res?.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for Payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-accent mt-10 mx-auto items-center flex justify-center"
            type="submit"
            disabled={!stripe || !clintSecret}
          >
            Pay
          </button>
          <p className="mt-10 text-red-800">{error}</p>
          {transactionId && (
            <p className="text-blue-800">{`your transactionId is ${transactionId}`}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckOutPayment;
