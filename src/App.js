import './App.css'
import 'normalize.css'
import {Route} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Main/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import NavContainer from './components/Navbar/NavContainer'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import FriendsContainer from './components/Friends/FriendsContainer'

function App() {
	return (
		<div className="App-wrap">
			<HeaderContainer/>
			<div className="container container-content">
				<NavContainer/>
				<div className="App-wrap-content">
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
					<Route path="/dialogs" render={() => <Dialogs/>}/>
					<Route path="/news" render={() => <News/>}/>
					<Route path="/music" render={() => <Music/>}/>
					<Route path="/friends" render={() => <FriendsContainer/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
				</div>
			</div>
		</div>
	)
}

export default App
