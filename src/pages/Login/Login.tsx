import React from "react";
import * as Styled from "./Login.styled.ts";
import Button from "../../components/Button/index.ts";
import Input from "../../components/Input/index.ts";

export default function Login() {
    const handleLogin = () => {
        window.location.href = "/home";
    }

    return (
        <Styled.Container>
            <Styled.Logo src="../../public/logo.png"></Styled.Logo>
            <Styled.Form>
                <Styled.Title>Login</Styled.Title>
                <Input type="email" placeholder="Email" label="Email"></Input>
                <Input
                    type="password"
                    placeholder="Senha"
                    label="Senha"
                ></Input>
                <Button onClick={handleLogin}>Entrar</Button>
                <Styled.Text>Ainda não possui uma conta?</Styled.Text>
                <Button isDisabled onClick={() => {}}>
                    Cadastre-se
                </Button>
            </Styled.Form>
        </Styled.Container>
    );
}
