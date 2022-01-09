import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {setUserData} from '../../redux/auth-reducer'
import * as axios from 'axios'

class HeaderContainer extends React.Component {
	componentDidMount() {
		const url =
			`https://social-network.samuraijs.com/api/1.0/auth/me`
		axios.get(url, {withCredentials: true})
		.then(response => {
			const {id, login, email} = response.data.data
			if (response.data.resultCode === 0) {
				this.props.setUserData({id,	login, email})
			}
		})
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = state => {
	const {id, login, email, isAuth} = state.auth.data
	const {alt, mainLogo, path, loginText, sayHelloText, nameSite} = state.auth.header

	return {id, login, email, isAuth, alt, mainLogo, path, loginText, sayHelloText, nameSite}
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
