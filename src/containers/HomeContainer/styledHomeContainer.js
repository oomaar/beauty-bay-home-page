import styled from "styled-components/macro";

export const Container = styled.div`
    margin-top: 200px;
    display: flex;
    width: 75%;
    margin: 200px auto 0;
    /* overflow: hidden; */
    height: 100%;
`;

export const LeftContainer = styled.div`
    flex: 0.5;
    /* overflow-y: auto; */
    padding: 0 0 0 20px;
    /* height: 100%; */
    overflow: scroll;
    height: 100%;
`;

export const LeftTitle = styled.h1``;

export const LeftSubContainer = styled.div``;

export const RightContainer = styled.div`
    flex: 0.5;
    /* overflow-y: auto; */
    padding: 0 0 0 20px;
    /* height: 100%; */
    overflow: scroll;
    height: 100%;
`;

export const RightTitle = styled.h1``;

export const RightSubContainer = styled.div``;
