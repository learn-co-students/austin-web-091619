import React from 'react';

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  // For existing sessions it will bypass the need to authenticate again
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('ERROR from API', error))
  }

  handleLogin = (data) => {
    this.setState({ 
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path='/login' render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
            )} />
            <Route exact path='/signup' render={props => (
              <SignUp {...props} handleLogin={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
            )} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
