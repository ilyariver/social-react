import '../../../assets/images/smile.svg'
import {addDialogActionCreator, updateNewDialogActionCreator} from '../../../redux/dialogs-reducer'
import DialogSendMessage from './DialogSendMessage'
import { connect } from "react-redux"

const mapStateToProps = state => {
	const {newMessage, placeholderText} = state.dialogs

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
			dispatch(updateNewDialogActionCreator(textValueInput))
		}
	}
}

const DialogSendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogSendMessage)

export default DialogSendMessageContainer
