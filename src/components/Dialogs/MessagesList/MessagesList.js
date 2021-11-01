import style from './MessagesList.module.css'
import { useSelector } from 'react-redux'

const MessagesList = () => {
	const messagesData = useSelector(state => state.dialogs.messagesData)

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

export default MessagesList
