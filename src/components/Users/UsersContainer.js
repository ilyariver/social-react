import React from 'react'
import * as axios from 'axios'
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
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'


class UsersContainerComponents extends React.Component {

	componentDidMount() {
		this.props.setLoading(true)
		const url =
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.startPage}&count=${this.props.count}`
		axios.get(url)
		.then(response => {
			this.props.setUsers(response.data.items)
			this.props.getTotalUsersCount(response.data.totalCount)
			this.props.setLoading(false)
		})

		document.addEventListener('scroll', this.scrollHandler)
	}

	scrollHandler = e => {
		const LOWER_BOUND = 100
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < LOWER_BOUND) {
			console.log('scroll')
			this.props.setFetching(true)
			this.onPageChanged()
		}
	}

	getCountPages() {
		const pagesCount = Math.ceil(this.props.page / this.props.count)
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		return pages
	}

	onPageChanged = () => {
			const addedPages = this.props.startPage + 1
			const url =
				`https://social-network.samuraijs.com/api/1.0/users?page=${addedPages}&count=${this.props.count}`
			axios.get(url)
				.then(response => {
					if (this.props.fetching) {
						this.props.setUsers([...this.props.users, ...response.data.items])
						this.props.setFetching(false)
					}
				})
	}

	render() {
		const countPages = this.getCountPages()
		const {
			users,
			follow,
			unfollow,
			startPage,
			loading,
			noLogo
		} = this.props

		return (
			<>
				{loading && <Preloader />}
				{!loading && <Users
					countPages={countPages}
					users={users}
					follow={follow}
					unfollow={unfollow}
					startPage={startPage}
					noLogo={noLogo}
					onPageChanged={this.onPageChanged}
				/>}
			</>
		)
	}
}

const mapStateToProps = state => {
	const { users, count, page, startPage, loading, fetching } = state.usersPage
	const noLogo = state.wallPage.noLogo

	return { users, count, page, startPage, loading, fetching, noLogo }
}

export default connect(mapStateToProps, {
	follow,	unfollow,	setUsers,	setCurrentPage,	getTotalUsersCount,	setLoading, setFetching,
})(UsersContainerComponents)
