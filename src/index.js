import './index.css'
import reportWebVitals from './reportWebVitals'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'
import state, {addNewDialogMessage, addPost, subscribe, updateDialogInput, updatePostInput} from './redux/state'

const renderDom = () => {
	ReactDOM.render(
		<Router>
			<React.StrictMode>
				<App
					state={state}
					addPost={addPost}
					updatePostInput={updatePostInput}
					addNewDialogMessage={addNewDialogMessage}
					updateDialogInput={updateDialogInput} />
			</React.StrictMode>
		</Router>,
		document.getElementById('root')
	)
}

renderDom(state)
subscribe(renderDom)

reportWebVitals()
