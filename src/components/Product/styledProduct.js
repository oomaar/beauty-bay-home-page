import styled from "styled-components/macro";

export const Container = styled.div`
    margin-bottom: 60px;
`;

export const Image = styled.img`
    height: 650px;

    @media (max-width: 1280px) {
        height: 450px;
    }

    @media (max-width: 800px) {
        height: 300px;
    }

    @media (max-width: 500px) {
        height: 170px;
    }
`;

export const Title = styled.h3`
    font-size: 30px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    margin: 0 0 10px 0;
    
    @media (max-width: 800px) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.p`
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
    margin: 10px 0 0 0;
    
    @media (max-width: 800px) {
        font-size: 17px;
    }
`;

