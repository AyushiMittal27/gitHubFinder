import React from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import './App.css';
import Alert from './components/layout/Alert'
import About from './components/pages/About';
import User from './components/users/User';
import GitHubState from './context/github/GitHubState' ;
import AlertState from './context/alert/AlertState' ;
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

//import axios from 'axios'

 const App=()=> {
 
 

/* const fetchUsers =async ()=>{
  setLoading(true)
   try{
      const res = await axios.get(`https://api.github.com/users?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_SECRET_ID}`)
      setLoading(false)
      setUsers(res.data)
  }catch(err){
      console.log(err)
  }    
}

useEffect(()=> {fetchUsers()
 // eslint-disable-next-line
}, [])
*/

    return (
      <GitHubState>
        <AlertState>  
      <Router>
        <NavBar icon='fa fa-github' title='GitHub Finder'/>
        <div className="container">     
           <Alert/>
            <Switch>
            <Route  path='/' exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path='/user/:login' component={User} />
            <route component={NotFound} />
          </Switch>
        </div>
        </Router>
        </AlertState>
        </GitHubState>
    )

  }

export default App;
