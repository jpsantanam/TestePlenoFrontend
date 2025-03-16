import styled from "styled-components";
import theme from "../../themes/default";

export const Header = styled.div`
    color: white;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    background-color: ${theme.colors.background.dark};

    font-family: "Inter";
`;

export const Title = styled.p`
    font-weight: ${theme.fonts.fontWeight.bold};
    font-size: 18px;
    color: ${theme.fonts.color.plain};
    line-height: 28px;
`;

export const Headline = styled.p`
    font-family: "Inter";
    font-weight: ${theme.fonts.fontWeight.regular};
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
