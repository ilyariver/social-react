import React from 'react'
import style from './Navlist.module.css'
import { NavLink } from 'react-router-dom'
import profile from '../../../../assets/images/profile-icon.svg'
import message from '../../../../assets/images/message-icon.svg'
import news from '../../../../assets/images/news-icon.svg'
import music from '../../../../assets/images/music-icon.svg'
import users from '../../../../assets/images/people-icon.svg'

const NavList = props => {

	return (
		<ul className={style.list}>
			{props.optionsNavMenuList.map(menuItem => {
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
	)
};

export default NavList
