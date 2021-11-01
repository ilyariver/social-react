import React from 'react'
import '../../../assets/images/smile.svg'
import {addDialogActionCreator, updateNewDialogActionCreator} from '../../../redux/dialogs-reducer'
import DialogSendMessage from './DialogSendMessage'
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

// const DialogSendMessageContainer = props => {
// 	const store = props.store
//
// 	const {newMessage, placeholderText} = store.getState().dialogs
//
// 	const sendToPressKey = () => {
// 		store.dispatch(addDialogActionCreator())
// 	}
//
// 	const changeInput = textValueInput => {
// 		const loading = true
// 		store.dispatch(updateNewDialogActionCreator(textValueInput, loading))
// 	}
//
// 	return (
// 		<DialogSendMessage
// 			addDialogActionCreator={addDialogActionCreator}
// 			onChangeInput={changeInput}
// 			onSendToPressKey={sendToPressKey}
// 			dialogs={newMessage}
// 			placeholderText={placeholderText}
// 		/>
// 	)
// }

const mapStateToProps = state => {
	const {newMessage, placeholderText} = state.getState().dialogs

	return {
		newMessage,
		placeholderText,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		sendToPressKey() {
			dispatch(addDialogActionCreator())
		},
		changeInput(textValueInput) {
			const loading = true
			dispatch(updateNewDialogActionCreator(textValueInput, loading))
		}
	}
}

const DialogSendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogSendMessage)

export default DialogSendMessageContainer
