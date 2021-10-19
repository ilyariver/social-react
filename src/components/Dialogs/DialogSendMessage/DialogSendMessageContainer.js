import React from 'react';
import '../../../assets/images/smile.svg';
import { addDialogActionCreator, updateNewDialogActionCreator } from '../../../redux/dialogs-reducer'
import DialogSendMessage from "./DialogSendMessage";

const DialogSendMessageContainer = (props) => {
	const {newMessage, placeholderText} = props.store.getState().dialogs

	const sendToPressKey = () => {
			props.store.dispatch(addDialogActionCreator())
	}

	const ChangeInput = textValueInput => {
		props.store.dispatch(updateNewDialogActionCreator(textValueInput))
	}

	return (
		<DialogSendMessage
			addDialogActionCreator={addDialogActionCreator}
			onChangeInput={ChangeInput}
			onSendToPressKey={sendToPressKey}
			dialogs={newMessage}
			placeholderText={placeholderText}
		/>
	);
};

export default DialogSendMessageContainer;
