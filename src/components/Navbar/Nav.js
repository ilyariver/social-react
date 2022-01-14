import React from 'react'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import profile from '../../assets/images/profile-icon.svg'
import message from '../../assets/images/message-icon.svg'
import news from '../../assets/images/news-icon.svg'
import music from '../../assets/images/music-icon.svg'
import users from '../../assets/images/people-icon.svg'

const Nav = props => {

	const optionsNavMenuList = [
		{name: 'Мой профиль', link: `/profile/${props.profileId}`, img: profile,},
		{name: 'Сообщения', link: '/dialogs', img: message,},
		{name: 'Мои новости', link: '/news', img: news,},
		{name: 'Моя музыка', link: '/music', img: music,},
		{name: 'Моя друзья', link: '/friends', img: music,},
		{name: 'Добавить друга', link: '/users', img: users,},
	]

	return (
		<nav className={style.nav}>
			<div className={style.nav_wrap}>
				<ul className={style.list}>
					{optionsNavMenuList.map(menuItem => {
						return <li
							key={menuItem.name}
							className={style.item}>

							<NavLink
								className={style.text_content}
								activeClassName={style.active}
								to={menuItem.link}>
								<img
									className={style.image}
									src={menuItem.img}
									alt={menuItem.name.toLowerCase()}/>
								<div>{menuItem.name}</div>
							</NavLink>
						</li>
					})}
				</ul>
			</div>
		</nav>
	)
}

export default Nav
