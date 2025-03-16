import React from "react";
import * as Styled from "./Button.styled.ts";

type ButtonProps = {
    isDisabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
    return (
        <Styled.Button
            onClick={props.onClick}
            isDisabled={props.isDisabled}
            disabled={props.isDisabled}
        >
            {props.children}
        </Styled.Button>
    );
}
