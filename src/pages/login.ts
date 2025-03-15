import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #01121F;
`;

export const Logo = styled.img`
    width: 217px;
`;

export const Form = styled.form`
    width: 369px;
    top: 133px;
    left: 535px;
    border-radius: 4px;
    padding-top: 42px;
    padding-right: 22px;
    padding-bottom: 42px;
    padding-left: 22px;
    gap: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #021a30;
`;

export const Title = styled.h1`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    line-height: 28px;
`;

export const Text = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0%;
    color: #868E96;
`;