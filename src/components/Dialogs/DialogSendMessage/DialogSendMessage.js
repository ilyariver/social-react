import React from 'react';
import style from './DialogSendMessage.module.css';
import '../../../assets/images/smile.svg';

const DialogSendMessage = (props) => {
	const newMessageElement = React.createRef();
	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			props.addNewDialogMessage()
		}
	}

	const oneChangeInput = () => {
		const textValueInput = newMessageElement.current.value;
		props.updateDialogInput(textValueInput);
	}

	return (
		<div className={style.send_message}>
			<input
				ref={newMessageElement}
				onKeyPress={sendToPressKey}
				onChange={oneChangeInput}
				type="text"
				className={style.input}
				value={props.newMessage}
				placeholder="Напиши что-нибудь, дрянь..." />
		</div>
	);
};

export default DialogSendMessage;
