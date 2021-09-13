import style from './Navlist.module.css';
import { NavLink } from 'react-router-dom';

const NavList = (props) => {
	const optionsNavMenuList = props.optionsNavMenu;

	return (
			<ul className={style.list}>
				{optionsNavMenuList.map(menuItem => {
					return <li key={menuItem.name} className={style.item}>
						<NavLink activeClassName={style.active} to={menuItem.link}>{menuItem.name}</NavLink>
					</li>
				})}
			</ul>
	)
};

export default NavList;
