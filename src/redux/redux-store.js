import {combineReducers, createStore} from 'redux'
import dialogsReducer from './dialogs-reducer'
import wallPageReducer from './wallpage-reducer'
import headerReducer from './header-reducer'
import optionNavMenuReducer from './option-nav-menu-reducer'
import mainBackgroundReducer from './main-background-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
	dialogs: dialogsReducer,
	wallPage: wallPageReducer,
	header: headerReducer,
	optionsNavMenu: optionNavMenuReducer,
	mainBackground: mainBackgroundReducer,
	usersPage: usersReducer,
})

let store = createStore(reducers)

window.store = store

export default store
