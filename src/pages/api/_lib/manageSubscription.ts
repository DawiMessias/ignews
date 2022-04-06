import { fauna } from "../../../services/fauna"
import { query as q } from "faunadb"
import { stripe } from "../../../services/stripe"

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
) {
  //Buscar o usuário no banco do fauna com id custumerId
  //Salvar os dados da subscription no Fauna
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index("user_by_stripe_customer_id"),
          customerId
        )
      )
    )
  )
  const subscription = await stripe.subscriptions.retrieve(subscriptionId) 

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id
  }

  await fauna.query(
    q.Create(
      q.Collection("subscriptions"),
      { data: subscriptionData }
    )
  )
}