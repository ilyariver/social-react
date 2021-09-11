import './App.css';
import 'normalize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Main/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';

function App(props) {

  return (
    <Router>
      <div className="App-wrap">
        <Header />
        <Nav />
        <div className="App-wrap-content">
            <Route path='/profile' render={() => <Profile state={props.state.wallPage}/>} />
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogs}/>} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
