import Header from './components/header/header';
import Footer from './components/footer/footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signup';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import {MyForm} from './pages/form'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/form" component={MyForm} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
