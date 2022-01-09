import style from './MessagesList.module.css'
import { useSelector } from 'react-redux'
import {useEffect, useRef} from 'react'

const MessagesList = props => {
	const { dialogs } = props
	const messagesEndRef = useRef(null)
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
	}

	useEffect(() => {
		scrollToBottom()
	},[dialogs])

	return (
		<ul className={style.messages}>
			{
				dialogs.map(item => {
					return <li
						key={item.message}
						id={item.id}
						className={style.message}>{item.message}</li>
				})
			}
			<li ref={messagesEndRef}></li>
		</ul>
	)
}

export default MessagesList
