import style from './Dialog.module.css';
import DialogSendMessageContainer from './DialogSendMessage/DialogSendMessageContainer';
import UserList from '../Users/UserList/UserList'
import MessagesList from './MessagesList/MessagesList'

const Dialogs = () => {
	return (
		<div className={style.dialog_wrap}>
			<UserList />
			<MessagesList />
			<DialogSendMessageContainer />
		</div>
	)
}

export default Dialogs
