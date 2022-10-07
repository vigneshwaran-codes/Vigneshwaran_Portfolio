import './css/App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

function App () {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/portfolio'>
          <Work />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
