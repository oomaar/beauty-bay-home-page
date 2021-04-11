import styled from "styled-components/macro";

export const Container = styled.nav`
    width: 75%;
    display: flex;
    margin: auto;
    justify-content: space-between;

    @media (max-width: 1680px) {
        width: 85%;
    }

    @media (max-width: 1280px) {
        display: none;
    }
`;

export const LinkContainer = styled.div` padding: 0 10px; `;

export const NavLink = styled.p`
    cursor: pointer;
    font-size: 1.2rem;

    :hover {
        text-decoration: underline;
    }
`;