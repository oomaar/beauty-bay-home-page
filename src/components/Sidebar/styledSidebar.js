import styled from "styled-components/macro";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    transition: height 1s ease-in;
    font-family: 'Oswald', sans-serif;
`;

export const SubContainer = styled.div`
    width: 40vw;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    overflow-y: scroll;

    scrollbar-width: none; /* Hides Scroll bar for IE and Edge */
    -ms-overflow-style: none; /* Hides Scroll bar for FireFox */
    ::-webkit-scrollbar {
        /* Hides Scroll bar for Chrome, Safari and Opera */
        display: none;
    }

    .cross__icon {
        cursor: pointer;
        border-radius: 100%;

        :hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    @media (max-width: 1280px) {
        width: 100vw;
    }
`;

export const LinksContainer = styled.div`
    margin: 60px 0;
    font-size: 1.3rem;
    
`;

export const SideLink = styled.p`
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;

export const SignupContainer = styled.div``;

export const SignupTitle = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3rem;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    /* align-items: center; */
`;

export const SignupInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    flex: 1;
`;

export const SignupButton = styled.button`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
    margin: 0 0 0 15px;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Icon = styled.div`
    cursor: pointer;
`;