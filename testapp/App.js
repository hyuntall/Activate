import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import Start from './Start'
import Category from './Category'
import React from 'react'


//클래스 간의 화면 전환을 위해 네비게이터 선언
//앱이 시작하면 Start 클래스로 이동함.
const MainNavigator = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    Start: {screen: Start},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
    Main: {screen: Main},
    Category: {screen: Category}
  },
  {
    initialRouteName: 'Start'
  }
);
const App = createAppContainer(MainNavigator);
export default App