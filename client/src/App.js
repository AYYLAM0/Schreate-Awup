import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import Signup from './pages/signup';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Form from './pages/form'
import MainPage from './pages/mainPage';
import Jobs from './pages/jobs'
import ChartGraph from './components/chart/chart';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/newform" component={Form} />
        <Route exact={true} path="/mainpage" component={MainPage} />
        <Route exact={true} path="/currentjobs" component={Jobs} />
        <Route exact={true} path="/chart" component={ChartGraph} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
