import React from 'react'
import style from './Users.module.css'
import addUserImg from '../../../assets/images/add-user.svg'
import {Link} from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'
import {setApi} from '../../../api/api'

const Users = props => {
	return (
		<div className="component-wrap">
			<div className={style.totalCountUsers}><span>{props.page}</span> {props.textCountUsers}</div>
			<ul className={style.list}>
				{
					props.users.map((user, i) => {
						return (
							<li
								key={user.name + i}
								className={style.item}>
								<div className={
									`${style.image_wrap} ${props.followFetching.some(id => id === user.id) ? style.loading : ''}`
								}>
									{user.status && <div className={style.userStatusContent}>
										<span className={style.statusText}>{user.status}</span>
									</div>}
									<Link
										to={`/profile/${user.id}`}
										style={{
											backgroundImage: `url("${user.photos.large ?
												user.photos.large : props.noLogo}")`
										}}
										className={style.img}/>
								</div>
								<div className={style.content}>
									<div className={style.mainContent}>
										<Link to={`/profile/${user.id}`} className={style.userName}>{user.name}</Link>
									</div>
									<div className={style.location}>
										{user.followed ?
											<button className={style.unfollow_btn} onClick={() => {
												props.setFollowUser(true, user.id)
												setApi.unFollowFriend(user.id)
												.then(response => {
													debugger
													if (response.data.resultCode === 0) {
														props.unfollow(user.id)
													}
													props.setFollowUser(false, user.id)
												})
											}}>Удалить из друзей</button> :
											!props.followFetching.some(id => id === user.id)
												? <button className={style.follow_btn} onClick={() => {
												props.setFollowUser(true, user.id)
												setApi.followFriend(user.id)
													.then(response => {
														debugger
														if (response.data.resultCode === 0) {
															props.follow(user.id)
														}
														props.setFollowUser(false, user.id)
													})
											}}>
												<img className={style.addUserBtn} src={addUserImg} alt="" />
											</button> : ''}
									</div>
								</div>
							</li>
						)
					})
				}
			</ul>
			{!props.loading && <Preloader/>}
		</div>
	)
}

export default Users
