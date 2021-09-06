import GoogleApiWrapper from "./Map";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import './index.css';
import Environment from "./Environment";

//GoogleMap 호출할 때 props로 GetData.js의 리턴값을 넣어줬음
function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Switch>
        
        <Route path="/" exact>
        <div>
          <img id="logo" src="/img/banner1.png" width="1400" height="800"/>
          <img id="logo" src="/img/banner2.png" width="1400" height="800"/>
        </div>
          <div> 
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
          <div>
        <img id="divstyle" src="/img/다운로드배너.png" width="1900" height="400"/>
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
          <img id="logo" src="/img/our.png" width="2000" height="800"/>
          </div>
        </Route>

        </Switch>
        </div>
    </Router>
    
    
  );
}

export default App;
