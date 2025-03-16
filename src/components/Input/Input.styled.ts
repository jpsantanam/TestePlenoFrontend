import styled from "styled-components";
import theme from "../../themes/default";

export const Container = styled.div`
    width: 100%;
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: ${theme.fonts.color.plain};

    font-family: Inter;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${theme.colors.grey.plain};
    border-radius: 4px;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${theme.fonts.color.plain};
    padding: 0 12px;

    &:focus {
        border-radius: 4px;
        border-style: solid;
        border-color: ${theme.fonts.color.plain};
        border-width: 1.22px;
    }
`;

export const Label = styled.label`
    font-weight: ${theme.fonts.fontWeight.regular};
    font-size: 12.18px;
    line-height: 0px;
    letter-spacing: 0%;
    color: ${theme.fonts.color.plain};
`;

export const Button = styled.span`
    border: none;
    background-color: transparent;
    color: ${theme.fonts.color.plain};
    position: absolute;
    right: 12px;
`;
