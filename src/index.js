import './index.css'
import reportWebVitals from './reportWebVitals'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import { Provider } from 'react-redux'


const renderDom = () => {
	ReactDOM.render(
		<Router>
			<React.StrictMode>
				<Provider store={store}>
					<App />
				</Provider>
			</React.StrictMode>
		</Router>,
		document.getElementById('root')
	)
}

renderDom()

store.subscribe(() => {
	renderDom()
})

reportWebVitals()
