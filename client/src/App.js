import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Auth/Home'; 
import Register from './components/Auth/register';
import Login from './components/Auth/login'; 
import footer from './components/Layout/footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={Home} /> {/* Home page */}
            <Route path="/register" component={Register} /> {/* Register page */}
            <Route path="/login" component={Login} /> {/* Login page */}
            {/* Add more routes as needed */}
          </Switch>
        </main>
      
      </div>
    </Router>
  );
};

export default App;
