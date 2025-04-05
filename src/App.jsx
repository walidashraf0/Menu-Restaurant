import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import Category from "./Components/Category";

function App() {
  return (
    <>
      <div className="color-body font">
        <NavBar />
        <Container>
          <Header />
          <Category />
        </Container>
      </div>
    </>
  );
}

export default App;
