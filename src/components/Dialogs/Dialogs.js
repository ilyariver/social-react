import style from './Dialog.module.css';
import DialogSendMessage from './DialogSendMessage/DialogSendMessage';
import UserList from './UserList/UserList'
import MessagesList from './MessagesList/MessagesList'



const Dialogs = props  => {
	const path = props.pathDialog[1].link;


	return (
		<div className={style.dialog_wrap}>
			<UserList path={path} dialogsData={props.state.dialogsData}/>
			<MessagesList messagesData={props.state.messagesData}/>
			<DialogSendMessage
				placeholderText={props.state.placeholderText}
				newMessage={props.state.newMessage}
				dispatch={props.dispatch} />
		</div>
	)
}

export default Dialogs
