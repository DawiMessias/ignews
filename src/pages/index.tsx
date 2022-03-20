import Head from "next/head"
import Image from 'next/image'
import { SubscriptButton } from "../components/SubscripeButton"
import avatarSvg from "../images/avatar.svg"
import styled from "./home.module.scss"
import { GetStaticProps } from "next"
import { stripe } from "../services/stripe"

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head >
        <title>Home ig.news</title>
      </Head>

      <main className={styled.contentContainer}>
        <section className={styled.hero}>
          <span>👏Hey, Welcome</span>
          <h1>News about the <span>React </span>world.</h1>
          <p>
            Get te acess to all posts <br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscriptButton  priceId={product.priceId}/>
        </section>  

        <Image 
          src={avatarSvg}
          alt=" girl coding avatar"
          width={521}
          height={336} 
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KXvtAJ59ZxR8QwFRsKk8nPE")
  
  const product ={
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
