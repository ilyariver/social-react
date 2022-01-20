import React from 'react'
import Users from './UserList/Users'
import {connect} from 'react-redux'
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	getTotalUsersCount,
	setLoading,
	setFetching,
	setFollowUser,
	getUsers,
	followUsers
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import {setApi} from '../../api/api'


class UsersContainerComponents extends React.Component {
	componentDidMount() {
		const FIRST_PAGE = 1
		const COUNT_ON_PAGE = 20
		this.props.getUsers(FIRST_PAGE, COUNT_ON_PAGE)
		document.addEventListener('scroll', this.scrollHandler)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.scrollHandler)
	}

	scrollHandler = e => {
		const LOWER_BOUND = 500
		if (e.target.documentElement.scrollHeight -
			(e.target.documentElement.scrollTop + window.innerHeight) <
			LOWER_BOUND) {
			this.props.setFetching(true)
			this.uploadUsersParts()
			document.removeEventListener('scroll', this.scrollHandler)
		}
	}

	uploadUsersParts = () => {
		const ONE_PAGE = 1
		const addedPages = this.props.startPage + ONE_PAGE

		// this.props.getUsers(addedPages, this.props.count, 'lazy', this.scrollHandler, this.props.fetching, this.props.users)
		setApi.getUsers(addedPages, this.props.count).then(data => {
				if (this.props.fetching) {
					this.props.setCurrentPage(addedPages)
					this.props.setUsers([...this.props.users, ...data.items])
					this.props.setLoading(false)
					this.props.setFetching(false)
				}
				document.addEventListener('scroll', this.scrollHandler)
		})
	}

	render() {
		const {
			users,
			follow,
			unfollow,
			startPage,
			loading,
			noLogo,
			page,
			textCountUsers,
			followFetching,
			setFollowUser,
			followUsers
		} = this.props

		return (
			<>
				{loading && <Preloader />}
				{!loading && <Users
					followFetching={followFetching}
					setFollowUser={setFollowUser}
					textCountUsers={textCountUsers}
					page={page}
					users={users}
					follow={follow}
					unfollow={unfollow}
					startPage={startPage}
					noLogo={noLogo}
					loading={loading}
					followUsers={followUsers}
					onPageChanged={this.onPageChanged}
				/>}
			</>
		)
	}
}

const mapStateToProps = state => {
	const { users, count, page, startPage, loading, fetching, textCountUsers, followFetching } = state.usersPage
	const noLogo = state.wallPage.noLogo

	return { users, count, page, startPage, loading, fetching, noLogo, textCountUsers, followFetching }
}

export default connect(mapStateToProps, {
	follow,	unfollow,	setUsers,
	setCurrentPage,	getTotalUsersCount,	setLoading,
	setFetching, setFollowUser, getUsers,
	followUsers
})(UsersContainerComponents)
