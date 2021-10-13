import style from './MessagesList.module.css'

const MessagesList = props => {
	return (
		<ul className={style.messages}>
			{
				props.messagesData.map(item => {
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
