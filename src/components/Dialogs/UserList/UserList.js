import style from './UserList.module.css'
import { NavLink } from 'react-router-dom'

const UserList = props => {
	return (
		<ul className={style.user_list}>
			{
				props.dialogsData.map(item => {
					const userStyles = {
						backgroundImage: `url(${item.avatar})`,
					}
					return (
						<li
							key={item.userName}
							id={item.id}
							className={style.user_item}>
							<NavLink
								to={props.path + '/' + item.id}
								activeClassName={style.active}
								className={style.user_link}>
								<span className={style.user_name}>{item.userName}</span>
								<div style={userStyles} className={style.avatar}></div>
							</NavLink>
						</li>
					)
				})
			}
		</ul>
	)
}

export default UserList
