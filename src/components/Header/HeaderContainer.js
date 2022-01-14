import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {setUserData} from '../../redux/auth-reducer'
import {setApi} from '../../api/api'

class HeaderContainer extends React.Component {
	componentDidMount() {
		setApi.authMe().then(data => {
			const {id, login, email} = data.data
			if (data.resultCode === 0) {
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
