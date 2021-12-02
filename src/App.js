import './App.css'
import 'normalize.css'
import {Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Main/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Users from './components/Users/Users'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	return (
		<div className="App-wrap">
			<Header/>
			<Nav/>
			<div className="App-wrap-content">
				<Route path="/profile" render={() => <Profile/>}/>
				<Route path="/dialogs" render={() => <Dialogs/>}/>
				<Route path="/news" render={() => <News/>}/>
				<Route path="/music" render={() => <Music/>}/>
				<Route path="/users" render={() => <Users/>}/>
			</div>
		</div>
	)
}

export default App
