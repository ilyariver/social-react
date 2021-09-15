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
						return (
							<li
								key={item.user}
								id={item.id}
								className={style.user_item}>
								<NavLink
									to={path + '/' + item.id}
									activeClassName={style.active}
									className={style.user_link}>{item.user}</NavLink>
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
