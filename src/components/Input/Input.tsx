import React, { HTMLInputTypeAttribute, useState } from "react";
import * as Styled from "./Input.ts";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

type InputProps = {
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
};

export default function Input(props: InputProps) {
    const [type, setType] = useState(props.type);
    const [icon, setIcon] = useState(eyeOff);

    const handleIcon = () => {
        if (icon === eyeOff) {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    return (
        <Styled.Container>
            <Styled.Label>{props.label}</Styled.Label>
            <Styled.InputContainer>
                <Styled.Input
                    type={type}
                    placeholder={props.label}
                ></Styled.Input>
                {props.type === "password" && (
                    <Styled.Button onClick={handleIcon}>
                        <Icon icon={icon} color="white"></Icon>
                    </Styled.Button>
                )}
            </Styled.InputContainer>
        </Styled.Container>
    );
}
