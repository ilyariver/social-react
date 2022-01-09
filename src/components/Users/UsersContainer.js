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
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'


class UsersContainerComponents extends React.Component {

	componentDidMount() {
		this.props.setLoading(true)
		const url =
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.startPage}&count=${this.props.count}`
		axios.get(url)
		.then(response => {
			console.log(response)
			this.props.setUsers(response.data.items)
			this.props.getTotalUsersCount(response.data.totalCount)
			this.props.setLoading(false)
		})
	}

	getCountPages() {
		const pagesCount = Math.ceil(this.props.page / this.props.count)
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		return pages
	}

	onPageChanged = pageNumber => {
		this.props.setLoading(true)
		this.props.setCurrentPage(pageNumber)
		const url =
			`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`
		axios.get(url)
		.then(response => {
			this.props.setUsers(response.data.items)
			this.props.setLoading(false)
		})
		.catch(error => {
			alert('Ошибка, ёбана', error)
		})
	}

	render() {
		const countPages = this.getCountPages()

		return (
			<>
				{this.props.loading && <Preloader />}
				{!this.props.loading && <Users
					countPages={countPages}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					startPage={this.props.startPage}
					onPageChanged={this.onPageChanged}
				/>}
				</>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		count: state.usersPage.count,
		page: state.usersPage.page,
		startPage: state.usersPage.startPage,
		loading: state.usersPage.loading
	}
}

export default connect(mapStateToProps, {
	follow,	unfollow,	setUsers,	setCurrentPage,	getTotalUsersCount,	setLoading})
		(UsersContainerComponents)
