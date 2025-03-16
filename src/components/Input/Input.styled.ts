import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #f8f9fa;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #343b41;
    border-radius: 4px;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: #f8f9fa;
    padding: 0 12px;

    &:focus {
        border-radius: 4px;
        border-style: solid;
        border-color: #f8f9fa;
        border-width: 1.22px;
    }
`;

export const Label = styled.label`
    font-family: Inter;
    font-weight: 400;
    font-size: 12.18px;
    line-height: 0px;
    letter-spacing: 0%;
    color: #f8f9fa;
`;

export const Button = styled.span`
    border: none;
    background-color: transparent;
    color: #f8f9fa;
    position: absolute;
    right: 12px;
`;
