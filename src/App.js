import React from 'react'
import { 
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom'
import './App.scss'

import Navigation from './components/System/Navigation/Navigation'
import LandingPage from './components/System/Landing/Landing'
import SignUpPage from './components/User/SignUp/SignUp'
import SignInPage from './components/User/SignIn/SignIn'
import PasswordForgetPage from './components/User/PasswordForget/PasswordForget'
import HomePage from './components/System/Home/Home'
import AccountPage from './components/User/Account/Account'
import AdminPage from './components/User/Admin/Admin'

import * as ROUTES from './constants/routes'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
    </div>
  )
}

export default App
