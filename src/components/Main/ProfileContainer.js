import React from 'react'
import Profile from './WallArea/Profile/Profile'
import {connect} from 'react-redux'
import {
	addPostActionCreator,
	updateNewPostActionCreator,
	setUserProfileActionCreator
} from '../../redux/wallpage-reducer'
import {withRouter} from 'react-router-dom'
import {setApi} from '../../api/api'

class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 2
		// const userId = this.props.match.params.userId || this.props.auth
		setApi.userProfile(userId).then(data => this.props.setUserProfileActionCreator(data))
	}

	render() {
		return (
			<Profile {...this.props}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		wallPage: state.wallPage,
		profile: state.wallPage.profile,
		auth: state.auth.data.id,
	}
}

const WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	addPostActionCreator,
	updateNewPostActionCreator,
	setUserProfileActionCreator,
})(WithUrlProfileContainer)
