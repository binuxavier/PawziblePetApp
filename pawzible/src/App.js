import "./App.css";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import FindPetHome from "./components/findpet/FindPetHome";
import PetTrainer from "./components/pettrainer/PetTrainer";
import Health from "./components/health/Health";
import Product from "./components/productservices/product/Product";
import Services from "./components/productservices/services/Services";
import FindBreeders from "./components/findbreeders/FindBreeders";
import home from "./components/homepage/home";

var history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/findpet" component={FindPetHome} />
            <Route path="/pettrainer" component={PetTrainer} />
            <Route path="/health" component={Health} />
            <Route path="/product" component={Product} />
            <Route path="/services" component={Services} />
            <Route path="/findbreeders" component={FindBreeders} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
