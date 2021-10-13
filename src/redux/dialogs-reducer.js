const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE'
const UPDATE_DIALOG_INPUT = 'UPDATE-DIALOG-INPUT'

const dialogsReducer = (state, action) => {

	switch (action.type) {
		case ADD_NEW_DIALOG_MESSAGE:
			const newDialogMessage = {
				id: state.messagesData.length + 1,
				message: state.newMessage,
			}
			state.messagesData.push(newDialogMessage)
			state.newMessage = ''
			return state
		case UPDATE_DIALOG_INPUT:
			state.newMessage = action.text
			return state
		default:
			return state
	}
}

export const addDialogActionCreator = () => ({type: ADD_NEW_DIALOG_MESSAGE})
export const updateNewDialogActionCreator = textValueInput => ({type: UPDATE_DIALOG_INPUT, text: textValueInput})
export default dialogsReducer
