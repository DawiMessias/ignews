import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import { signIn, signOut, useSession } from "next-auth/react"
import styled from "./style.module.scss"

export function SignInButton() {
    const { data: session } = useSession();
    return session ? (
        <button 
            className={styled.signInButton}
            type="button"
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styled.closeIcon}/>
        </button>
    ) : (
        <button 
            className={styled.signInButton}
            type="button"
            onClick={() => signIn("github")}
        >
            <FaGithub color="#eba417"/>
            Sign With Github
        </button>
    )
}