import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const stripePromise = loadStripe("pk_test_51RK23tJiTAK6oe07vw1C8L7nBHNhRG6JWwcbDfBh92ED5jpJksOGdF0dmS0as5ocInvtrMUB7UG686NS2tUvPCkB00ITDP1l0z");

const CheckoutForm = ({ amount, bookingDetails }) => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .post("https://backend-book-my-stay-production.up.railway.app/api/payment", { amount })
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            })
            .catch((err) => {
                console.error("Error creating payment intent:", err);
                setError("An error occurred while setting up the payment.");
            });
    }, [amount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements || !clientSecret) return;

        setLoading(true);
        setPaymentStatus("");

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Customer Name",
                },
            },
        });

        if (result.error) {
            setError(result.error.message);
            setPaymentStatus("failed");
        } else if (result.paymentIntent.status === "succeeded") {
            setPaymentStatus("succeeded");
            setError("");

            // ✅ Send booking details to backend
            try {
                const res = await axios.post("https://backend-book-my-stay-production.up.railway.app/api/book", bookingDetails);
                if (res.data.message) {
                    navigate("/bookingsuccess");
                } else {
                    setError("Booking failed after payment.");
                }
            } catch (err) {
                console.error("Booking save failed:", err);
                setError("Payment succeeded, but booking failed.");
            }
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded shadow-lg bg-white">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <CardElement className="p-3 border-2 border-gray-300 rounded-lg" />
                </div>

                {error && (
                    <div className="text-red-500 text-sm mb-4 p-2 bg-red-100 rounded">
                        {error}
                    </div>
                )}

                {paymentStatus === "succeeded" && (
                    <div className="text-green-500 text-sm mb-4 p-2 bg-green-100 rounded">
                        Payment successful!
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className={`w-full py-3 px-4 font-semibold rounded-lg text-white ${
                        loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </form>
        </div>
    );
};


const StripeCheckout = ({ totalAmount, bookingDetails }) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm amount={totalAmount} bookingDetails={bookingDetails} />
    </Elements>
);
export default StripeCheckout;
