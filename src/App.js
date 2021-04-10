import styled from "styled-components";
import { HeaderContainer, HomeContainer } from "./containers";


const App = () => {
  return (
    <Application>
      <HeaderContainer />
      <HomeContainer />
    </Application>
  );
}

export default App;

const Application = styled.div`
    background: linear-gradient(to right, #fff 50%, #ff0 50%);
    /* overscroll-behavior: contain; */
    height: 100vh;
    overflow: hidden;
    /* will-change: overflow; */
`;