import styled from "styled-components/macro";

export const Container = styled.div`
    margin-top: 200px;
    display: flex;
    margin: 200px 0 0;
    height: 100%;
`;

export const LeftContainer = styled.div`
    flex: 0.5;
    padding: 0 0 400px 20px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */
    ::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }
`;

export const LeftTitle = styled.h1`
    font-size: 50px;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 35px;
    }
`;

export const LeftSubContainer = styled.div``;

export const RightContainer = styled.div`
    flex: 0.5;
    padding: 0 0 400px 20px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */
    ::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }
`;

export const RightTitle = styled.h1`
    font-size: 50px;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 35px;
    }
`;

export const RightSubContainer = styled.div``;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    padding: 15px 0;
    width: 40%;
    border: 0;
    outline: 0;
    background: #000;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
`;
