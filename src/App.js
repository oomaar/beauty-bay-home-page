import styled from "styled-components";
import { Brand, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Brand />
      <Navbar />
    </Application>
  );
}

export default App;

const Application = styled.div``;