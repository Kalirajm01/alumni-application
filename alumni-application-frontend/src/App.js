import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Jobs from "./pages/jobs";
import Connect from "./pages/connect";
import Contact from "./pages/contact";
import Signup from "./pages/signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/Jobs" exact component={Jobs}/>
          <Route path="/connect" exact component={Connect} />
          <Route path="/contact" exact component={Contact}/>
          <Route path="/signup" exact component={Signup}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
