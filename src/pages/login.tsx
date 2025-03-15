import React from 'react';
import * as Styled from './login.ts';
import Button from '../components/Button/Button.tsx';
import Input from '../components/Input/Input.tsx';

export default function Login() {
    return (
        <Styled.Container>
            <Styled.Logo src="../../public/logo.png"></Styled.Logo>
            <Styled.Form>
                        <Styled.Title>Login</Styled.Title>
                        <Input type='email' placeholder='Email' label="Email"></Input>
                        <Input type='password' placeholder='Senha' label="Senha"></Input>
                        <Button></Button>
                        <Styled.Text>Ainda não possui uma conta?</Styled.Text>
                        <Button></Button>
                    </Styled.Form>
        </Styled.Container>
    );
}
