import React from "react";
import * as Styled from "./Header.styled.ts";

export default function Header() {
    return (
        <Styled.Header>
            <Styled.Content>
                <Styled.Title>Olá, Teste Capys</Styled.Title>
                <Styled.Headline>Desenvolvedor Front-End</Styled.Headline>
            </Styled.Content>
        </Styled.Header>
    );
}
