import styled from "./style.module.scss";
import logoSvg from "../../images/logo.svg"
import Image from 'next/image'
import { SignInButton } from "../SignInButton";
import  Link  from "next/link"
import { useRouter } from "next/router"

export function Header() {
  const { asPath } = useRouter();
  return(
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
       <Image
        src={logoSvg}
         alt="Logo ignews"
         width={100}
         height={50} 
        />
        <nav>
          <Link href="/" >
            <a className={styled.active}>Home</a>
          </Link >
          <Link  href="/posts" prefetch>
            <a>Posts</a>
          </Link> 
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}