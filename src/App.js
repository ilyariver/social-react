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
          <Route path='/profile' render={() => <Profile
            wallPage={props.state.wallPage}
            dispatch={props.dispatch}
            newPostText={props.state.wallPage}
            mainBackground={props.state.mainBackground}
            profile={props.state.profile}/>
             } />
          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.dialogs}
            pathDialog={props.state.optionsNavMenu}
            dispatch={props.dispatch} />}/>
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
}

export default App;
