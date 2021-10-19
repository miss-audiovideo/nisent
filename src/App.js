// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route ,Switch  } from 'react-router-dom';

import CompOne from './Components/CompOne';
import CompTwo from './Components/CompTwo';
import CompThree from './Components/CompThree';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Trendius from './Components/Trendius';
import Career from './Components/Career';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
      <Switch>
          <Route exact path="/">
            <CompOne/>
            <CompTwo/>
            <CompThree/>

          </Route>
          <Route exact path="/products">
              <Products/>
          </Route>
          <Route exact path="/trendius">
            <Trendius/>
          </Route>
          <Route exact path="/company/career">
            <Career/>
          </Route>
     
        

      </Switch>
    </Router>
      
    </>
  );
}

export default App;
