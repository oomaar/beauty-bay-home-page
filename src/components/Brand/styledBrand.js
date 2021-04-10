import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div` cursor: pointer; `;

export const SearchContainer = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.2);
    flex: 1;
    margin: 0 10px;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.5s ease;

    :hover {
        border: 2px solid rgb(136, 153, 166);
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.div`
    margin: 0 10px;
    cursor: pointer;
`;