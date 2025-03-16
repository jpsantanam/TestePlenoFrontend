import styled from "styled-components";
import theme from "../../themes/default.ts"


export const Container = styled.div`
    background-color: ${theme.colors.background.light};
    height: 100vh;
    witdh: 100%;
    display: flex;
    flex-direction: column;
    
    font-family: ${theme.fonts.fontFamily};
`;

export const Title = styled.p`
    font-weight: ${theme.fonts.fontWeight.bold};
    font-size: ${theme.fonts.fontSize.large};
    color: ${theme.fonts.color.plain};
    line-height: ${theme.fonts.lineHeight.large};
`;

export const Text = styled.p`
    font-weight: ${theme.fonts.fontWeight.regular};
    font-size: ${theme.fonts.fontSize.medium};
    line-height: ${theme.fonts.lineHeight.medium};
    color: ${theme.fonts.color.white};
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
