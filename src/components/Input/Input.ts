import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    gap: 10.15px;
    border-style: none;
    background-color: #343b41;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    
    &:focus {
        border-style: solid;
        border-color: #F8F9FA;
        border-width: 1.22px;
        }
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
