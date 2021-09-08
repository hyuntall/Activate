import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom';
import './index.css';
import Environment from "./Environment";
import Privacy from "./Privacy";

//GoogleMap 호출할 때 props로 GetData.js의 리턴값을 넣어줬음
function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Switch>
        
        <Route path="/" exact>
        <div>
          <img id="logo" src="/img/banner1.png" width="1400" height="700"/>
          <img id="logo" src="/img/banner2.png" width="1400" height="700"/>
        </div>
          <div> 
            <img id="logo" src="/img/다운로드배너.png" width="1700" height="360"/>
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
          <Environment/>
        </div>
        </Route>
        
        <Route path="/Contact" exact>
          <div>
            <br></br>
          <p id ="spanstyle">♣ 행복한 동네 개발자 ♣</p>
          <img id="logo" src="/img/our.png" width="800" height="800"/>
          </div>
        </Route>
        </Switch>
        <Privacy path="/Privacy" exact>
          <div>
            <Privacy/>
          </div>
        </Privacy>
        </div>
    </Router>
    
    
  );
}

export default App;
