import Head from "next/head"
import Image from 'next/image'
import { SubscriptButton } from "../components/SubscripeButton"
import avatarSvg from "../images/avatar.svg"
import styled from "./home.module.scss"
export default function Home() {
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
            <span>for $9.90 month</span>
          </p>
          <SubscriptButton />
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
