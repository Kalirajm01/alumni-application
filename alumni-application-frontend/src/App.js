import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Connect from "./pages/Connect";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

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
