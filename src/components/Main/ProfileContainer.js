import React from 'react'
import Profile from './WallArea/Profile/Profile'
import {connect} from 'react-redux'
import {
	addPost,
	setProfile,
	updateNewPost,
} from '../../redux/wallpage-reducer'
import {Redirect, withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
	componentDidMount() {
		// const userId = this.props.match.params.userId || 2
		const userId = this.props.match.params.userId || this.props.auth
		this.props.setProfile(userId)
	}

	render() {
		if (!this.props.auth) return <Redirect to={'/login'}/>
		return (
			<Profile {...this.props}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		wallPage: state.wallPage,
		profile: state.wallPage.profile,
		authId: state.auth.data.id,
		auth: state.auth.data.isAuth,
	}
}

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	addPost,
	updateNewPost,
	setProfile,
})(WithUrlProfileContainer)
