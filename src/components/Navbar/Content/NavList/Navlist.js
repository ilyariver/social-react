import React from 'react'
import style from './Navlist.module.css';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavList = () => {
	const optionsNavMenuList = useSelector(state => state.optionsNavMenu)

	return (
		<ul className={style.list}>
			{optionsNavMenuList.map(menuItem => {
				return <li key={menuItem.name} className={style.item}>

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
