import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Main/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';

function App() {
  return (
    <Router>
      <div className="App-wrap">
        <Header />
        <Nav />
        <div className="App-wrap-content">
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
        </div>
      </div>
    </Router>
  );
}

export default App;
