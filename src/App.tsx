import { Services } from "./models/sections/services";
import { General } from "./models/sections/general";
import { Catalog } from "./models/sections/catalog";
import { Anketa } from "./models/sections/anketa";
import { Price } from "./models/sections/prices";
import { Works } from "./models/sections/works";
import { Footer } from "./models/footer";
import { Header } from "./models/header";
import { Main } from "./models/main";

import "normalize.css";
import "./shared/styles/fonts.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <General />
        <Catalog />
        <Price />
        <Works />
        <Services />
        <Anketa />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
