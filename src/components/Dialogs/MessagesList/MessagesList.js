import style from './MessagesList.module.css'

const MessagesList = props => {
	const {messagesData} = props.dialogs

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
