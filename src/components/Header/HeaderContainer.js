import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {setAuth} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.setAuth()
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

export default connect(mapStateToProps, {setAuth})(HeaderContainer)
