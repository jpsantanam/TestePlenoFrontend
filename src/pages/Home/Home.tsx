import React from "react";
import * as Styled from "./Home.styled.ts";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

export default function Home() {
    return (
        <Styled.Container>
            <Navbar />
            <Header />
            <Styled.Content>
                <Styled.Title>
                    {"Que pena! Estamos em desenvolvimento :("}
                </Styled.Title>
                <Styled.Text>
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades
                </Styled.Text>
            </Styled.Content>
        </Styled.Container>
    );
}
