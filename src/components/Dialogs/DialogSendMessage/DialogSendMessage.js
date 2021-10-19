import React from 'react';
import style from './DialogSendMessage.module.css';
import '../../../assets/images/smile.svg';

const DialogSendMessage = (props) => {
	const {dialogs, placeholderText} = props
	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			props.onSendToPressKey()
		}
	}

	const changeInput = event => {
		const textValueInput = event.target.value
		props.onChangeInput(textValueInput)
	}

	return (
		<div className={style.send_message}>
			<input
				onKeyPress={sendToPressKey}
				onChange={changeInput}
				type="text"
				className={style.input}
				value={dialogs}
				placeholder={placeholderText} />
		</div>
	);
};

export default DialogSendMessage;
