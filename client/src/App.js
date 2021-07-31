import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signup';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import form from './pages/form'
import MainPage from './pages/mainPage';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/newform" component={form} />
        <Route exact={true} path="/mainpage" component={MainPage} />


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
