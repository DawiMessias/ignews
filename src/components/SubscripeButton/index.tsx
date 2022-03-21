import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api"
import styled from "./styled.module.scss"
interface SubscribeButton {
    priceId: string;
}

export function SubscriptButton({priceId}: SubscribeButton) {
    const {data: session } = useSession()

    function handleSubscribe() {
        if(!session) {
            signIn("github")
            return;
        }

        try {
            const response = await api.post("/subscribe")
            const { sessionId } = response.data
           
            
        } catch () {

        }

        // criação da checkout session 
    }
    return (
        <button 
            type="button"
            className={styled.subscribeButton}
        >
            Subscribe now
        </button>
    )
}