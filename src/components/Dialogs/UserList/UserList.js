import style from './UserList.module.css'
import { NavLink } from 'react-router-dom'
import {Provider} from '../../../StoreContext'

const UserList = () => {

	return (
		<Provider>
			{
				store => {
					const path = store.getState().optionsNavMenu[1].link
						const dialogsData = store.getState().dialogs
					return (
						<ul className={style.user_list}>
							{
								dialogsData.map(item => {
									const userStyles = {
										backgroundImage: `url(${item.avatar})`,
									}
									return (
										<li
											key={item.userName}
											id={item.id}
											className={style.user_item}>
											<NavLink
												to={path + '/' + item.id}
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
			}
		</Provider>
	)
}

export default UserList
