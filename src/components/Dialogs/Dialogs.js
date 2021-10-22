import style from './Dialog.module.css';
import DialogSendMessageContainer from './DialogSendMessage/DialogSendMessageContainer';
import UserList from './UserList/UserList'
import MessagesList from './MessagesList/MessagesList'
import StoreContext from "../../StoreContext";

const Dialogs = () => {


	return (
		<StoreContext.Consumer>
			{
				store => {
					const getState = store.getState()
					return (
						<div className={style.dialog_wrap}>
							<UserList getState={getState}/>
							<MessagesList dialogs={getState.dialogs}/>
							<DialogSendMessageContainer store={store}/>
						</div>
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default Dialogs
