import styled from "./styled.module.scss"

interface SubscribeButton {
    priceId: string;
}

export function SubscriptButton({priceId}: SubscribeButton) {
    return (
        <button 
            type="button"
            className={styled.subscribeButton}
        >
            Subscribe now
        </button>
    )
}