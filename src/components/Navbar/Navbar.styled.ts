import styled from "styled-components";
import theme from "../../themes/default";

export const Navbar = styled.nav`
    color: white;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    background-color: ${theme.colors.background.dark};
`;

export const Logo = styled.img`
    width: 100px;
`;

export const Button = styled.button`
    background-color: ${theme.colors.background.light};
    border: none;
    border-radius: 4px;
    color: ${theme.fonts.color.plain};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;

    font-family: "Inter";
    font-weight: ${theme.fonts.fontWeight.bold};
    font-size: 12px;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 90%;
    }
`;
