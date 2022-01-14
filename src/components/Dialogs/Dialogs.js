import style from './Dialog.module.css'
import DialogSendMessageContainer from './DialogSendMessage/DialogSendMessageContainer'
import MessagesListContainer from './MessagesList/MessagesListContainer'
import UserList from '../Users/UserList/UserList'

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
