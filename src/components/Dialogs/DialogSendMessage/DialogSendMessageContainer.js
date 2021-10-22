import React from 'react'
import '../../../assets/images/smile.svg'
import {addDialogActionCreator, updateNewDialogActionCreator} from '../../../redux/dialogs-reducer'
import DialogSendMessage from './DialogSendMessage'

const DialogSendMessageContainer = props => {
	const store = props.store

	const {newMessage, placeholderText} = store.getState().dialogs

	const sendToPressKey = () => {
		store.dispatch(addDialogActionCreator())
	}

	const ChangeInput = textValueInput => {
		const loading = true
		store.dispatch(updateNewDialogActionCreator(textValueInput, loading))
	}

	return (
		<DialogSendMessage
			addDialogActionCreator={addDialogActionCreator}
			onChangeInput={ChangeInput}
			onSendToPressKey={sendToPressKey}
			dialogs={newMessage}
			placeholderText={placeholderText}
		/>
	)
}

export default DialogSendMessageContainer
