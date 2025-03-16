import React from "react";
import * as Styled from "./Navbar.styled.ts";

export default function Navbar() {
    return (
        <Styled.Navbar>
            <Styled.Content>
            <Styled.Logo src="../../public/logo.png"></Styled.Logo>
            <Styled.Button>Sair</Styled.Button>
            </Styled.Content>
        </Styled.Navbar>
    );
}
