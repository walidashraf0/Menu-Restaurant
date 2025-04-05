import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="color-body font">
        <NavBar />
        <Container>
          <Header />
        </Container>
      </div>
    </>
  );
}

export default App;
