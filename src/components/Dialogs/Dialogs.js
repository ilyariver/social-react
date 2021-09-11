import style from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogSendMessage from './DialogSendMessage/DialogSendMessage';


const Dialogs = (props) => {
	console.log(props)
	return (
		<div className={style.dialog_wrap}>
			<ul className={style.user_list}>
				{
					props.state.dialogsData.map(item => {
						return <DialogItem key={item.user} id={item.id} user={item.user}/>
					})
				}
			</ul>
			<ul className={style.messages}>
				{
					props.state.messagesData.map(item => {
						return <Message key={item.user} id={item.id} message={item.message} />
					})
				}
			</ul>
			<DialogSendMessage />
		</div>
	)
}

export default Dialogs
