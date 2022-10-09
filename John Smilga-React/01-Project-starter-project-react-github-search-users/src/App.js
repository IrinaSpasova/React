import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact={true}>
          {/* exact={true} removes home from login 05:45 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21054738?start=45#overview*/}
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*" >
          <Error />
        </Route>
        </Switch>
        
      </Router>
{/* Switch 1:45 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21054760#overview */}
    </div>
  );
}

export default App;
