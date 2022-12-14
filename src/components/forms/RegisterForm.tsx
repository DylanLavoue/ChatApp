import React from "react";
import { InputContainer, InputLabel, InputField , Button} from "../../utils/styles";
import styles from '../index.module.scss';



export const RegisterForm = () => {
    return <form className={styles.form}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id="email" />
        </InputContainer>
        <section className= {styles.nameField}>
        <InputContainer>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField type="text" id="firstName" />
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type="email" id="lastName" />
        </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password" />
        </InputContainer>
        <Button className={styles.button}>Create my Account</Button>
        
    </form>
}