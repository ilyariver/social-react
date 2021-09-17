import style from './Dialog.module.css';
import DialogSendMessage from './DialogSendMessage/DialogSendMessage';
import {NavLink} from "react-router-dom";


const Dialogs = (props)  => {
	const path = props.pathDialog[1].link;

	return (
		<div className={style.dialog_wrap}>
			<ul className={style.user_list}>
				{
					props.state.dialogsData.map(item => {
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
			<ul className={style.messages}>
				{
					props.state.messagesData.map(item => {
						return <li
							key={item.message}
							id={item.id}
							className={style.message}>{item.message}</li>
					})
				}
			</ul>
			<DialogSendMessage
				updateDialogInput={props.updateDialogInput}
				newMessage={props.state.newMessage}
				addNewDialogMessage={props.addNewDialogMessage} />
		</div>
	)
}

export default Dialogs
