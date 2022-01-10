import React from 'react'
import style from './Users.module.css'
import addUserImg from '../../../assets/images/add-user.svg'
import {Link} from 'react-router-dom'

const Users = props => {
	console.log(props)
	return (
		<div className={style.wrap}>
			<div className={style.totalCountUsers}>16521 Зарегестрированных пользователей</div>
			<ul className={style.list}>
				{
					props.users.map((user, i) => {
						return (
							<li
								key={user.name + i}
								className={style.item}>
								<div className={style.image_wrap}>
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
										<div className={style.userStatusContent}>
											<div className={style.statusText}>{user.status || ''}</div>
										</div>
									</div>
									<div className={style.location}>
										<button
											className={style.follow_btn}
											onClick={() => user.followed ? props.unfollow(user.id) : props.follow(user.id)}
										>
											{user.followed ? 'Друг' :
												<img className={style.addUserBtn} src={addUserImg} alt="" />
											}
										</button>
									</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Users
