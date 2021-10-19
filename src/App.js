import './App.css';
import 'normalize.css';
import {Redirect, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Main/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';

function App(props) {
  return (
      <div className="App-wrap">
        <Header header={props.state.header} />
        <Nav optionsNavMenu={props.state.optionsNavMenu} />
        <div className="App-wrap-content">
          <Redirect exact from='/' to='/profile' />
          <Route path='/profile' render={() => <Profile store={props.store}/>} />
          <Route path='/dialogs' render={() => <Dialogs store={props.store}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
}

export default App;
