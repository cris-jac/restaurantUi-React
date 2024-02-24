import { Box, Grid } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom"
import { PaymentForm } from "../components/pages/payment";
import { OrderSummary } from "../components/pages/order";

const Payment = () => {
  
    // Recover state from checkout
    const { state: { apiResult, userInput } } = useLocation();
    console.log(apiResult);
    console.log(userInput);

    // stripe config
    const stripePromise = loadStripe('pk_test_51OTvKLJLFObLsyqNTKl3vrJVSXCi6dwpri7FyJ5pbJdAjD16yZK8kH5ehK6t1kn34O125TA024JugD1vDQ8OpFqZ00Erh0BvOa');
    const options = {
        // passing the client secret obtained from the server
        clientSecret: apiResult.clientSecret,
    };


    return (
    <Box padding={4} sx={{ margin: 'auto' }}>
        <Grid container spacing={2} sx={{ alignContent: 'center', justifyContent: 'center',  }} >
            <Grid item xs={12} sm={6} sx={{ justifyContent: 'center', justifyItems: 'center' }}>
                <OrderSummary/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Elements stripe={stripePromise} options={options}>
                    <PaymentForm />
                </Elements>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Payment