import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api"
import { getStripeJs } from "../../services/stripe-js";
import styled from "./styled.module.scss"
interface SubscribeButton {
    priceId: string;
}

export function SubscriptButton({ priceId }: SubscribeButton) {
    const {data: session } = useSession()

    async function handleSubscribe() {
        if(!session) {
            signIn("github")
            return;
        }

        try {
            const response = await api.post("/subscribe")
            const { sessionId } = response.data
            const stripe = await getStripeJs()   
            
            await stripe.redirectToCheckout({sessionId})
        } catch (err) {
            alert(err.message)
        }

        // criação da checkout session 
    }
    return (
        <button 
            type="button"
            className={styled.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}