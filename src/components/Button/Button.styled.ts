import styled, { css } from "styled-components";
import theme from "../../themes/default";

export const Button = styled.button<{ isDisabled?: boolean }>`
    width: 100%;
    height: 48px;
    border-radius: 4.06px;
    gap: 10.15px;
    border-width: 1.22px;
    border-style: solid;
    border-color: ${theme.colors.primary.plain};
    background-color: ${theme.colors.primary.plain};
    color: ${theme.fonts.color.white};
    outline: none;

    &:focus {
        border-radius: 4px;
        border-style: solid;
        border-color: ${theme.fonts.color.plain};
        border-width: 1.22px;
    }

    &:hover {
        background-color: ${theme.colors.primary.focus};
    }

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            border: none;
            background-color: ${theme.colors.grey.disabled};

            &:hover {
                background-color: ${theme.colors.grey.plain};
            }
        `}
`;
