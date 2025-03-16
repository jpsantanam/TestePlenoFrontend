import React from "react";
import * as Styled from "./Navbar.styled.ts";

type NavbarProps = {
    onClick: () => void;
};

export default function Navbar(props: NavbarProps) {
    return (
        <Styled.Navbar>
            <Styled.Content>
                <Styled.Logo src="../../public/logo.png"></Styled.Logo>
                <Styled.Button onClick={props.onClick}>Sair</Styled.Button>
            </Styled.Content>
        </Styled.Navbar>
    );
}
