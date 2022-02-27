import styled from "./style.module.scss";
import logoSvg from "../../images/logo.svg"
import Image from 'next/image'
import { SignInButton } from "../SignInButton";

export function Header() {
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
          <a className={styled.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}