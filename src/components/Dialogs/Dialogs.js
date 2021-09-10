import style from './Dialog.module.css'
import {DialogItem, dialogsData} from './DialogItem/DialogItem'
import {Message, messagesData} from './Message/Message'


const Dialogs = (props) => {
	return (
		<div className={style.dialog_wrap}>
			<ul className={style.user_list}>
				{
					dialogsData.map(item => {
						return <DialogItem id={item.id} user={item.user}/>
					})
				}
			</ul>
			<ul className={style.messages}>
				{
					messagesData.map(item => {
						return <Message id={item.id} message={item.message} />
					})
				}

			</ul>
			<div className={style.send_message}>
				send
			</div>
		</div>
	)
}

export default Dialogs
