import styled from "styled-components";

export const Header = styled.div`
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    background-color: #01121f;
`;

export const Title = styled.p`
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    line-height: 28px;
`;

export const Headline = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding-right: 100px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
`;
