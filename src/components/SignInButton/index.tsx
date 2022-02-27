import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styled from "./style.module.scss"

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button 
            className={styled.signInButton}
            type="button"
        >
            <FaGithub color="#04d361"/>
            David
            <FiX color="#737380" className={styled.closeIcon}/>
        </button>
    ) : (
        <button 
            className={styled.signInButton}
            type="button"
        >
            <FaGithub color="#eba417"/>
            Sign With Github
        </button>
    )
}