import "./App.css";
import AxiosDataFetch from "./components/AxiosDataFetch";
import HttpDataFetch from "./components/HttpDataFetch";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/axios-data-fetch">
            <AxiosDataFetch />
          </Route>
          <Route path="/http-data-fetch">
            <HttpDataFetch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
