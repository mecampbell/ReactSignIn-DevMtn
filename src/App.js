import './App.css';
import styled from "styled-components";
import RootComponent from "./components/RootComponent"

const Container = styled.div`
  display: block;
  height: 100%;
`;

function App() {
  return (
    <div>
    <Container>
      <RootComponent />
    </Container>
    </div>
  );
}

export default App;
