import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import dialogsReducer from './dialogs-reducer'
import wallPageReducer from './wallpage-reducer'
import authReducer from './auth-reducer'
import optionNavMenuReducer from './option-nav-menu-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
	auth: authReducer,
	dialogs: dialogsReducer,
	wallPage: wallPageReducer,
	optionsNavMenu: optionNavMenuReducer,
	usersPage: usersReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
