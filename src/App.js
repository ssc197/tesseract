import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar  from "./layouts/navbar";
import  Footer from "./layouts/footer";

import Developer from "./pages/developers"

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="route-container">
        <Switch >
          <Route exact path="/" component={Developer} />
        </Switch>
        </div>
   
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
