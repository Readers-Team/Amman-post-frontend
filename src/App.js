import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import News from "./components/News"
import Political from "./components/Political"
import Art from "./components/Art"
import Education from "./components/Education"
import Business from "./components/Business"
import Sports from "./components/Sports"
import Crime from "./components/Crime"
import Health from "./components/Health"
import Celebrity from "./components/Celebrity"
import Weather from "./components/Weather"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
         
              <Route  exact path="/">
               <News  />
              </Route>
              <Route  exact path="/political">
               <Political/>
              </Route>
              <Route  exact path="/art">
               <Art/>
              </Route>
              <Route  exact path="/education">
               <Education/>
              </Route>
              <Route  exact path="/sports">
               <Sports/>
              </Route>  
              <Route  exact path="/business">
               <Business/>
              </Route>
              <Route  exact path="/crime">
               <Crime/>
              </Route>
              <Route  exact path="/health">
               <Health/>
              </Route>
              <Route  exact path="/celebrity">
               <Celebrity/>
              </Route>
              <Route  exact path="/weather">
               <Weather/>
              </Route>
              <Route  exact path="/aboutus">
               <Weather/>
              </Route>
            
        </div>
      </Router>
    </div>
  );
}

export default App;
