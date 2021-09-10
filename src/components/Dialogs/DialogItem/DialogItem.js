import style from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

export const DialogItem = (props) => {
	const path = '/dialogs/'
	return (
		<li className={style.user_item}>
			<NavLink to={path + props.id} activeClassName={style.active} className={style.user_link}>{props.user}</NavLink>
		</li>
	);
};

export const dialogsData = [
	{id: 1, user: 'Димка'},
	{id: 2, user: 'Петька'},
	{id: 3, user: 'Вовка'},
	{id: 4, user: 'Том'},
];



