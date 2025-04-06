import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import CardList from "./Components/CardList";
import { varieties } from "./utils/data";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(varieties);

  //Filter By Category
  const filterByCategory = (varaity) => {
    if (varaity === "الكل") {
      setItems(items);
    } else {
      const filteredItems = varieties.filter((item) => item.category === varaity);
      setItems(filteredItems);
    }
  };
  return (
    <>
      <div className="color-body font">
        <NavBar />
        <Container>
          <Header />
          <Category filtering={filterByCategory} />
          <CardList itemsData={items} />
        </Container>
      </div>
    </>
  );
}

export default App;
