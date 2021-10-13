import React from 'react';
import style from './DialogSendMessage.module.css';
import '../../../assets/images/smile.svg';
import { addDialogActionCreator, updateNewDialogActionCreator } from '../../../redux/dialogs-reducer'

const DialogSendMessage = (props) => {
	const newMessageElement = React.createRef();
	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			props.dispatch(addDialogActionCreator())
		}
	}

	const oneChangeInput = () => {
		const textValueInput = newMessageElement.current.value;
		props.dispatch(updateNewDialogActionCreator(textValueInput));
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
				placeholder={props.placeholderText} />
		</div>
	);
};

export default DialogSendMessage;
