import { Header } from "./models/header";

import "normalize.css";
import "./shared/styles/fonts.scss";
import "./App.scss";
import { Main } from "./models/main";
import { Footer } from "./models/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {/*
        Components
        */}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
