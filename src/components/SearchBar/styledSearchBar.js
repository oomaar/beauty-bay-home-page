import styled from "styled-components/macro";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${({search}) => search ? "100vh" : "0px"};
    background-color: rgba(0, 0, 0, 0.2);
    transition: height 1s ease-in;
`;

export const SubContainer = styled.div`
    height: 40vh;
    background-color: #fff;
    display: flex;
    justify-content: center;

    @media (max-width: 1280px) {
        height: 100vh;
        justify-content: flex-start;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    width: 50%;
    padding: 40px;

    .cross__icon {
        cursor: pointer;
        border-radius: 100%;

        :hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    @media (max-width: 1280px) {
        width: 100%;
        padding: 20px;
    }
`;

export const SearchInput = styled.input`
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    flex: 1;
    margin-left: 20px;
    outline: 0;
    font-size: 1.2rem;
    color: #000;
    caret-color: #f0f;
    padding: 10px;

    ::placeholder {
        color: rgba(0, 0, 0, 0.2);
    }
`;

export const CrossBtnContainer = styled.div`
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    cursor: pointer;

    :hover {
        background-color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 1280px) {
        display: none;
    }
`;