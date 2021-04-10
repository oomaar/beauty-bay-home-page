import styled from "styled-components/macro";

export const Container = styled.nav`
    width: 75%;
    display: flex;
    margin: auto;
    justify-content: space-between;
`;

export const LinkContainer = styled.div` padding: 0 10px; `;

export const NavLink = styled.p`
    cursor: pointer;
    font-size: 1.2rem;

    :hover {
        text-decoration: underline;
    }
`;