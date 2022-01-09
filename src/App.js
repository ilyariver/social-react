import './App.css'
import 'normalize.css'
import {Route} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Navbar/Nav'
import ProfileContainer from './components/Main/ProfileContainer'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	return (
		<div className="App-wrap">
			<HeaderContainer/>
			<div className="container container-content">
				<Nav/>
				<div className="App-wrap-content">
					<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
					<Route path="/dialogs" render={() => <Dialogs/>}/>
					<Route path="/news" render={() => <News/>}/>
					<Route path="/music" render={() => <Music/>}/>
					<Route path="/users" render={() => <UsersContainer/>}/>
				</div>
			</div>
		</div>
	)
}

export default App
