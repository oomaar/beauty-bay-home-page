import styled from "styled-components";
import { HeaderContainer } from "./containers";


const App = () => {
  return (
    <Application>
      <HeaderContainer />
    </Application>
  );
}

export default App;

const Application = styled.div`
    background: linear-gradient(to right, #fff 50%, #ff0 50%);
`;