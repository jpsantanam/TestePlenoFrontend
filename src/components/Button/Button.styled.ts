import styled, { css } from "styled-components";

export const Button = styled.button<{ isDisabled?: boolean }>`
    width: 100%;
    height: 48px;
    border-radius: 4.06px;
    gap: 10.15px;
    border-width: 1.22px;
    border-style: solid;
    border-color: #8b1d07;
    background-color: #8b1d07;
    color: #ffffff;
    outline: none;

    &:focus {
        border-radius: 4px;
        border-style: solid;
        border-color: #f8f9fa;
        border-width: 1.22px;
    }

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            border: none;
            background-color: #868e96;
        `}
`;
