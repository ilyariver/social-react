import React from 'react'
import '../../../assets/images/smile.svg'
import {addDialogActionCreator, updateNewDialogActionCreator} from '../../../redux/dialogs-reducer'
import DialogSendMessage from './DialogSendMessage'
import StoreContext from '../../../StoreContext'

const DialogSendMessageContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				store => {
					debugger
					const {newMessage, placeholderText} = store.getState().dialogs

					const sendToPressKey = () => {
						store.dispatch(addDialogActionCreator())
					}

					const ChangeInput = textValueInput => {
						store.dispatch(updateNewDialogActionCreator(textValueInput))
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
			}
		</StoreContext.Consumer>
	)
}

export default DialogSendMessageContainer
