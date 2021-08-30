import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import Popup from "./Popup.js"

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
          <GoogleApiWrapper/>
          </div>
        </Route>

        <Route path="/Environment" exact>
        <div>
          <Popup/>
        </div>
        </Route>
        
        </Switch>
        </div>
    </Router>
    
    
  );
}

export default App;
