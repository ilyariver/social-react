import React from 'react'
import Profile from './WallArea/Profile/Profile'
import {connect} from 'react-redux'
import {
	addPostActionCreator,
	updateNewPostActionCreator,
	setUserProfileActionCreator
} from '../../redux/wallpage-reducer'
import * as axios from 'axios'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId || 2
		// const userId = this.props.match.params.userId || this.props.auth
		const url =
			`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
		axios.get(url)
		.then(response => {
			this.props.setUserProfileActionCreator(response.data)
		})
		.catch(error => {
			alert('Нет такого ниггера')
		})
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
