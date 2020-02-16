import React from "react";
import Header from "./layout/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddVideo from "./components/AddVideo";
import NotFound from "./pages/NotFound";
import Test from "./components/test/Test";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Video Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/video/add" component={AddVideo} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              {/* Not Found Route */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
