import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import GetData from "./GetData";

//GoogleMap 호출할 때 props로 GetData.js의 리턴값을 넣어줬음
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
          <GoogleApiWrapper apiData = {GetData()}/>
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
