import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Switch>
        
        <Route path="/" exact>
          <div> 
            <img id="logo" src="/img/our.jpg" width="190" height="256"/>
          </div>
        </Route>

        <Route path ="/Safety" exact>
        <div>
          <GoogleApiWrapper />
          </div>
        </Route>

        <Route path="/Environments">
        <h1>environments</h1>
        </Route>
        
        </Switch>
        </div>
    </Router>
    
    
  );
}

export default App;
