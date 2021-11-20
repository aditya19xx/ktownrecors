import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Navigation/Navigation";
import NewReleases from "./Pages/NewReleases/NewReleases";
import OurArtists from "./Pages/Our Artists/OurArtists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/newreleases">
            <NewReleases></NewReleases>
          </Route>
          <Route path="/artists">
            <OurArtists></OurArtists>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
