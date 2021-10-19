import style from './Dialog.module.css';
import DialogSendMessageContainer from './DialogSendMessage/DialogSendMessageContainer';
import UserList from './UserList/UserList'
import MessagesList from './MessagesList/MessagesList'

const Dialogs = props  => {
	const path = props.store.getState().optionsNavMenu[1].link
	const {messagesData, dialogsData} = props.store.getState().dialogs

	return (
		<div className={style.dialog_wrap}>
			<UserList path={path} dialogsData={dialogsData}/>
			<MessagesList messagesData={messagesData} />
			<DialogSendMessageContainer store={props.store} />
		</div>
	)
}

export default Dialogs
