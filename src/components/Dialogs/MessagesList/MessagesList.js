import style from './MessagesList.module.css'
import {Provider} from '../../../StoreContext'

const MessagesList = () => {

	return (
		<Provider>
			{
				store => {
					debugger
					const messagesData = store.getState().dialogs
					return (
						<ul className={style.messages}>
							{
								messagesData.map(item => {
									return <li
										key={item.message}
										id={item.id}
										className={style.message}>{item.message}</li>
								})
							}
						</ul>
					)
				}
			}
		</Provider>
	)
}

export default MessagesList
