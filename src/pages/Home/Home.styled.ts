import styled from "styled-components";

export const Container = styled.div`
    background-color: #021a30;
    height: 100vh;
    witdh: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    line-height: 28px;
`;

export const Text = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 23px;
    padding-top: 23px;

    @media (max-width: 768px) {
        width: 90%;
    }
`;
