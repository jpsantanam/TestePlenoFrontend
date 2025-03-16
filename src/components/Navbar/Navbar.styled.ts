import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
    background-color: #01121f;
`;

export const Logo = styled.img`
    width: 100px;
`;

export const Button = styled.button`
    background-color: #021A30;
    border: none;
    border-radius: 4px;
    color: #F8F9FA;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;

    font-family: "Inter";
    font-weight: 700;
    font-size: 12px;

    &:hover {
        background-color: #5d1300;
    }
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
