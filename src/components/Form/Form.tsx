import React from 'react';
import * as Styled from './Form.ts';
import Button from '../Button/Button.tsx';
import Input from '../Input/Input.tsx';

export default function Form() {
    return (
        <Styled.Form>
            <Styled.Title>Login</Styled.Title>
            <Input></Input>
            <Input></Input>
            <Button></Button>
            <Styled.Text>Ainda não tem conta?</Styled.Text>
            <Button></Button>
        </Styled.Form>
    );
}
