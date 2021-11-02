import React from 'react'
import style from './DialogSendMessage.module.css'

const DialogSendMessage = (props) => {
	const {newMessage, placeholderText} = props

	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			props.sendToPressKey()
		}
	}

	const changeInput = event => {
		const textValueInput = event.target.value
		props.changeInput(textValueInput)
	}

	return (
		<div className={style.send_message}>
			<input
				onKeyPress={sendToPressKey}
				onChange={changeInput}
				type="text"
				className={style.input}
				value={newMessage}
				placeholder={placeholderText} />
		</div>
	)
}

export default DialogSendMessage
