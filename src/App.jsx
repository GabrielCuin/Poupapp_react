import logo from "./assets/logo.svg";
import { Container } from "./components/Container";

function App() {
  return (
    <Container>
      <aside>
        <img src={logo} alt="Poupapp logo" />
        <p>Poupapp</p>
      </aside>
    </Container>
  );
}

export default App;
