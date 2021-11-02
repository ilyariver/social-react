import dialogsReducer from './dialogs-reducer'
import wallPageReducer from './wallpage-reducer'
import optionNavMenuReducer from './option-nav-menu-reducer'
import mainBackgroundReducer from './main-background-reducer'
import headerReducer from './header-reducer'

const store = {
	_state: {},
	_renderDom() {
		console.log('State was changed')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._renderDom = observer
	},
	dispatch(action) {
		debugger
		this._state.dialogs = dialogsReducer(this._state.dialogs, action)
		this._state.wallPage = wallPageReducer(this._state.wallPage, action)
		this._state.header = headerReducer(this._state.header, action)
		this._state.optionsNavMenu = optionNavMenuReducer(this._state.optionsNavMenu, action)
		this._state.mainBackground = mainBackgroundReducer(this._state.mainBackground, action)
		this._renderDom(this._state)
	}
}

export default store
window.store = store
