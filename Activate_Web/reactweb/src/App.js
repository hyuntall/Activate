import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import Popup from "./Popup.js"


import './index.css';

//GoogleMap 호출할 때 props로 GetData.js의 리턴값을 넣어줬음
function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Switch>
        
        <Route path="/" exact>
          <div> 
            <p id = "pstyle">다운로드 하러가기 ↓</p>
            <img id="logo" src="/img/다운로드배너.png" width="1750" height="360"/>
          </div>
          <div>
            <p></p>
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
