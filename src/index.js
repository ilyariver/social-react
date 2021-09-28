import './index.css'
import reportWebVitals from './reportWebVitals'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/state'

const renderDom = () => {
	ReactDOM.render(
		<Router>
			<React.StrictMode>
				<App
					state={store.getState()}
					dispatch={store.dispatch.bind(store)}/>
			</React.StrictMode>
		</Router>,
		document.getElementById('root')
	)
}

renderDom(store.getState())
store.subscribe(renderDom)

reportWebVitals()
