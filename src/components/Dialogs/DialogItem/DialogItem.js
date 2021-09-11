import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	const path = '/dialogs/'
	return (
		<li className={style.user_item}>
			<NavLink to={path + props.id} activeClassName={style.active} className={style.user_link}>{props.user}</NavLink>
		</li>
	);
};

export default DialogItem;
