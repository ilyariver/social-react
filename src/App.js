import './App.css';
import 'normalize.css';
import { Route } from 'react-router-dom';
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
          <Route path='/profile' render={() => <Profile
            wallPage={props.state.wallPage}
            addPost={props.addPost}
            newPostText={props.state.wallPage}
            updatePostInput={props.updatePostInput}/>
             } />
          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.dialogs}
            pathDialog={props.state.dialogPagePath}
            updateDialogInput={props.updateDialogInput}
            addNewDialogMessage={props.addNewDialogMessage} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>
  );
}

export default App;
