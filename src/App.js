import { Container } from "@mui/system";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Container sx={{ border: "1px solid black" }}>
        <Header />
      </Container>
    </div>
  );
}

export default App;
