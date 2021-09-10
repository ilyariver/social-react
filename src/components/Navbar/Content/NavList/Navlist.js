import style from './Navlist.module.css';
import {NavLink} from 'react-router-dom';

const NavList = () => {
	return (
			<ul className={style.list}>
				<li className={style.item}>
					<NavLink activeClassName={style.active} to="/profile">Мой профиль</NavLink>
				</li>
				<li className={style.item}>
					<NavLink activeClassName={style.active} to="/dialogs">Сообщения</NavLink>
				</li>
				<li className={style.item}>
					<NavLink activeClassName={style.active} to="/news">Мои новости</NavLink>
				</li>
				<li className={style.item}>
					<NavLink activeClassName={style.active} to="/music">Моя музыка</NavLink>
				</li>
			</ul>
	)
};

export default NavList;
