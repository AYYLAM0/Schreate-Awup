import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Calendar from './components/calendar/calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signup';
import Form from './pages/form'
import Jobs from './pages/jobs'
import NewTransaction from './pages/mainPage';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/newform" component={Form} />
        <Route exact={true} path="/mainpage" component={NewTransaction} />
        <Route exact={true} path="/calendar" component={Calendar} />
        <Route exact={true} path="/currentjobs" component={Jobs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
