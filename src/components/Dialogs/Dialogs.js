import style from './Dialog.module.css';
import DialogSendMessageContainer from './DialogSendMessage/DialogSendMessageContainer';
import UserList from '../Users/UserList/UserList'
import MessagesListContainer from './MessagesList/MessagesListContainer'

const Dialogs = () => {
	return (
		<div className={style.dialog_wrap}>
			<UserList />
			<div className={style.sendMessageWindow}>
				<MessagesListContainer />
				<DialogSendMessageContainer />
			</div>
		</div>
	)
}

export default Dialogs
